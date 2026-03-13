# VA.gov Search Feedback — Medallia Qualitative Analysis

- **Source file:** search-survey-030926-redacted.md
- **Total rows analyzed:** ~3,815
- **URL categories:**
 - `/search/` (VA.gov site search)
 - `/find-locations/` (Facility Locator)
 - `/find-locations/facility/` (specific facility pages)
 - `/forms/` (Find a VA Form)
- **Context:** Informing a transition from keyword-based search (Search.gov) to a modern semantic search platform

---

## ZERO & 999 RESULTS FLAG

Responses where Veterans explicitly reported zero results, 999 results, or result overload:

- "We didn't find any results for ICD-9-CM 799.9. Try using different words or checking the spelling of the words you're using." — /search/
- "Did another search for online means test in 's and didn't get any results! Seems like your search is [redacted] or purposely designed to make people not use it." — /search/
- "I searched for HOW to transfer to another VA medical facility and received '0' results." — /search/ 
- "The How to Correct Date of Birth had 999 answers which at least started the same as other quires which was not applicable. Terrible search software." — /search/
- "Searching website at top of page in '/search/' for VA Community care phone number, ZERO results populated." — /search/
- "Initially I was able to find what I was looking for, but once I created an account, it came back with 444 results for a replacement healthcare card, in which none so far has addressed the issue." — /search/ — Query: replacement healthcare card

**Implication for semantic search transition:** Both failure modes — zero results and undifferentiated bulk results — are characteristic of pure keyword matching with no semantic fallback. A semantic engine would surface conceptually related content even for partial or mismatched queries, and would rank results by relevance rather than returning an unordered result set.

---

## THEME 1 — INTENT & RELEVANCY

**Description:** The site search engine matches query tokens but not query intent, returning press releases, news articles, CPAP instructions instead of lab orders, and chemotherapy pages instead of tax abatement letters. Veterans describe result sets of 14+ pages with no date sorting, results matching one word of a multi-word phrase, and consistently turning to Google as a workaround. The engine also produces non-deterministic results — the same query typed verbatim returns different results on a second attempt.

**Frequency:** 30+ responses

**Direct Quotes:**

- "Every time I enter where i wanna go i get a [redacted] story book about 5 dozen ways to look up a whole lotta [redacted] i dont need" — /search/
- "Search returns are not ordered chronologically, with the most recent listed first. Nor is there any date listed in the page view on any of these returns. 14 pages to wade through??? Come on!!" — /search/
- "I NEEDED INSTRUCTIONS FOR BLOCK 5 OF FORM VBA-21-4502 AND THIS WHAT I GOT: VA FORM 21-526EZ ive been trying for more than 45 minutes, why is there a '/search/' block if even the VA.GOV provides results such as this?" — /search/
- "I searched for the online means test. That should have been the first thing on the search results! When I search Google it showed it first. Your search gave me 25+ pages." — /search/
- "search function for help is terrible. It goes to news articles instead of the location I'm looking for. Specifically when looking for the 'Quick submit' tool to upload docments." — /search/
- "I literally asked for a clinic's phone number, I got 10 pages of press releases." — /search/
- "primary care call center hours Terrible search facility, really awful!!!!" — /search/
- "despite a precise e address entered in search it provided 121 results none of which had anything to do with what was entered!" — /search/
- "I am looking for the section to do a Will. Search VA.gov does not return any good results for 'will preparation' and it is even its own auto completion." — /search/
- "Why is it so hard to put pharmacy hours on here. It would be great to type pharmacy hours in search bar and it actually come back the hours and not a bunch of links that has nothing to do with original search." — /search/
- "I was unable to find a way to request letter showing disability rating to be mailed to me. The search threw up 100s of irrelevant responses... Terrible search just throws up anything that has one matching word rather than the combination of words." — /search/
- "I was told my C & P exam results were available for my review. Now I am offered almost 1000 options. For what?" — /search/
- "I asked about getting medication on the weekend and received info about the weather" — /search/
- "I selected chronic adjustment disorder and typed it in... You web page provided me with information that does NOT discuss Chronic Adjustment Disorder. My question would be why would you program your site to give information that not what I am looking for." — /search/ — Query: CHRONIC ADJUSTMENT DISORDER
- "I was looking for the Tax Abatement Letter for myself needed for my DMV wounded warrior placard. I was sent to a page for 'My Chemotherapy Treatment.'" — /search/ — Query: tax abatement letter
- "I want to see if any laboratory tests have been ordered to be drawn prior to my next encounter. Searching for 'orders' produced directions for me to order CPAP equipment. Searching for 'laboratory' produced laboratory results." — /search/ — Query: orders
- "Returned call from social worker, directed to call Center who said I would need to sign a form so I could discuss my husband's health needs with the SW. When requested forms on that site, it came up with 99 pages of information re: sharing veterans' medical and personal information rather than a form" — /search/ — Query: information share agreement
- "No offense, but, this website is a [redacted]. I made a simple inquiry, on 'How do I edit my next of kin contact information'. The results were about anything with the word 'of', 'contact', or 'information'. It SHOULDN'T BE THIS DIFFICULT." — /search/ — Query: how do I edit my next of kin contact information
- "ONCE, I searched for rules on travel reimbursement and got a document 'Reimbursed VA travel expenses and mileage rate' I've typed the title per verbatim in the search block, and it doesn't show up again. the search engine seems to use its own key words." — /search/ — Query: rules for travel reimbursement
- "only about marketing VA" — /search/ — Query: geriatric support
- "Search could not find travel pay" — /search/ — Query: travel
- "I was searching for the Quick Submit Tool but it doesn't come up." — /search/ — Query: quicksubmit
- "I want to set up a passkey for my account for MF verification. However when I do a search for 'passkey' or 'setup passkey' nothing comes up?????????" — /search/ — Query: set up passkey
- "I need to know what dental coverage will cost BEFORE I enroll. I am 100% and considered a class IV for dental. Why is this not searchable? Easy? Or uncomplicated?" — /search/ — Query: what does dental coverage cost class IV
- "So many reasons. For starters this form barely works in Firefox. Second, why send an email regarding CEP and then when a person goes to search for CEP on the site directly does it not bring up results." — /search/ — Query: CEP
- "I'm just looking for the hours of my local clinic And when they do sample collection. The site has absolutely no Information for that. The search engine has no good results." — /search/ — Query: Patchogue
- "Unable to easily find 2026 SC disability compensation scale/rates for several dependent families of our veterans posts" — /search/ — Query: 2026 service connected disability compensation rates
- "Impossible to find the HISA form C. Can't find it under 'search'. It was terrible to find the original HISA application forms. It kept taking me in circles." — /search/ — Query: statement of satisfaction HISA
- "I'm searching for a gravesite in Naples, WW11 Special Forces and the site doesn't recognize any of the terms." — /search/ — Query: WW11 grave
- "1 teeny weeny question. What is the qualification for priority 1! I searched this site for an hour! THIS SITE SUCKS!" — /search/ — Query: priority 1 qualification
- "I recently read in a VA piece that a surviving widow of a deceased veteran that died of Bladder Cancer and a Vietnam Vet could receive a single cash benefit, now through your 'Search Mode' I can't find support of that." — /search/ — Query: surviving widow benefit

