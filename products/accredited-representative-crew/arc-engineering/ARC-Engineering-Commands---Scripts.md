## Setup ARP Staging Users
- In a Staging rails console, run `bundle exec rake accredited_representative_portal:setup_staging_users`

---


## Enable Online Submissions for a VSO
- `Veteran::Service::Organization.find_by!(poa: 'SOME_ID').update!(can_accept_digital_poa_requests: true)`
