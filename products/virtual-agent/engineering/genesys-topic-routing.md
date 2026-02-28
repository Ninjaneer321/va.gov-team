# Topic-Based Routing in Genesys Cloud Bot Architect Flow Findings

Based on investigation, it seems that this is not implementable with the current platform.

Genesys does not have a dynamic routing capability right now. The closest we get is a supporting bot flow that allows asking for an Intent from a user, but you are limited with what you can do even so. In the screenshot below, you can see a flow that implements the "Ask for Intent" flow. 

There are three types of flows that concern us:
- Digital Bot Flow
- Bot Flow
- Inbound Message

Inbound Message is the "parent flow" and Digital Bot Flows and Bot Flows are supporting flows. In parent flows, you can set flow logic and call supporting bot flows. In the supporting flows, you can set more granular flows like asking for intent, doing knowledge article lookups, etc. Digital bot flows and bot flows have slightly different options, but still mostly do the same thing.

As far as we could tell, it is not possible, in supporting bot flows, to send the "Intent" to a knowledge base to do a RAG-like article lookup. Given that there is a higher-order parent flow ("Inbound Message" in the main architect menu), we attempted to figure out a way to call this intent bot flow, set the outcome and pass that result to another flow that could then do a knowledge lookup. Unfortunately, nothing like this is possible and even if it were, the logic flow is much more stilted than our other implentations in microsoft bot framework and langgraph.

<img width="752" height="530" alt="Image" src="https://github.com/user-attachments/assets/83ae121f-d3be-4317-92fa-3f336e3d82a0" />

Furthermore, if we are to generate a direct parity of our former bot we would need to rely heavily on some form of LLM Routing ability. Just simply manually entering intents and utterances/slots is a huge lift and not exactly realistic for the nature of our chatbot design. There isn't a clear way to route a user to the necessary flows based on their specific intent in a dynamic way, at least in our current installment of the Genesys Platform.

<img width="1114" height="953" alt="Image" src="https://github.com/user-attachments/assets/2b04af49-43ca-4302-9de6-9095c3aeb875" />