**Ideas generated by agent**
1. Deploy semantic/vector-based ranking that interprets query intent rather than token overlap. Queries like "how do I transfer to another VA medical facility" should return transfer process pages, not zero results. "Chronic adjustment disorder" should return mental health condition pages, not generic mental health content.
2. Implement a direct-answer / featured-snippet layer for highest-frequency query types — phone numbers, hours, form instructions, eligibility criteria — surfaced above organic results.
3. Suppress or de-rank press releases and news articles when query signals indicate transactional or navigational intent.
4. Treat multi-word queries as phrases. "Pharmacy hours" should not match every page containing either word independently.
5. Make search results deterministic. The same verbatim query should return the same results on repeated attempts.
6. Add date-sorting and result-count controls for all result pages. A 14-page result set with no sorting options is not usable.

---

## THEME 2 — INFO VS. ACTION

**Description:** Veterans arrive trying to complete specific tasks — enroll, upload evidence, submit a claim, refill a prescription, check status, schedule an appointment — and receive informational articles about those tasks instead of direct pathways to complete them. Broken upload flows (404s), a CHAMPVA application that redirects to the homepage, and an inability to schedule specialty appointments online are the most frequently cited specific failures. Veterans also cannot find tools like Quick Submit, the travel pay portal, or appointment check-in through site search.

**Frequency:** 40+ responses

**Direct Quotes:**

