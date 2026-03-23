## LGY Staging User Reference (2026-03-22)

> Staging data is hand-crafted by the LGY SQA team and can change. This is a snapshot as of 2026-03-22. 33 of 66 user pairs had LGY data.

| Mock User | EDIPI | ICN | determination | application | coe_status | Notes |
|---|---|---|---|---|---|---|
| vetsgovuser1 | 1005079124 | 1008596379V859838 | UNABLE_TO_DETERMINE_AUTOMATICALLY | 404 | UNABLE_TO_DETERMINE_AUTOMATICALLY | |
| vetsgovuser14 | 1007451748 | 1008709435V263289 | PENDING | 200 SUBMITTED | PENDING | same EDIPI as user271 |
| vetsgovuser17 | 1005072030 | 1008596380V707659 | UNABLE_TO_DETERMINE_AUTOMATICALLY | 404 | UNABLE_TO_DETERMINE_AUTOMATICALLY | |
| vetsgovuser22 | 1098697515 | 1012853277V552077 | ELIGIBLE | 404 | ELIGIBLE | |
| vetsgovuser64 | 1006081858 | 1012829610V986182 | ELIGIBLE | 404 | ELIGIBLE | |
| vetsgovuser81 | 1005154223 | 1012845638V677813 | PENDING | 200 SUBMITTED | PENDING | |
| vetsgovuser119 | 1056154562 | 1012832723V827263 | ELIGIBLE | 404 | ELIGIBLE | state mutated by test submissions -- now has an application |
| vetsgovuser198 | 1010397690 | 1012833451V763238 | ELIGIBLE | 404 | ELIGIBLE | |
| vetsgovuser199 | 1126435696 | 1012833452V919063 | ELIGIBLE | 404 | ELIGIBLE | |
| vetsgovuser203 | 1008372388 | 1012643250V489886 | ELIGIBLE | 404 | ELIGIBLE | |
| vetsgovuser204 | 1023804898 | 1012845697V367266 | ELIGIBLE | 404 | ELIGIBLE | |
| vetsgovuser210 | 1100692356 | 1012592999V810903 | ELIGIBLE | 404 | ELIGIBLE | |
| vetsgovuser213 | 1005357647 | 1012847418V490298 | ELIGIBLE | 404 | ELIGIBLE | |
| vetsgovuser217 | 1005391055 | 1012845701V374522 | UNABLE_TO_DETERMINE_AUTOMATICALLY | 404 | UNABLE_TO_DETERMINE_AUTOMATICALLY | |
| vetsgovuser219 | 1005135822 | 1012845154V366661 | UNABLE_TO_DETERMINE_AUTOMATICALLY | 404 | UNABLE_TO_DETERMINE_AUTOMATICALLY | |
| vetsgovuser220 | 1005354478 | 1012662125V786396 | PENDING | 200 SUBMITTED | PENDING | |
| vetsgovuser221 | 1005133978 | 1012830861V355582 | ELIGIBLE | 404 | ELIGIBLE | |
| vetsgovuser222 | 1026554256 | 1012860802V829625 | ELIGIBLE | 404 | ELIGIBLE | |
| vetsgovuser228 | 1013590059 | 1008709396V637156 | ELIGIBLE | 404 | ELIGIBLE | same EDIPI as user229 |
| vetsgovuser229 | 1013590059 | 1008709396V637156 | ELIGIBLE | 404 | ELIGIBLE | duplicate of user228 |
| vetsgovuser236 | 1233511680 | 1012593002V974767 | ELIGIBLE | 404 | ELIGIBLE | |
| vetsgovuser237 | 1290493214 | 1012592973V765426 | ELIGIBLE | 404 | ELIGIBLE | |
| vetsgovuser243 | 1242992250 | 1012832750V262955 | UNABLE_TO_DETERMINE_AUTOMATICALLY | 404 | UNABLE_TO_DETERMINE_AUTOMATICALLY | |
| vetsgovuser247 | 1013844689 | 1012845711V863651 | ELIGIBLE | 404 | ELIGIBLE | |
| vetsgovuser250 | 1100989510 | 1012845109V755759 | PENDING | 200 SUBMITTED | PENDING | |
| vetsgovuser255 | 1244322588 | 1012844918V175267 | UNABLE_TO_DETERMINE_AUTOMATICALLY | 404 | UNABLE_TO_DETERMINE_AUTOMATICALLY | |
| vetsgovuser258 | 1023820672 | 1012851504V621829 | PENDING | 200 SUBMITTED | PENDING | |
| vetsgovuser263 | 1320002070 | 1012870264V741864 | UNABLE_TO_DETERMINE_AUTOMATICALLY | 404 | UNABLE_TO_DETERMINE_AUTOMATICALLY | |
| vetsgovuser271 | 1007451748 | 1008709435V263289 | PENDING | 200 SUBMITTED | PENDING | duplicate of user14 |
| vetsgovuser272 | 1006448425 | 1012830237V154192 | ELIGIBLE | 404 | ELIGIBLE | |
| vetsgovuser273 | 1011239249 | 1012667151V535875 | UNABLE_TO_DETERMINE_AUTOMATICALLY | 404 | UNABLE_TO_DETERMINE_AUTOMATICALLY | |
| vetsgovuser276 | 1015218343 | 1012592966V272192 | ELIGIBLE | 404 | ELIGIBLE | |
| vetsgovuserdependent1 | 1011157188 | 1012667057V811306 | ELIGIBLE | 404 | ELIGIBLE | |

## Gaps

The following `coe_status` branches have no staging representation and were covered by hand-written betamocks based on `service.rb` branching logic:

| Branch | Gap | Betamock coverage |
|---|---|---|
| AVAILABLE | No ELIGIBLE user with a 200 application found | vetsgovuser228 (hand-written) |
| DENIED | No NOT_ELIGIBLE determination found | vetsgovuser198 (hand-written) |
| PENDING_UPLOAD | No PENDING user with a RETURNED application found | vetsgovuser201 (hand-written) |

These should be cross-checked against real staging data once the LGY SQA team (Nick Fisseler) can provide test users for those states.

## PRs

[vets-api-mockdata PR](https://github.com/department-of-veterans-affairs/vets-api-mockdata/pull/677) - create mock responses which match current state of Staging env (plus added a couple hand-written ones)
[vets-api PR](https://github.com/department-of-veterans-affairs/vets-api/pull/27202) - update VCR cassettes used in tests
