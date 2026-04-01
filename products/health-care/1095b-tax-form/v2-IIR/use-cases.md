# 1095-B Proof of Healthcare use cases
**Last updated: April 2026**

- [User flow](https://www.figma.com/design/cP7JJ9ExBtn2jNax9cfinA/1095-B?node-id=1036-24356&t=4u2RwT3RjCOwd9gC-1)
- [Figma files](https://www.figma.com/design/cP7JJ9ExBtn2jNax9cfinA/1095-B?node-id=1037-32186&t=4u2RwT3RjCOwd9gC-1)


## Current experience
- This page allows users to download their 1095-B proof of healthcare for the years they were enrolled in VA healthcare for at least one month over the last three years.
- For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the user will be directed to sign in with a verified account.

 
## Common use cases
### User logs in with LOA3 account

<details><summary>User was enrolled in VA healthcare for at least one month for the last previous three tax years and they were not a CHAMPVA</summary>

- **Use case:** If a user was enrolled in VA healthcare for all of the previous three years for at least one month each year and they were not a CHAMPVA they will see three card components with links to download a PDF or download a Text file for the year associated with the card.
- **Format:** [Card component)](https://design.va.gov/components/card)
- [Link to designs](https://www.figma.com/design/cP7JJ9ExBtn2jNax9cfinA/1095-B?node-id=1037-32252&t=4u2RwT3RjCOwd9gC-1)
- [Link to code]
- **Content:** [See design](https://www.figma.com/design/cP7JJ9ExBtn2jNax9cfinA/1095-B?node-id=1037-39900&t=4u2RwT3RjCOwd9gC-1)

</details>

<details><summary>User was enrolled in VA healthcare for at least one month of one of the previous three tax years and were not a CHAMPVA</summary>

- **Use case:** A user will only see cards with links to download 1095-B tax documents for the years which they were enrolled in VA healthcare and were not a CHAMPVA.
- **Status code:** TBD
- **Format:** [Card component)](https://design.va.gov/components/card)
- [Link to designs](https://www.figma.com/design/cP7JJ9ExBtn2jNax9cfinA/1095-B?node-id=1411-3054&t=kR9nLSBAt9IS7L1i-1)
- [Link to code]
- **Content:** [See design](https://www.figma.com/design/cP7JJ9ExBtn2jNax9cfinA/1095-B?node-id=1411-3054&t=kR9nLSBAt9IS7L1i-1)

</details>

## Edge cases
### Validation
<details><summary>User wasn’t enrolled in VA healthcare for any of the previous three tax years</summary>

- **Use case:** If a user was not enrolled in VA healthcare for any of the previous three years they will see an informational alert.
- **Status code:** TBD
- **Format:** [Informational alert component(default)](https://design.va.gov/components/alert/#informational-alert-aka-default)
- [Link to designs](https://www.figma.com/design/cP7JJ9ExBtn2jNax9cfinA/1095-B?node-id=1037-32246&t=4u2RwT3RjCOwd9gC-1)
- [Link to code]
- **Content:**

Header: You don’t have a 1095-B  tax form available right now

You do not have a 1095-B  tax form available. This could be because you were a CHAMPVA beneficiary or you weren’t enrolled in VA healthcare in 2024. If you think you were enrolled, call us at 877-222-8387 (TTY:711).  We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. ET.

</details>

<details><summary>User was a CHAMPVA for the previous three tax years</summary>

- **Use case:** If a user was a CHAMPVA for the previous year they will see an informational alert.
- **Status code:** TBD
- **Format:** [Informational alert component(default)](https://design.va.gov/components/alert/#informational-alert-aka-default)
- [Link to designs](https://www.figma.com/design/cP7JJ9ExBtn2jNax9cfinA/1095-B?node-id=1037-32246&t=4u2RwT3RjCOwd9gC-1)
- [Link to code]
- **Content:**

Header: You don’t have a 1095-B  tax form available right now

You do not have a 1095-B  tax form available. This could be because you were a CHAMPVA beneficiary or you weren’t enrolled in VA healthcare in 2024. If you think you were enrolled, call us at 877-222-8387 (TTY:711).  We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. ET.

</details>


### Flags 
[Blocked users documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)

[User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)


### Errors
#### System errors