- "finding how to finish a claim that was put in as intent to file and now need to upload doc and complete. dont see how??" — /search/ — Query: finish filing claim
- "I just need a dentist. I came here because the website directed me here so YOU could tell me where a dentist is, but now it requires me to input so much damn info I have no idea about... Just make a zip code filter and show me all the dental clinics." — /find-locations/
- "I need to send a message to my COPC Sleep Study guy to order face masks but I can't seem to find a way to message him. There are 37 ways around answering my questions and I wonder why?" — /search/
- "Someone needs to correct this so veterans can easily get their money [travel pay]." — /search/
- "I'm trying to enroll in the VA health plan... If I type in enroll, or anything similar, all I get is WE COULD'T FIND THAT TRY ANOTHER SERVICE." — /find-locations/
- "Schedule an appointment. Cannot schedule online and cannot get through on the phone. Tried for days. NEED TO BE ABLE TO SCHEDULE ONLINE" — /find-locations/
- "Find a VA dental clinic. There is not an option for this. Although it states under the VA dental page to find a VA dental clinic here." — /find-locations/
- "Trying to find a VA dental center. The options in the location dropdown menu do not include dental option." — /find-locations/
- "I would like to have one spot where I can see all my medical/referral authorizations instead of scrolling through my inbox looking for them. The whole referral process is broken and causes long delays in getting needed care." — /search/
- "each time i attempt to begin champs application the system takes me to home page not pertaining to champva." — /search/
- "I started doing a Champ VA Application and was going to finish it but I guess I won't I can't even find out where to start over again." — /search/
- "i just wanted to order medication and you take me all over the place !!!!!!!!" — /search/
- "the lady on the helpline said i could upload my FOIA request here. i cant. i do a search for upload and the results says 'upload your documents' i click that link and the page says, page can not be found." — /search/
- "I have been trying to make an eye exam appointment for over two weeks now. I keep getting the run around and being told someone will call back to set up appointment and then nothing happens. How can I just get an appointment? There is no direct phone to call and the online VA site will not allow to schedule an eye appointment online." — /find-locations/
- "Followed directions to UPLOAD Supplemental claim documents and followed site link and nothing happened." — /find-locations/
- "I'm stuck on the page for selecting VA Cemeteries. I have selected one but have not been able to move to the next page to complete the application." — /find-locations/
- "I am trying to find EOB's for my practice but can't seem to do this online like I hoped to be able to do." — /search/ — Query: eob
- "I could not access certain laboratory reports, or my imaging reports, or contact specialists via secure messaging." — /search/ — Query: imaging reports
- "I cannot find what I am looking for! All I want to do is upload supporting documentation but I don't see it anywhere!!" — /search/ — Query: apply for benefits
- "I have tried calling and the 1-0 buttons don't work, tried the internet for two days and STILL can't find a list of all my claims, dates, and results. HELP" — /search/ — Query: claim list
- "I just want to change my banks and direct deposit but there's no information guiding me to do so" — /search/ — Query: how to change direct deposit
- "Cannot access forms" — /search/ — Query: 526ez
- "cannot find out how to upload new evidence for a VA claim appeal" — /search/ — Query: upload new evidence
- "Why do you make it so difficult to find something that should be so easy? How the hell do we enroll in the PACT ACT?!" — /search/ — Query: PACT ACT enrollment
- "I was rated 30% disabled September 2007. I have not been compensated for my daughters. I am trying to upload their information as they are in college universities." — /search/ — Query: upload dependent information
- "I am trying to find future appointments" — /search/ — Query: upcoming appointments
- "It was impossible to find my benefit verification letters. I stopped looking and used the way easier app instead." — /search/ — Query: benefit verification
- "Can't pull up my ChampVA benefit information, proof of coverage, how to order a new card." — /search/ — Query: ChampVA card
- "I don't seem to be able to find how to pay a bill." — /search/ — Query: payment
- "We are in a local hospital ER now- Sunday- and I wanted to access my husband's list of medications. Or other info- where/ how do I do that?" — /search/ — Query: access medical records
- "Can't navigate to medications refill" — /search/ — Query: medication refill
- "I need a Tamsulosin refill and there is nowhere to request it." — /search/ — Query: refill Tamsulosin
- "Cannot access my VA caregiver appeal and there is no way to contact support to ask questions about my appeal" — /search/ — Query: quicksubmit appeal
- "1 am a child of a veteran, i just turned 18 this year and would like to go to college but I couldn't find the link to apply online for dependents education assistance or chapter 35" — /search/ — Query: how to apply for DEA online
- "Everything on this website just leads to an article or some kind of request form. I already did your [redacted] forms and got approved just give me my health card information I don't need to fill out another application" — /search/ — Query: policy number
- "Moved recently and was told to update my address, but I cannot find how or where it is on your homepage." — /search/ — Query: UPDATE MY PROFILE
- "I'm trying to learn how to check in for my appointment with my phone, but can't figure out how to do that" — /search/ — Query: check in for appointment
- "I cant find information about something that should be pretty straight forward, adding my new wife to my VA profile." — /search/ — Query: showing proof of marriage
- "Pre-need VA burial at National Cemetery application form Where is this form? I cannot find this form anywhere, How do you expect us to get this application and submit it prior to our death?" — /search/ — Query: pre-need VA burial at National Cemetery application form
- "I can't seem to find my medication list anymore. All I get is pages telling me how to use it but I can't get there." — /search/ — Query: my medications
- "After going through a VERY lengthy and complicated sign in process I finally got into the VA site. I am trying to verify the status of my dependent for my disability compensation but so far haven't found a way to do it." — /search/ — Query: 335 AA
- "I have tried multiple times to download a form 26-8791 that I need for builder identification and it says the link doesn't work and to email the forms manager, which I have done twice and yet, I am still waiting for access to the form." — /search/ — Query: 26-8791
- "Instructions are unclear in finding the digital VA 10091 form." — /search/ — Query: va 10091
- "submit my va form 21-0538 online" — FORMS — [form page /forms/21-0538/]
- "THINGS ARE NOT ALL IN ONE PLACE MAKING IT EASIER FOR US VETS TO NAVIGATE!" — /search/
- "You have way too many, confusing choices. How do i get to Quick Submit?" — /search/ — Query: quick submit
- "Where is the app for 'quicksubmit'?" — /search/ — Query: quicksubmit
- "I cannot reach a claims representative to help with our claims questions! I have been trying for a week to reach someone on the phone. PII_PHONE NEVER answers or tells you to wait 2 or more hours!" — /search/ — Query: phone number for providers
- "I cant find what I need, I want to file a complaint about my appt. and I cant reach anyone" — /search/ — Query: complaints
- "Was trying to check upcoming appointment. was directed to multiple sites." — /search/ — Query: appointments
- "I need resources and support and help and or marriage counseling. My husband who is a Vietnam vet starting to get upset with me almost continuously." — /search/ — Query: my husband a veteran has anger issues help
- "I'm trying to find if I can get the VA to provide me with a hearing aid. I had a hearing test done at Wayne Memorial Audiology and definitely need help hearing." — /find-locations/

