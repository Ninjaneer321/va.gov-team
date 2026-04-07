# Exploring CAPTCHA accessibility and UX for VA Identity team use
- Office of the CTO \- Digital Experience (OCTO-DE), Sign in, Identity
- Date: 04/2026
- Contacts: Clayton Zook
- Disclosure: Researched and written with the assistance of AI

## Summary

This report examines the UX and accessibility friction that CAPTCHAs create for legitimate human users and how useful it is at blocking modern AI bots.

CAPTCHA was developed as a security measure designed to protect websites from bots. They do this by posing challenges that are supposed to be easy for humans but difficult for computers. Those challenges have evolved over time to include identifying distorted text, image identification, or solving a logic puzzle. They have a long history of being annoying to all humans and of posing acute accessibility hurdles to certain groups. More recent versions are getting away from puzzles and moving towards checks that happen in the background.

As artificial intelligence advances, there is continually more evidence that puzzle versions especially don’t function well for keeping bots out. This means that it doesn't perform its stated task well, and so in reality primarily serves to block or frustrate humans, which should give us pause before adding it into use on VA.gov.

Modern style backend check types hold promise, but some of those bias against assistive technology, which force those users into a secondary, puzzle-type screening, defeating the purported purpose of being hidden or in the background for the most vulnerable users. These modern versions also have high bot success rates, so the cost-benefit balance of those should be carefully considered.

## Table: Common types of CAPTCHAs 

| CAPTCHA type | Features | Goal | Concerns |
| :---- | :---- | :---- | :---- |
| Text-based | Distorted visual of letters/numbers | Type the letters or numbers shown | Vision, cognitive disability |
| Audio-based | Audio of letters/numbers | Type the letters or numbers heard in an audio clip | Hearing, cognitive disability |
| Image-based | Images on a grid, sometimes a single image split up | Click all grid areas that match the prompt | Vision, cognitive disability, dexterity, motor impairments, non-native English speaker |
| Logic-based | Simple question to answer | Answer a question or solve a math problem | Cognitive disability, non-native English speaker |
| Puzzle-based | Simple task to perform | Perform a puzzle task, like sliding a slider | Vision, cognitive disability, dexterity, motor impairments, non-native English speaker |
| GeeTest CAPTCHA | Puzzle plus analyzes  behavior and history  | Mouse movement, browser history, and cookies are analyzed in the background | Vision, cognitive disability, dexterity, motor impairments |
| reCAPTCHA v2 | Checkbox click | Mouse movement analyzed as you click the box | Assistive tech users frequently flagged for secondary challenge which is either image or audio based |
| reCAPTCHv3 | Analyzes user behavior and history | Mouse movement, browser history, and cookies are analyzed in the background | Use of assistive tech often leads to a secondary challenge |
| Cloudflare Turnstile | Analyzes user behavior and history | Mouse movement, browser history, and cookies are analyzed in the background | Fully WCAG 2.2 AAA compliant |

## Major themes

## The human cost: UX friction and inaccessibility

For many users, CAPTCHAs are not just a minor inconvenience but also a significant barrier to accessing digital services.

* **User Frustration and Abandonment:** Large-scale studies show that complex puzzles lead to abandoned transactions and reduced trust in platforms. <sup>1, 3, 4, 12</sup>
* **Accessibility Gap:** CAPTCHAs are cited by screen reader users as the single most problematic accessibility barrier on the web.<sup>2, 9</sup>  
* **Discriminatory Design:** Research indicates that systems like reCAPTCHA v2 significantly discriminate against visually impaired users, frequently misclassifying them as bots.<sup>1,2</sup>  
* **Audio Failure:** Audio CAPTCHAs, often the only alternative for the blind, are notoriously difficult. Studies show a 50% "give-up" rate and only a 31% agreement rate among humans on the correct answers.<sup>7</sup>  
* **Cognitive Load:** Traditional puzzles often force disabled users to seek third-party assistance, compromising their personal privacy and independence.<sup>6</sup>  
* **Burden on non-native English speakers:** This group was significantly slower and less accurate on schemes that used English words.<sup>3</sup>

### The human cost: by the numbers

