# Investigate Microsoft Agents SDK Connection Options

## Direct Line

### Requirements:

* vets-api token endpoint
* need updated for new backend
* web-socket communication (some fallbacks exist for REST but require constant polling)
* Paid service is free for 10,000 messages and $.50 per 1,000 messages after free tier


### Pros:

* Everything integrated with direct line by default. MS 365 agents sdk exposes a set of endpoints made for the Activity protocol which is what Direct Line also uses.
* Frontend expects a Direct Line client adapter within their react components.
* Connection lifecycle is handled by Direct line (connect, disconnect, reconnect, error handling)
* Old (original legacy webchat) UI could be used for initial prototyping of a new backend using MS 365 Agents SDK. We can still connect to directline, but would need a new Settings.virtual_agent.webchat_root_bot_secret in vets-api to connect to a new backend/issue tokens for the new connection.


### Cons:

* Vendor lock in to Direct Line and MS. MS has stated they will not be removing Direct Line at this point.
* Direct Line does support streaming for code-first agents built with the M365 Agents SDK, but not for Copilot Studio agents.
* Relies on a unique Activity Protocol that isn't a standardized data shape like OpenAPI or Swagger based documentation. Last update for the protocol was March 11th This could lead to confusion for new engineers or when extending the protocol without breaking existing functionality.
* Will need to deal with session expiration after 60 minutes, similarly to what we had to build with the legacy chatbot
* RxJS observables have been known to be hard to debug. The webchat framework uses them for event handling when web socket events are sent down the wire. 



### Conclusion:

In the effort of saving time to meet our prod release in the June timeframe, it would be in our best the fastest and lowest risk to stick with Directline as opposed to wiring an alternative connection layer using something like Socket.IO. The original version of the frontend which currently exist inside webchat/ already has hundreds of lines of QA hardend and thorougly tested code that include many features like session persistence, token lifecyle management, Directline connection handling, as well as expiry recovery that already exist out the gate.