**Ideas generated by agent**
1. Classify queries by intent type at the search layer — transactional (do something), navigational (go somewhere), informational (learn something) — and serve task-completion widgets or deep links rather than content articles for transactional queries.
2. Add a dental facility type to the Facility Locator service-type dropdown; this gap is independently cited by at least three Veterans.
3. Surface a direct "Schedule appointment" CTA or callback number when search or Facility Locator detects appointment-seeking intent.
4. Audit all search-result deep links for broken destinations (404s) before deploying semantic search — bad links compound the relevancy failure.
5. Make CHAMPVA and enrollment application entry points directly findable from search, not only from within the enrollment workflow.

---

## THEME 3 — FACILITIES & CONTACTS

**Description:** The Facility Locator data is chronically stale across every facility type — VA health, community care, urgent care, pharmacy, vet center. Veterans report permanently closed locations, phone numbers that connect to spam or unrelated businesses, providers listed years after they left, contracted urgent care clinics that have terminated their VA contracts, and incorrect addresses. This is a systemic data quality and currency failure. At least one Veteran notes the inaccuracies "could be life threatening." Veterans are also unable to find community care providers by name and cannot locate contact information for specific VA offices through site search.

**Frequency:** 35+ responses

**Direct Quotes:**

- "The new VA clinic in Ocala has been open for a year and you still show old location." — /find-locations/
- "The urgent care locator needs to be updated. The Baptist Health urgent care location for New Albany is incorrect." — /find-locations/
- "Why is the Lowell OPC listed when it DOES NOT offer Audiology services?" — /find-locations/facility/vha_523BY
- "Updating the changes that occur with urgent cares or pharmacy location/name, or changes in contracts takes too long to reflect on the website... These inaccuracies could be life threatening" — /find-locations/
- "I called this facility and they say they no longer are taking veterans due to the fact that they were switched over to a different insurance carrier and asked me to pass on the word" — /find-locations/
- "Burton, Thomas is also a provider that no longer works at the location provided in the find VA locations portal. As a matter of fact, he hasn't worked there for several YEARS." — /find-locations/
- "Reported to an Urgent care who indicated that they no longer have a contract with the VA for urgent care services, but it is on the approved list." — /find-locations/
- "The follow location permanently closed. SOUTH ATLANTA URGENT CARE 5.0 miles 5185 OLD NATIONAL HWY ATLANTA, GA" — /find-locations/
- "Information regarding phone numbers and extensions are not accurate. Calls to extensions go unanswered." — /find-locations/
- "your listing is over 7 yrs old, says one provider I had is still at seamar and I know that is wrong. That's why I don't have her anymore. She left 7 yrs ago." — /find-locations/
- "The fax number to send medical records request to Alaska VA is incorrect on the webpage. The last number is cut off." — /find-locations/
- "You have the wrong physical location and contact number for the Indiana County VA clinic." — /find-locations/
- "None of the contact info for the 6 hospitals/urgent cares around zip code 44333 were accurate... WHO updates this and keeps these sites accurate?" — /find-locations/
- "Wrong phone number at Pre-Discharge Site at Dover Air Force Base. PII_PHONE goes to an entirely different business." — /find-locations/
- "Find an urgent care clinic near zip code 55315. The 2 listed in Chaska..Ridgeview and WestHealth do not exist." — /find-locations/
- "Most of the Pharmacies on the va list Say they do NOT take va.. they did like 3yrs ago and stopped.. Please update this way out dated list" — /find-locations/
- "The phone number listed on the VA website as follows PII_PHONE which is supposed to go to a VA facility obviously does not! It goes to some Spam [redacted]" — /find-locations/facility/vba_321a
- "This address is in there 3 times with same address and phone number.????" — /find-locations/
- "These data points are out of date and reference locations that have gone out of business." — /find-locations/
- "Go to an in network urgent care [and] the place I went to denied me and stated they were no longer an urgent care" — /find-locations/
- "How often are the addresses updated? I have a report from a provider that some of the mental health providers have the wrong address." — /find-locations/
- "I'm a Traveling Veteran Coordinator for Loma Linda VAMC. When searching for a VA facility in zip code 93535, the locator map does not show the Antelope Valley VA clinic in Lancaster." — /find-locations/
- "can't look up community care affiliated providers by name" — /find-locations/ — Query: [geo search, Suffolk VA, facilityType: health]
- "I searched for urgent care, and it took way too many pages of garbage unspecific results before I tried through Google to find the urgent care finder on the va site. Your website makes me wish I never needed help because it's so difficult to find the right information." — FIND /find-locations/ — Query: [geo search, Atascadero CA, facilityType: urgent_care]
- "All I want to know is if the VA has medical presence in the US Virgin Islands. CLC?" — /search/ — Query: US Virgin Islands medical care
- "searching for Rosener House in Menlo Park CA for veteran services for those with dementia" — /search/ — Query: Rosener House Menlo Park CA
- "cant find community care providers" — /search/ — Query: community care
- "I requested community care due to the extreme wait time to see a nephrologist. Nobody has contacted me in over a month. The pain associated with this issue is persistent and extreme. I'm looking to contact community care but there are no obvious links…" — /search/ — Query: community care
- "Audiology appointment in Indianapolis, IN" — /search/ — Query: audiology Indianapolis IN
- "Simply wanted information regarding urgent care facilities that were accepted by VA in N.H. unable to obtain info." — /search/ — Query: urgent care NH
- "WHere to get flu shot in Louisville, and when I can get the shot." — /search/ — Query: flu shot Louisville
- "Extremely difficult to find information on how to get prescriptions filled for medications through community care." — /find-locations/ — Query: [geo search, Aloha OR, facilityType: pharmacy]
- "I selected this rating because this facility list is trash. I used to be able to search by address to find a station/VISN number to accurately route utility invoices to the correct servicing station but I cant with this trash search function. Put it back the way it was." — FIND /find-locations/
- "I can't find what I'm looking for--which is how to find the gravesite location of my father at fort rosecrans" — /search/ — Query: grave location at Rosecrans
- "I'm searching for a gravesite in Naples, WW11 Special Forces and the site doesn't recognize any of the terms." — /search/ — Query: WW11 grave