Some types of CAPTCHAs block more humans than others. Text based CAPTCHAs were the first used. They've been iterated on several times, but they simply aren't good at deciding who is human. In general they block about 20% of human traffic; that climbs to 40% when case-sensitivity is used.<sup>3, 15</sup>  

Audio CAPTCHAs are absolutely the most blocking to humans. They block almost half of human traffic that interacts with them. Unfortunately, this is also a fallback method given to blind users for every type of visual oriented CAPTCHA. It’s also the fallback for blind users who are flagged in some modern “invisible” types. It creates a substantial blocker.

Image and puzzle based CAPTCHA don't have higher human success in general than text based, and actually blocks more human traffic than bot traffic, rendering these types mostly ineffective for the harm caused to users, contradicting their core design goal <sup>3, 7, 16</sup>  

Looking at the more modern types, reCAPTCHA v3 is finally a product that allows over 90% of humans successfully through. In many cases assistive technology or private browsing will cause a flag and revert users through a secondary screening using ReCAPTCHA v2. So while reCAPTCHA v3 (and reCAPTCHA enterprise) claims to be partially WCAG compliant, it ends up more often flagging those who use assistive tech and send them on a non-compliant route, making the "mostly WCAG compliant" claim mostly a marketing gimick.
Cloudflare Turnstile is 3 years old, and was the first CAPTCHA product to be fully WCAG 2.2 AAA compliant. It allows 99% of humans through and doesn't seem to cause significant hurdles for accessibility. It's "invisible" so should cause no to minimal frustrtaion with the average user. This should be the only style considered as doing a decent job at allowing humans though.<sup>2, 9, 14</sup>. This report didn't consider other products that claim to be WCAG compliant, like Friendly Captcha which meets the WCAG 2.2 Level AA criteria.

## The AI advantage: surpassing human performance

While humans struggle to be marked as a human by CAPTCHA, modern AI models have become highly efficient at solving them. Especially AI models aimed at breaking through, but even general AI models are often more successful at getting through than humans.

* **Superior Speed:** Purpose-built AI models can solve challenges up to six times faster than the average human.<sup>13</sup>  
* **Ineffective Distortions:** Mechanisms like blurring or added noise, intended to confuse bots, have proven ineffective against advanced object detection systems like YOLO, which can crack advanced image puzzles in under 20 seconds.<sup>5</sup>  
* **Text-Based Obsolescence:** Classic distorted-text CAPTCHAs are now considered essentially broken, with run of the mill AI achieving nearly a 100% success rate.<sup>10,16</sup>  
* **Perfect Solve Rates:** Recent research from ETH Zurich (2024) demonstrated that specialized AI models can solve reCAPTCHA v2 image challenges with 100% accuracy.<sup>11</sup>

### The AI advantage: by the numbers

While CAPTCHAs keep a significant number of humans out, they also allow a significant amount of bot traffic in. To some degree success can vary depending if it’s a general purpose bot or a speciality trained AI trying to gain entry. Even so, most types of CAPTCHA block more humans than bots. Text, audio, image, puzzle, GeeTest all fall in this category, with 85% or great bot success.<sup>13</sup>  
Getting into the more modern methods, reCAPTCHA v3, which begins to do a decent job of allowing most humans through, only blocks about 40% of bots. Cloudflare Turnstile does better for humans, but the tradeoff is that it does worse with bots, blocking only about 30% of bots traffic.<sup>14</sup>

## Table: CAPTCHA success rates: AI vs humans
| CAPTCHA type | AI (bot) success | Overall human success | Notes |
| :---- | :---- | :---- | :---- |
| Text-based | \~100% | 80%; 60% if case sensitive | Doesn't block bots, blocks substation number of humans |
| Audio-based | \>85% | 50% | Highly blocking to humans without blocking many bots |
| Image-based | \>85% | 70-80% | Blocks more human traffic than bot traffic |
| Logic-based | \>70% | \>90% | Doesn't block a substantial amount of bot traffic, but still blocks many humans |
| Puzzle-based | \>90% | \>70% | Doesn't block a substantial amount of bot traffic,, but takes humans the most time of all types |
| GeeTest CAPTCHA | \>90% | \>90% | Doesn't block a substantial amount of bot traffic, but still blocks many humans. |
| reCAPTCHA | \>65% | 70-80% | Blocks a substantial amount of human traffic but under half of bots |
| reCAPTCHv3 | \>60% | \>95% | Blocks a substantial amount of humans using AT but under half of bots |
| Cloudflare Turnstile | \~70% | \~99%; secondary challenge is checkbox | WCAG 2.2 AAA compliant. It stops about 80% of junk/spam type traffic, but less effective against sophisticated bots |

