# IA Design for Hosted Collections page on Pay.gov
**STATUS: Complete

**Team:** Financial Management

**IA Request:** [Ticket 125646](https://github.com/department-of-veterans-affairs/va.gov-team/issues/125646)

**Overview:** The team is building a payment flow for overpayments to make it easier for Veterans to make payments. The old process involved re-entering your information on an external form, and the new flow involves a Resolve page that guides the Veteran towards prefilling their payment details or guiding them through auth disputes or FSR. These three steps were previously on the debt detail page but that page got too long, so they wanted to separate them out to a separate page and our writer advised that we don't condense it any further. The old pay.va.gov form is still an option for people who can't log in to VA for some reason. The team is also exploring making the Resolve page accessible through the auth Profile.

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Meeting notes](#notes)

## <a name="flows"></a>User/page flows <br>
*The new flow will live within the debt portal*
<img width="4007" height="2212" alt="Pay gov hosted collections_2026-02-26_22-22-10" src="https://github.com/user-attachments/assets/d3a14dd2-a6f6-4e93-9c2e-2ad493bf1cc1" />


## <a name="map"></a>Page structure<br>
*The new Resolve and Pay pages will be at the same level as Disputes and FSR.*
<img width="2520" height="1749" alt="Pay gov hosted collections_2026-02-26_22-21-52" src="https://github.com/user-attachments/assets/974917db-d9e6-474b-961d-f6e711e732a6" />

## <a name="url"></a>URLs and breadcrumbs
*URL and breadcrumb requirements for each modified or new page within the experience. URLs and breadcrumbs must follow established patterns and standards of the existing site.*

**1) Resolve overpayment - New**
- URL: https://www.va.gov/manage-va-debt/resolve-overpayment/
- Breadcrumb: VA.gov > [Manage VA Debt H1] > [Resolve overpayment H1]

**3) Pay - New**
- URL: https://www.va.gov/manage-va-debt/pay/
- Breadcrumb:[Manage VA Debt H1] > [Pay H1]
- Notes: Veterans will choose to pay in full or pay in installments and the next option will take them to the pay.gov hosted page.

**2) Payment confirmation - New**
- URL: https://www.va.gov/manage-va-debt/pay/confirmation
- Breadcrumb: VA.gov > [Summary H1] > [Pay H1] > [H1 of payment confirmation page]

**3) Payment cancellation - New**
- URL: https://www.va.gov/manage-va-debt/pay/canceled
- Breadcrumb:  VA.gov > [Summary H1] > [Pay H1] > [H1 of payment cancellation page]

## <a name="nav"></a>Entry points <br>
*A list of new internal entry points, as well as changes to any existing entry points. This list focuses on the primary entry points and does not include all possible crosslinking opportunities.*

1. [Debt summary page](https://www.va.gov/manage-va-debt/summary/debt-balances)] - [Modify]
  - Placement description: Body copy (transaction tile)
  - Link label: TBD by content
  - Link destination:  https://www.va.gov/manage-va-debt/resolve-overpayment/
  - Notes: The summary page can get really long if a Veteran has a long transaction history, so the resolve page will have the payment/dispute/financial help methods. The summary/overview page is where Veterans land when they log in from the Manage VA, Dispute, Requestion Financial Help, or Resolve page.

2. [Debt summary page](https://www.va.gov/manage-va-debt/summary/debt-balances)] - [Modify]
  - Placement description: Body copy (transaction tile)
  - Link label: TBD by content
  - Link destination:  https://www.va.gov/manage-va-debt/pay/

2. [Debt detail page]- [Modify]
  - Placement description: Body copy (transaction CTA)
  - Link label: TBD by content
  - Link destination:  https://www.va.gov/manage-va-debt/resolve-overpayment/

3. [Manage VA debt unauth page](https://www.va.gov/manage-va-debt/) - [Modify]
   - Placement description: Body copy
   - Link label: TBD by content
   - Link destination: https://www.va.gov/manage-va-debt/pay/

## <a name="redirects"></a>Redirects <br>
*A list of any critical redirects needed as part of this product/feature launch. Redirects are required for any URL changes to ensure visitors do not receive a 404 - Page not found error in the experience. For any redirects listed, please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=jennymayoco%2C+kristinoletmuskat%2C+strelichl%2C+FranECross&labels=sitewide+CAIA%2C+Sitewide+IA%2C+Public+Websites%2C+VA.gov+frontend%2C+Redirect+request&projects=&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance.*  

None

Current URL | Redirect to | Notes
--- | --- | ---
 |  | 
 




<hr>
<hr>