**Ideas generated by agent**
1. Implement a continuous data-verification pipeline for community care and urgent care contract status. Provider contracts change frequently; the display must reflect current contract status, not last-import status.
2. Add a user-accessible "Report incorrect information" button on every Facility Locator result card with a structured intake form routed to the data owner. Veterans are already providing corrections — they have no structured channel.
3. Deduplicate location records before display (duplicate addresses are appearing as separate results).
4. Audit provider listings for recency. A provider listing that is 7 years stale represents a systemic MDM failure, not an edge case.
5. Display a "Last verified" date on each listing so Veterans can assess data currency themselves.
6. Enable community care provider search by provider name, not only by geography and facility type.

---

## THEME 4 — FRAGMENTATION

**Description:** Veterans experience VA.gov as a collection of disconnected systems — VA.gov, My HealtheVet, eBenefits, Login.gov — each with separate logins, URLs, and information architectures. When systems are migrated, Veterans lose previously working features (medication photos, Blue Button reports, secure messaging, prescription tracking) with no meaningful transition guidance. The recurring phrase "the old system worked" reflects a concrete loss of capability, not nostalgia. Veterans are also sent in circular loops between systems that each redirect to the other.

**Frequency:** 20+ responses

**Direct Quotes:**

- "Community care says go on my healthevet to read print referrals But No my healthe vet It sits there curser spinning Va.gov spins Old saying. If it ain't broke don't fix it" — /search/
- "Since you fixed what wasn't broken I cannot get on any VA web site. All my free meds are costing me money through express scripts." — /search/
- "If you are trying to confuse vets with all these 'your prescription information may be on another website' - well, you're doing a bang-up job of it." — /find-locations/
- "The old wed site had more and better information so that you could track and view your medications with pictures... Please go back to the old web site it worked without issues." — /find-locations/
- "The old system worked just fine... God you screwed this up and I have technical knowledge. What about our older vets." — /find-locations/ 
- "the old system was straight forward not going in n out. everything was at the top of page." — /find-locations/
- "I have in the past been very comfortable using myhealthevet for reordering my meds. The 'new' system is a headache and seems to be more and more difficult to use." — /find-locations/ 
- "this is just [redacted] terrible.. I want my healty vet back.. it worked, this [redacted] doesn't.. who the hell set this nonworking [redacted] up.. I can't get to my dr. to set up an appt.." — /find-locations/
- "The problem is those new codes only issued once, to access login.gov... Now i must travel to the VA Northwest clinic once again because login.gov codes i got months ago and i have attention deficit and don't organize very well." — /find-locations/
- "So many log in decisions/options, even after stating desired location and logging in I had to make three selections to get to my healthy vet." — /find-locations/
- "Where'd the Blue Button Reports go? Maybe they're still here somewhere but not readily visible like they once were. Either tell me where they are up front or tell me they're no longer available." — /search/
- "The site used to be better when you could see all site location in a given state on 1 screen without having to enter information 3 or 4 separate times." — /find-locations/
- "I'm trying to find information on Health Promotion and Disease Prevention (from page 17 of the Veterans Health Benefits Handbook). I typed in the URL listed in the handbook, but it redirects me back to va.gov. I searched va.gov for my topic, but the links sent me back to myhealt.va.gov, which redirects me back to va.gov. It's a loop." — /search/ — Query: healthy living center
- "I think the site is a little more confusing compared to how it once was I don't know if I'm doing it wrong or what but the old way was more direct I didn't have to click several different button to get what I want to get to" — /search/ — Query: bluebutton
- "it could be a lot easier to get to my healthevet without going through a lot of hoops" — /search/ — Query: medications
- "No SMC status as shown on former eBenefits site. I would like to see my SMC status and details displayed on va.gov site." — /search/ — Query: SMC rating status
- "Can't find 1099 anywhere... Navigation sucks, not intuitive and feels like the flow was not written by a user. Used to work all the options on splash page. Direct login." — /search/ — Query: 1099
- "Some items are difficult to find surrounding GI bill benefits, and I keep getting emails from 'ask VA' but I don't see it anywhere else on this site." — /search/ — Query: ask va
- "with the changes to medication lists I would hate to be a non-IT person trying to use it! Its confusing and very difficult to search or use." — /search/ — Query: quick submit
- "This website is not working with what I was told to do. I called regarding my daughters benefits for school and the person just said to click on chapter 35 which is not available" — /search/ — Query: chapter 35
- "Confusing on where to go to get information." — /search/ — Query: community care
- "Was trying to check upcoming appointment. was directed to multiple sites." — /search/ — Query: appointments
- "The problem is that it is so complicated to find and use anything of interest. It may be OK for the younger people who know what they are doing, we older GI's are lost. By the time I find what, used to be easy I can't remember why I wanted it. You've turned something that was easy to use into the unusable." — /search/ — Query: VA SECURE MESSAGES

