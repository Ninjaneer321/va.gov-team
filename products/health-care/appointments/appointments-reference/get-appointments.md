Data flow for `GET /vaos/v2/appointments` (index) and `GET /vaos/v2/appointments/:id` (show), in `vets-api/modules/vaos/`:

```mermaid
flowchart TD
    Client([Web client])
    MobClient([Mobile app])
    Client -->|"GET /vaos/v2/appointments[/:id]"| Ctrl
    MobClient -->|"GET /mobile/v0/appointments"| MobCtrl

    subgraph VA["vets-api / modules/vaos (+ modules/mobile overlay)"]
        Ctrl["VAOS::V2::AppointmentsController<br/>#index / #show"]
        MobCtrl["Mobile::V0::AppointmentsController"]
        Proxy["Mobile::V2::Appointments::Proxy"]
        Adapter["Mobile::V0::Adapters::VAOSV2Appointments"]
        AS["VAOS::V2::AppointmentsService"]
        MFS["VAOS::V2::MobileFacilityService<br/>(Rails.cache, 12h)"]
        EPS_S["Eps::AppointmentService<br/>(Redis: eps-appointments)"]
        Ser["VAOS::V2::VAOSSerializer"]
        MobSer["Mobile::V0::AppointmentSerializer<br/>(JSONAPI, camelCase)"]

        Ctrl --> AS
        Ctrl -->|"if _include=eps (show)"| EPS_S
        Ctrl --> Ser
        MobCtrl --> Proxy
        Proxy -->|"get_appointments()"| AS
        Proxy -.->|"raw VAOS hashes → parse()"| Adapter
        Adapter -.->|"Mobile::V0::Appointment[]"| Proxy
        MobCtrl --> MobSer
        AS -->|"facility + clinic enrichment"| MFS
        AS -->|"if include[:eps] (index)"| EPS_S
    end

    subgraph Shared["vets-api shared (lib/ + other modules)"]
        UHD["UnifiedHealthData::Service<br/>lib/unified_health_data"]
        TP["TravelPay::ClaimAssociationService<br/>modules/travel_pay"]
        AS -->|"if include[:avs]"| UHD
        AS -->|"if include[:travel_pay_claims]<br/>(feature-flagged)"| TP
    end

    subgraph Ext["External upstreams"]
        VAMF[("VAMF @ veteran.apps.va.gov<br/>Settings.va_mobile.url<br/>JWT (X-VAMF-JWT)<br/>direct — no forward proxy<br/><br/>serves: /vaos/v1/*, /vpg/v1/*,<br/>/facilities/v2/*, /cscs/v1/*")]
        EPS_API[("EPS / Wellhive<br/>api.wellhive.com<br/>OAuth2<br/>direct — no forward proxy")]
        AVS_API[("SCDF → Oracle Health Millennium<br/>(AVS metadata source for UHD)")]
        TP_API[("BTSSS TravelPay API")]
    end

    AS -->|"GET /(vaos|vpg)/v1/patients/:icn/appointments[/:id]"| VAMF
    MFS -->|"GET /vaos/v1/locations/:station/clinics<br/>GET /facilities/v2/facilities[/:id]<br/>GET /(vpg|cscs|facilities)/.../scheduling-config"| VAMF
    EPS_S -->|"GET /care-navigation/v1/appointments[/:id]"| EPS_API
    UHD -->|"AVS metadata + documents"| AVS_API
    TP -->|"claims by date range"| TP_API

    Ser -->|"JSON:API"| Client
    MobSer -->|"camelCase JSON"| MobClient

    classDef mobile fill:#9c9bf1,stroke:#0d9488,color:#000
    class MobClient,MobCtrl,Proxy,Adapter,MobSer mobile
```

**External upstream notes:**

- **VAMF (`veteran.apps.va.gov`)** — single gateway fronting multiple internal APIs (`/vaos/v1`, `/vpg/v1`, `/facilities/v2`, `/cscs/v1`). Both `AppointmentsService` and `MobileFacilityService` hit it; MFS just uses different path prefixes. Authenticated per-request with a user-scoped JWT in `X-VAMF-JWT` (session token issued by `VAOS::UserService`). **Direct — not behind `vsp-platform-fwdproxy`.**
- **EPS (Wellhive, `api.wellhive.com`)** — OAuth2 token cached in Redis (`eps-appointments` namespace). **Direct — not behind the forward proxy.**
- **SCDF → Oracle Health Millennium** — accessed via `UnifiedHealthData::Service`. Source of AVS metadata and documents. Only called when `include[:avs]` is set. See <https://docs.oracle.com/en/industries/health/millennium-platform-apis>.
- **BTSSS TravelPay** — this upstream is chatty. For a page of appointments, the naive serial flow issues one BTSSS claim lookup per appointment, which can dominate total request time. The `va_online_scheduling_parallel_travel_claims` feature flag was added specifically to fetch the appointment list and the associated travel claims concurrently, and `TravelPay::ClaimAssociationService` batches the per-appointment claim associations. Treat BTSSS as the likely bottleneck when diagnosing slow `get_appointments` responses.

Feature flags that alter this path: `va_online_scheduling_use_vpg` (VAOS vs VPG routing), `va_online_scheduling_cscs_migration` (scheduling-configs to CSCS), `travel_pay_view_claim_details`, `va_online_scheduling_parallel_travel_claims`, `va_online_scheduling_add_OH_avs`, `appointments_consolidation`.

### Mobile overlay notes

The VA.gov native mobile app uses the `MobClient → MobCtrl → Proxy → AS` branch of the diagram above. It reuses the same VAOS v2 service — no upstream calls are duplicated. Key points:

- **No duplicated upstream I/O.** `Mobile::V2::Appointments::Proxy` (`modules/mobile/app/services/mobile/v2/appointments/proxy.rb`) constructs an `include_params` hash and calls `VAOS::V2::AppointmentsService#get_appointments` directly. The mobile path inherits all VAMF / EPS / UHD / BTSSS behavior from the diagram above.
- **The adapter does field reshaping only.** `Mobile::V0::Adapters::VAOSV2Appointments` (`modules/mobile/app/models/mobile/v0/adapters/vaos_v2_appointments.rb`) delegates to `VAOSV2Appointment.build_appointment_model`, which handles appointment-type mapping (va / cc / request / telehealth with atlas/gfe/home/onsite variants), timezone resolution (via `Mobile::VA_FACILITIES_BY_ID` fallback), phone-number normalization, cancellation-reason mapping, travel-pay eligibility flagging, and the `facility_id;fileman_date.time` VetExt ID format downstream systems expect.
- **Mobile-only response shaping happens in the controller, not the service.** `reverse_sort`, `page_size` / `page_number` pagination (`Mobile::PaginationHelper`), `include_pending` filtering, and the `upcomingAppointmentsCount` / `travelPayEligibleCount` meta fields are all added after the adapter. Partial upstream failures return `207 Multi-Status`.
- **No mobile-layer caching.** Caching is still upstream (Rails.cache inside `MobileFacilityService`, Redis inside `Eps::AppointmentService`, `Memoist` inside `AppointmentsService`). When debugging a stale response seen in the mobile app, look there first.
- **Out of scope for this diagram:** mobile's `cancel`, `create`, and `avs_binaries` actions. Those involve `Mobile::Shared::AppointmentCreator` and additional `MobileFacilityService` eligibility calls, and are worth their own diagram if/when we touch them.