## Conclusion: CAPTCHA is not great at allowing humans through or at defending against most bots

The evidence suggests that most CAPTCHAs are "security theater" \- providing the appearance of security while offering little actual protection. About the best they can be counted on is to stop run of the mill junk traffic. They don't hold up against sophisticated attackers, most modern AI resources, or services offering CAPTCHA cracking ability at cheap prices<sup>1</sup>

The fundamental flaw of most types of CAPTCHA is its **inverse relationship between security and usability**. To make a test hard enough to stop a substantial amount of even run of the mill junk traffic, much less modern AI tools, it seems to require being so difficult that it becomes impossible for many humans to solve. Incurring "immense cost for little security" alienates users, especially those with accessibility needs or who otherwise use assistive technology, all without meaningfully slowing down bot traffic. The industry has been shifting toward "invisible" behavioral analysis such as reCAPTCHA v3 and Cloudflare Turnstile. But even reCAPTCHA v3 substantially blocks traffic for those with accessibility needs since it more often flags them for a secondary screening, which is always a less accessible CAPTCHA type.

Cloudflare Turnstile, stands out as a WCAG 2.2 AAA compliant solution and allows the most human success. As a tradeoff of that human ease, it does allow a lot of bot traffic through. This solution, or one that's substantially similar and also has a minimum of WCAG 2.2 AA compliance, are the only CAPTCHA solutions we should be considering for use on VA.gov.


## Sources
1. Searles, A., Xu, H., et al. (2023-2025). Dazed & Confused: A Large-Scale Real-World User Study of reCAPTCHAv2.
2. Accessibility Study on Google ReCAPTCHA Systems. (2022). ACM.
3. Bursztein, E., Martin, M., & Mitchell, J. How Good are Humans at Solving CAPTCHAs? A Large Scale Evaluation. Stanford University. https://web.stanford.edu/\~jurafsky/burszstein\_2010\_captcha.pdf
4. Searles, C., Zhang, Y., & Liu, D. (2023). SoK: Peer-to-Peer Social Networks, a Review of the State-of-the-Art. In 32nd USENIX Security Symposium (USENIX Security 23\) (pp. 5567-5584). USENIX Association. https://www.usenix.org/system/files/usenixsecurity23-searles.pdf
5. Weng, S., et al. (2020). An Object Detection based Solver for Google's Image reCAPTCHA v2.
6. IRemember: Memorable CAPTCHA for Sighted and Visually Impaired Users. (2022).
7. Bigham, J. P., & Cavender, A. C. (2009). The SoundsRight CAPTCHA: An Improved Approach to Audio Human Interaction Proofs for Blind Users. ACM CHI. https://dl.acm.org/doi/epdf/10.1145/2207676.2208385
8. Oedipus: LLM-Enhanced Reasoning CAPTCHA Solver. (May 2024).
9. WebAIM. (2023-2024). Screen Reader User Survey.
10. Deep Learning CAPTCHA Recognition with Grouping Strategy. (2023). PubMed Central (PMC).
11. Handa, A., et al. (2024). Breaking reCAPTCHAv2. ETH Zurich. arXiv:2409.08831.
12. User Perception of CAPTCHAs: A Comparative Study between University and Internet Users. (2024). arXiv:2405.18547.
13. Roundtable Research. (October 2025). Benchmarking Leading AI Agents Against CAPTCHAs.
14. Roundtable Research. (August 2025). Benchmarking Bot Detection Systems Against Modern AI Agents.
15. Yan, J., & El Ahmad, A. S. (2008). A Low-cost Attack on a Microsoft CAPTCHA. ACM CCS. https://dl.acm.org/doi/epdf/10.1145/1455770.1455839
16. Bursztein, E., Martin, M., & Mitchell, J. How Good are Humans at Solving CAPTCHAs? Stanford University. https://web.stanford.edu/\~jurafsky/burszstein\_2010\_captcha.pdf