**Ideas generated by agent**
1. Implement a federated search layer that queries across VA.gov, My HealtheVet, and eBenefits and surfaces results from any system in a single results page. Veterans should not need to know which sub-system holds their prescription history.
2. When a feature moves or is retired, the search index should resolve legacy terms (e.g., "Blue Button," "MyHealtheVet prescription refill") to the new canonical location rather than a no-results page.
3. Consolidate the login entry point. Login.gov, ID.me, DS Logon, and My HealtheVet credentials appearing as separate choices requiring Veterans to know which one applies to which task is a primary access barrier.
4. Maintain a persistent, publicly accessible "what changed and where did it go" page for all platform migrations, linked from search results for affected query terms.
5. Synchronize guidance between phone staff and the website. Veterans following phone instructions and hitting dead ends on the site is a systemic failure, not a training problem.

---

## THEME 5 — ACCESSIBILITY & DIGITAL LITERACY GAP

**Description:** A distinct sub-population of Veterans — older Veterans, those with visual impairments, and those with low digital literacy — are explicitly blocked by the site's complexity in ways that go beyond general frustration. These Veterans are not describing a system that changed; they are describing a system that was never designed for them. Login fragmentation, multi-step navigation, and search results that return lists instead of direct answers are the primary barriers cited. This theme is distinct from Fragmentation because the cause is not a migration — it is a design mismatch.

**Frequency:** 10+ responses

**Direct Quotes:**

- "NOT VISUALLY IMPAIRED ACCOMMODATING" — /search/ — Query: KEARNY MESA
- "My husband can't find his DD214 because he can't see out of one eye, and I can't get a copy being his wife." — /search/ — Query: dd214
- "HAVING TROUBLE NAVIGATING THROUGH THE PORTALS SEEMS LIKE VA THINKS THAT EVERYONE IS A TECH GENIUS." — /search/ — Query: BTSSS
- "The problem is that it is so complicated to find and use anything of interest. It may be OK for the younger people who know what they are doing, we older GI's are lost. By the time I find what, used to be easy I can't remember why I wanted it." — /search/ — Query: VA SECURE MESSAGES
- "with the changes to medication lists I would hate to be a non-IT person trying to use it! Its confusing and very difficult to search or use." — /search/ — Query: quick submit
- "The login process is too lengthy and confusing. I do not know who tampered with this, but it is not old people friendly." — /find-locations/
- "The old system worked just fine... God you screwed this up and I have technical knowledge. What about our older vets." — /find-locations/

**Ideas generated by agent**
1. A direct-answer layer — returning a phone number, hours, or a single deep link rather than a list of results — reduces cognitive load for the population most harmed by current search behavior, without requiring Veterans to evaluate relevance themselves.
2. Prioritize plain-language result snippets and clear action labels over document titles in result displays.
3. Audit the site against WCAG 2.1 AA standards with particular attention to screen-reader compatibility. The "NOT VISUALLY IMPAIRED ACCOMMODATING" response suggests at least one Veteran attempted to use assistive technology and found it unsupported.

---

## THEME 6 — TAX & FINANCIAL DOCUMENTS

**Description:** A high-concentration cluster of Veterans trying to retrieve 1099-Rs, tax statements, EOBs, and benefit verification letters — documents with hard external deadlines (tax filing, housing applications, DMV). These are not general search failures; they are failures at a predictable, high-volume, time-bound query type that should be solvable with a direct authenticated document link. Veterans coming from the `/forms/` URL indicate they are already using the correct tool and still cannot locate the document. This is a seasonal amplification of the Info vs. Action theme that warrants its own platform-level response.

**Frequency:** 8+ responses in this dataset; volume likely significantly higher during tax season

**Direct Quotes:**

