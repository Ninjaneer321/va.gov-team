## Setup ARP Staging Users
- In a Staging teminal, run `bundle exec rake accredited_representative_portal:setup_staging_users`
  - You don't need to open a rails console session.  Just run the command from directly in the terminal.
  - [Staging vets-api in ArgoCD](https://argocd.vfs.va.gov/applications/vets-api-staging?view=tree&resource=)

---


## Enable Online Submissions for a VSO
- `Veteran::Service::Organization.find_by!(poa: 'SOME_ID').update!(can_accept_digital_poa_requests: true)`