- "No way to retrieve OPM claim number to view 1099r form" — /search/ — Query: 1099r
- "Find 1099r" — FORMS — Query: 1099
- "Can't find 1099 anywhere, I've clicked all the links my clicker can click. Neither Searches or perusing could I find anything even remotely related. None of the options fit. At least SSA had all their info easily found, messaged to me it was ready, and instant, no wait." — /search/ — Query: 1099
- "This website is a piece of [redacted]. Can not answer a simple question about a 1099 form." — /search/ — Query: 1099-R form
- "It's tax season. I'm trying to find the tax statement 2025 for survivor beneficiary. Or are you going to mail it? Just asking." — FORMS — Query: tax statement 2025
- "I was looking for the Tax Abatement Letter for myself needed for my DMV wounded warrior placard. I was sent to a page for 'My Chemotherapy Treatment.'" — /search/ — Query: tax abatement letter
- "I am trying to find EOB's for my practice but can't seem to do this online like I hoped to be able to do." — /search/ — Query: eob
- "I'm trying to get my benefit letter and it will not let me. I have tried multiple times. I called in as well and there is no option for printing. I need it for housing. Everything is so difficult with your site." — /search/ — Query: email my benefits letter

**Ideas generated by agent**
1. Create a dedicated, authenticated "My Documents" entry point that surfaces 1099-R, tax statements, benefit verification letters, and EOBs in one place, and make it directly findable from site search for queries like "1099," "tax statement," and "benefit letter."
2. Configure the search engine to recognize seasonal spikes in document-retrieval queries and surface the authenticated document portal as the top result, above any informational content.
3. Align with SSA's model: proactively notify Veterans via email when their 1099-R or tax statement is available, with a direct authenticated link — eliminating the search need entirely for this document type.

---

## TECHNICAL ISSUES & BUGS

**Theme: Facility Locator Extended Outage**

**Description:** The Facility Locator experienced a prolonged outage — complaints span from "weeks" to "over a year" — during the survey period. Dozens of Veterans hit a "down for maintenance" message and could not find VA locations, urgent care, or community care providers, directly blocking appointment scheduling and care access.

**Frequency:** 25+ responses

**Direct Quotes:**

- "How long before your facility locator is up and running????? I have been trying for over a week" — /find-locations/
- "find va location. This service has been unavailable for at least a month or more" — /find-locations/
- "Facility Locator is still down. FIX IT!" — /find-locations/
- "Facility locator has been down for 'maintenance' for weeks now!" — /find-locations/
- "The location finder on VA.gov has been down for WEEKS! FIX IT ALREADY." — /find-locations/
- "locate va location. This information has not been available for the past few months." — /find-locations/
- "The VA locator has been down for over a year, I have not been able to schedule any appointments." — /find-locations/
- "the VA Locator is 'down for maintenance', plus it has been down for over a year now." — /find-locations/
- "The VA locator has been 'down' for over a year." — /find-locations/
- "find an urgent care - this tool has been broken for weeks. please fix it" — /find-locations/
- "get urgent care at authorized facility. web site down. not happy" — /find-locations/

**Theme: Broken Links, Form Failures, and Access Errors**

**Description:** Veterans encounter 404 errors on search-result destination pages, forms that will not load, broken download links, app crashes, browser incompatibility, and login failures.

**Frequency:** 10+ responses

**Direct Quotes:**

- "the lady on the helpline said i could upload my FOIA request here. i cant. i do a search for upload and the results says 'upload your documents' i click that link and the page says, page can not be found." — /search/
- "I have tried multiple times to download a form 26-8791 that I need... it says the link doesn't work and to email the forms manager, which I have done twice and yet, I am still waiting for access to the form." — /search/ — Query: 26-8791
- "I'm trying to find information on Health Promotion and Disease Prevention... the links sent me back to myhealt.va.gov, which redirects me back to va.gov. It's a loop." — /search/ — Query: healthy living center
- "TERRIBLE software for both my MacBook Air and my iphone. I've had error messages, sites with no way to continue, several phone calls with no resolution. This is a fabulous example of ineptitude in government program management." — /search/ — Query: VHIC card
- "The search information has changed significantly when trying to find results for the VA National Golden Age Games Medical Clearance Form, 0926e. This form has always been accessible on this platform for the physicians to complete for their patients. PLEASE, refresh this search bar so that the VA doctors can complete this medical clearance document for their patients who need it when they register for the Golden Age Games. Mandatory Registration starts in less than two weeks." — /search/ — Query: National Golden Age Games
- "So many reasons. For starters this form barely works in Firefox." — /search/ — Query: CEP
- "We can't figure out how to navigate through the app" — /search/ — Query: decision letter
- "I rode my bike all the way out to the VA to change my direct deposit, based upon the hours of operation listed on THIS webpage. I get there and find out I now have to call a number and leave a message to schedule an appointment." — /find-locations/facility/vba_339f

**Ideas generated by agent**
1. Implement a degraded-mode static fallback for the Facility Locator — even a cached list of VA facilities with last-known contact information — so Veterans are not left with a blank page when the primary system is down.
2. Establish and publish SLAs for Facility Locator uptime. The survey data spans over a year of complaints.
3. Implement real-time monitoring and automated alerting for 404 rates on all search-result destination pages and upload flow endpoints.
4. Audit all form download and document upload flows for broken links before any search platform migration. Broken downstream links will compound semantic search relevancy failures.

---

## CROSS-THEME PATTERNS

Responses that touched multiple themes simultaneously (highest severity):

- "We are in a local hospital ER now- Sunday- and I wanted to access my husband's list of medications. Or other info- where/ how do I do that?" — /search/ — **Themes: Info vs. Action + Technical Issues** — Time-critical medical context; no authenticated record access pathway surfaces through search.
- "the lady on the helpline said i could upload my FOIA request here. i cant. i do a search for upload and the results says 'upload your documents' i click that link and the page says, page can not be found." — /search/ — **Themes: Info vs. Action + Technical Issues** — Search surfaces a relevant-looking result; destination is a 404.
- "I'm trying to find information on Health Promotion and Disease Prevention... the links sent me back to myhealt.va.gov, which redirects me back to va.gov. It's a loop." — /search/ — **Themes: Fragmentation + Technical Issues** — Handbook URL is broken and search cannot compensate.
- "I'm trying to get my benefit letter and it will not let me. I have tried multiple times. I called in as well and there is no option for printing. I need it for housing." — /search/ — **Themes: Info vs. Action + Technical Issues + Tax & Financial Documents** — Hard external deadline (housing); every available channel is blocked.
- "ONCE, I searched for rules on travel reimbursement and got a document... I've typed the title per verbatim in the search block, and it doesn't show up again. the search engine seems to use its own key words." — /search/ — **Themes: Intent & Relevancy + Technical Issues** — Same query, different results; non-deterministic search behavior.
- "This website is not working with what I was told to do. I called regarding my daughters benefits for school and the person just said to click on chapter 35 which is not available" — /search/ — **Themes: Fragmentation + Info vs. Action** — Phone staff and website are out of sync; Veteran follows correct guidance and hits a dead end.
- "Community care says go on my healthevet to read print referrals But No my healthe vet It sits there curser spinning Va.gov spins" — /search/ — **Themes: Fragmentation + Technical Issues** — Cross-system referral loop fails at both ends.
- "I literally asked for a clinic's phone number, I got 10 pages of press releases." — /search/ — **Themes: Intent & Relevancy + Facilities & Contacts** — Search fails to surface contact data that is also likely stale in the Facility Locator.
- "Can't find 1099 anywhere... Navigation sucks, not intuitive... Used to work all the options on splash page." — /search/ — **Themes: Tax & Financial Documents + Fragmentation + Intent & Relevancy** — Time-sensitive document, site redesign removed the direct pathway, search cannot compensate.
- "My husband can't find his DD214 because he can't see out of one eye, and I can't get a copy being his wife." — /search/ — **Themes: Accessibility & Digital Literacy Gap + Info vs. Action** — Visual impairment and spousal access policy converge to create a complete blockage.
- "The problem is that it is so complicated to find and use anything of interest. It may be OK for the younger people who know what they are doing, we older GI's are lost." — /search/ — **Themes: Accessibility & Digital Literacy Gap + Fragmentation** — Site complexity is a design problem; migration made it worse for this population.

---

## SUMMARY

**Total responses analyzed:** ~3,815

**Theme breakdown (approximate):**

| Theme | Responses |
|---|---|
| Theme 1 — Intent & Relevancy | 30+ |
| Theme 2 — Info vs. Action | 40+ |
| Theme 3 — Facilities & Contacts | 35+ |
| Theme 4 — Fragmentation | 20+ |
| Theme 5 — Accessibility & Digital Literacy Gap | 10+ |
| Theme 6 — Tax & Financial Documents | 8+ (seasonally amplified) |
| Technical Issues & Bugs | 35+ |

**Top priorities for immediate action:**

1. **Facilities & Contacts data currency** — The highest-frequency theme with the only documented life-safety implication ("could be life threatening"). Veterans are being physically misdirected to closed clinics and clinics that deny care. No search platform improvement can compensate for fundamentally wrong underlying data. Data governance for community care, urgent care, and provider records must be resolved at the source before or concurrent with any platform migration. Community care data quality is measurably worse than VA-direct facility data.

2. **Intent & Relevancy / Info vs. Action** — The modal experience across the `/search/` portion of this dataset is a search engine that returns content matching query words but not query intent. The transition to semantic search directly addresses this. Intent classification (transactional vs. informational) and a direct-answer layer for high-frequency query types (phone numbers, hours, form links, document retrieval) would resolve the majority of cited failures without requiring Veterans to change their behavior.

3. **Facility Locator outage resilience** — Complaints about the Locator being unavailable span over a year of this dataset, blocking appointment scheduling and care access at scale. A degraded-mode fallback is a prerequisite for any platform that surfaces Facility data in search results. Surfacing a faster path to data that is simply unavailable does not help Veterans.

**Key transition signal:** The move from keyword-based search to a semantic platform directly addresses the most frequently cited failure: search returning results that match query words but not query intent. A semantic engine would have returned "means test enrollment form" for the query "means test online" instead of zero results; would have treated "chronic adjustment disorder" as an entity rather than three separate tokens; and would have surfaced a phone number or hours answer directly for "primary care call center hours" instead of 10 pages of press releases. These are not edge cases — they represent the modal search experience described in this dataset.
