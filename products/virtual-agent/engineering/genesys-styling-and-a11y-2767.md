# Styling and Accessibility Notes for Genesys Chatbot Widget

## Widget primary color matches approved brand color

- Configuration allows for a singular messenger color. We have set the color to #162e51 since that is what the legacy chatbot used for the header color.
- This color sets the "Message Us" heading color as well as the "launcher" button color that opens the chatbot.

<img width="704" height="553" alt="Image" src="https://github.com/user-attachments/assets/72b4f43a-7ddd-4c44-8f5f-40d4880aa7ff" />

## Fonts align with brand guidelines

- There are no specific settings for fonts within the Messenger Configuration
- The font that loads in the widget appears to be the system default sans-serif font. There is mention of Google's Roboto font as the default, and that is set in the CSS, but it is not automatically installed, and therefore if Roboto is not installed on a computer viewing the widget, then it will fall back to the system font. https://all.docs.genesys.com/WID/Current/Developer/GWCCustomize - the docs say that it will download the font, but that doesn't appear to be the case. Note: on android phones, Roboto is pre-installed as it is the main system font, so it should display on those devices (Adam doesn't have android devices to verify)
- There is a mention of using a custom font via CSS: `.cx-widget{ font-family: name-of-font-here; }` but setting the font via this method does not currently work due to iframe styling constraints. There is also a mention of limited styling options in the documentation that talks about needing to build our own replacement for advanced customization: "You can only use themes to customize a limited set of styles for your version of Genesys Widgets. To create an alternate layout of your own design, disable the widget you want to customize and use the provided service plugins to build your own replacement"
- The entire widget uses a singular font, so the headings will be the same font as the body text
- The font size is not configurable

## Responsive design functions correctly

Resizing and repositioning of the widget and button is not possible. There is a setting for right/left button position and a spacing setting.

- Mobile views
	- When open in mobile view you see a trash icon as well as minimize button in the chatbot window header.
	- Chatbot takes up entire window


| closed | open |
| ------ | ---- |
| <img width="342" height="738" alt="Image" src="https://github.com/user-attachments/assets/fd227d80-6901-488d-81c7-8f2b7c3c6ca6" /> | <img width="342" height="738" alt="Image" src="https://github.com/user-attachments/assets/f4dc0f6e-5a58-46e4-898e-49ae8aa826d8" /> |

- Tablet views

| closed | open |
| ------ | ---- |
| <img width="771" height="1027" alt="Image" src="https://github.com/user-attachments/assets/93b5d6ea-81c6-44b8-9e14-ef7c4a51e3c4" /> | <img width="769" height="1026" alt="Image" src="https://github.com/user-attachments/assets/174bd1dc-fb4d-4cff-8e50-ebce400386af" /> |

- Desktop

| closed | open |
| ------ | ---- |
| <img width="1903" height="928" alt="Image" src="https://github.com/user-attachments/assets/26f81ae6-29d1-49fa-aa0c-63df7f21405d" /> | <img width="1904" height="927" alt="Image" src="https://github.com/user-attachments/assets/d967300e-ad4d-4b2d-aad1-0a9638f30bee" /> |

Overall the chatbot widget is responsive to different sized devices.

## Bot messages and user messages are visually distinct

- The configuration options allow "Humanize your conversation"
	- This toggle enables the display of a Bot name (under each bot message)
	- Allows the uploading of a Bot Avatar image to be used next to all bot messages. We have uploaded a png of the VA circular avatar (exported from figma)
	- There are no options for how the user's messages are displayed, so they do not include an avatar icon.

HUMANIZE SETTINGS

<img width="1508" height="681" alt="Image" src="https://github.com/user-attachments/assets/ce5dbfa9-9c8b-429a-aa1c-1b0e7f74d363" />

## Timestamps are styled consistently

- The "Humanize your conversation" toggle will enabled 'one' of the timestamps. So with it turned off the timestamp shows on hover to the side of the message, but with it on it shows both under the message and on hover.
- Placement of the timestamp on hover is inconsistent, it will be on the right or left depending on space available

HUMANIZE ON

<img width="361" height="392" alt="Image" src="https://github.com/user-attachments/assets/4118d877-d11a-47fc-8348-4c94fb2370d2" />

HUMANIZE OFF

<img width="360" height="389" alt="Image" src="https://github.com/user-attachments/assets/98b33317-cc2b-4c84-9ae8-bdc100193244" />

The timestamps do show in a second location when a message if hovered in desktop

<img width="413" height="711" alt="Image" src="https://github.com/user-attachments/assets/19da3c45-67cb-4cb6-9a8d-3ddfe3a99189" />

## Buttons display correctly

- In message buttons display as outlined buttons with a white background, black rounded border (pill style) hover style is gray background
- Doesn't align with design system buttons, but no way to customize within widget settings
- Buttons are not actual buttons, but are divs with role="button" and aria-labels used example: aria-label="View Full Article. - Click to reply with this message"
- Send message button is an actual button element. It is just an icon, but does include a send message aria label. When no text has been input, the button is disabled (against VA a11y guidance). Guidance generally states that buttons should be clickable and an error message shown if clicked with no input text entered.
- Send message button when enabled has a hover tooltip (non standard) and a light gray hover background color
- Trash button has hover tooltip, is button element and has aria label "Clear and leave your conversation"
- Open messenger button is a button, with aria label "Open Messenger". On hover the background color darkens slightly, not configurable.
- Minimize messenger button is a button with aria label "Minimize the Messenger". On hover the background color darkens slightly, not configurable.
- On mobile devices, there is a minimize button in the header, it is a button with aria label "Minimize the Messenger" This is the only minimize button, since the chatbot window takes up the entire viewport.

BUTTONS (left is being hovered on)
<img width="231" height="59" alt="Image" src="https://github.com/user-attachments/assets/524367ec-9e6b-473e-b077-a66cadd0aef5" />

DOM
<img width="798" height="138" alt="Image" src="https://github.com/user-attachments/assets/c0390360-b23e-4b67-993b-e8d6bac701e2" />

## Color contrast meets WCAG AA standards

- No color contrast issues in current configuration

## Accessibility
### Guidelines Consulted

- [VA Best Practices](https://github.com/department-of-veterans-affairs/va.gov-team/issues/126883#issuecomment-3642750258)
- [Chatbot Accessibility Playbook](https://mitre.github.io/chatbot-accessibility-playbook/)
- [Chatbots and Web Accessibility: Addressing Usability Issues and Embracing Inclusive Design](https://www.makethingsaccessible.com/guides/chatbots-and-web-accessibility-addressing-usability-issues-and-embracing-inclusive-design/) 
- [VA Design System](https://design.va.gov/components/)
### Loading the page and Chatbot Icon
#### User Experience
When loading the page for the first time, the chatbot opens in the minimized state. When reloading the page, the chatbot opens in whatever state it was in before reloading.

There is a bug that occurs sporadically when the chat is minimized. An overlay shows up on the chatbot button, and the bottom half of the button becomes unclickable. Clicking the overlay just makes it keep showing up over and over.

<img width="160" height="109" alt="Image" src="https://github.com/user-attachments/assets/7fc912b1-e3a3-439b-b643-2f266d46576f" />

When a screen reader on, the tooltip's text is also partially obstructed.
<img width="115" height="96" alt="Image" src="https://github.com/user-attachments/assets/1424916e-82c5-4392-9a35-fe9ef8df8ff2" />

#### Considerations
The VA does not specify what this behavior should be. The VA design system's accordions open in a closed state because they have no persistent state. There is no information on if this is requirement on not for chatbots.

### Navigating to the Chatbot
#### User Experience
There  is a "Skip to Chatbot" link that was used for the previous chatbot embedded on the page. Because the Genesys widget is a JS script, it is unclear whether we can use a link to navigate to it. This will require some investigation.

Without the "Skip to Chatbot" link, users have to tab through the entire page to get to the Chatbot. The Chatbot is the last tab index item.

#### Considerations
The chatbot is correctly following guidelines with regard to tab index but accessibility guidelines state that there should be a quick way to get to the Chatbot on the page. If the "Skip to Chatbot" button navigation does not work, this will be a violation.

### Placement and Size
#### Configuration
The Chatbot is placed on the bottom right corner by default. The configuration options regarding placement allow us to change from bottom right corner to bottom left as well as choosing amount of space to the right and below the chatbot so we can choose where it is on the page.

There are no configuration options that allow us to change the size of the chatbot.

#### User Experience
It is recommended that the chatbot is able to be repositioned or resized by users. That's currently not possible either on desktop or mobile.

The chatbot is the last indexed item on the page.

#### Considerations
The VA does not specify whether a user should be able to resize or reposition however the Chatbots and Web Accessibility standards recommend that be an option.

### Input Text Box
#### Configuration
There is currently no way to configure a character limit or limit how much the user can type into the box. The input box is limited to 4096 characters but there is no indication of that. When you hit the limit, you can no longer type but there is no indicator to let you know that no more text is allowed.

#### User Experience
The input box is focusable and screen readers are able to read the text as the user types into it similar to other VA input fields. The user is able to send a message by pressing Enter.

### Send Button
#### User Experience
The button is disabled when there is no text in the input box. 

#### Consideration
Though this is not specified directly in the VA accessibility criteria, this violates the VA design system.

### Message List
#### Configuration
There is a bot name setting in Humanize your conversation. This will show a name below the chatbot messages in addition to the avatar logo.

#### User Experience
The message list can be navigated by pressing the Tab key. There is no arrow key navigation. There is no way to jump to the newest message.

Screen readers read the message as it's focused prefixed by "VA Chatbot said ..." or "You said ...". depending on sender. If a new message comes in while the screen reader is reading anything else, it will interrupt.

If the Humanize your conversation setting is not set, then the screen reader will instead read "business name says..." whenever a new message comes in, or when navigating through the message list, because it looks like that is what Genesys uses as a fallback.

https://github.com/user-attachments/assets/3e36c096-ab03-4d32-836f-d51022ff7415

#### Consideration
This does not meet the VA accessibility guidelines. The guidelines state that the message list should be navigated using arrow keys. Tabbing to the message list should not go through the message list. No arrow key makes it so that navigating between the input box and the header requires you to tab through the entire message list. Arrow key navigation makes it so you can tab from the input box to the header quickly.

Conversation list does not have role="log" or role="dialog". Messages do not have sr-only spans to identify the sender or aria-live="polite". New messages will interrupt any currently speaking screen reader messages.

### Clear Message Modal
#### User Experience
Clicking the trash icon opens a modal with a message and two buttons, "Yes, I'm sure" and "Cancel". When the modal opens, the "Yes, I'm sure" button is focused before quickly switching focus to the modal itself causing the screen reader to begin reading "Yes, I'm sure" before being interrupted to reread "Yes, I'm sure" again when focus is changed. The message on the modal is never read by screen readers. This behavior seems to be different depending on browser. Firefox never reads the message. Chrome reads the message when the modal is focused for the first time but then is never read again even when focusing on the modal.

Once the modal opens, Tab navigation goes modal -> "Yes, I'm sure" -> "Cancel" -> modal. This is a focus trap. Screen reader readout is inconsistent when navigating through the options. Sometimes it reads only the text of the button while other times, it reads the text of the button then the type e.g "button, group".

In addition, when the modal is focused, screen readers read whatever the last button pressed was. If you go "Yes, I'm sure" -> modal, you hear "Yes, I'm sure" -> "Yes, I'm sure".  If you go "Cancel" -> modal, you hear "Cancel" -> "Cancel".

Choosing "Cancel" closes the modal and moves focus to the trash icon before quickly switching focus to the input box. Choose "Yes, I'm sure" minimizes the chat window and moves focus to the "Open Messenger" button.

When the modal is focused, pressing the Enter key does not activate the action mentioned by the screen reader. The user must press ctrl + option + space. When the buttons are focused, pressing the Enter key does activate the button.

https://github.com/user-attachments/assets/5e8d1a68-c28a-4b13-8ebf-d3a19b0a81d6

#### Consideration
This violates multiple accessibility guidelines:
- Focus trap (not being able to navigate out of the modal)
- Not reading a message that's available on the screen (the modal message is never read -- visually impaired people will not know what they are answering)
- Behavior that is inconsistent (modal reading and activating "Yes, I'm sure" or "Cancel" based on navigation order)
- Focus shifting without user input (opening the modal quickly moves focus from "Yes, I'm sure" to the modal; clicking no moves focus to the input box)
- Triggering actions the user didn't ask for (clearing the chat minimizes the chat window)
These violations are disorienting and are accessibility guidelines not just within the VA but in general.

### Error Modal
#### User Experience
This modal behaves pops up when an error occurs. It has an error message and an "Ok" button. Once the modal pops up, it reads the message. If you press tab, focus moves to the "Ok" button and the error message is read again. These are the only times when the message is read. Pressing tab again moves back to the modal but does not read the message. Instead of reads the button text "Ok". Tabbing repeatedly moves you between focusing the modal and the "Ok" button. This is a focus trap similar to the Clear Message Modal's.

When the modal is focused, pressing the Enter key does not activate the "Ok" button even if the text said "Ok". The user must press ctrl + option + space. When the button is focused, pressing the Enter key does activate the button.

Once the error is cleared, focus goes to the Chatbot window. The input box and Send button are disabled and not focusable by keyboard navigation. If the error was due to loss of internet, once internet comes back, the Chatbot shows a temporary dialog at the top that says "Connection was successfully restored." Screen readers read this message out. The message disappears after a few seconds and focus is returned to the chatbot window. Pressing tab takes you to the trash icon and you have to tab through the message list to return to the input box.

https://github.com/user-attachments/assets/bc077a90-27eb-4550-994f-1f08c0de28ab

#### Considerations
This violates multiple accessibility guidelines similar to the Clear Message Modal:
- Focus trap (not being able to navigate out of the modal)
- Not reading a message that's available on the screen (the error message is read twice but after that is not ever able to be read)
- Behavior that is inconsistent (focusing modal doesn't read the message and instead behaves like the "Ok" button)
- Non-focusable elements (input box and Send button)
Similar to the Clear message modal, these violations are disorienting and are accessibility guidelines not just within the VA but in general.

## Axe Tools Audit

Issues flagged:
- **Ensure list elements are used semantically** - When buttons are displayed, they are shown in a unordered list element, but the list has the role group instead of role list. To solve this problem, you need to fix the following: List item parent element has a role that is not role="list"
- **Ensure landmarks are unique** - The Genesys widget includes a header, which is a problem because there is already a header element in the va page markup. To solve this problem, you need to fix the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable
- **Ensure landmarks are unique** - The Genesys widget includes a div with a role="main", which is a problem because there is a main element already in the va page so that role is already taken. To solve this problem, you need to fix the following:
The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable

## Evaluate typing indicator

- There is a toggle for enabling the typing indicators in the Humanize you conversation settings, which we currently have turned on
- The screen reader will always announce when typing stops, but will only sometimes announce typing started. We think this is because it is still reading the message you just sent and then immediately starts reading the newest bot message.

TYPING INDICATOR ACTIVE

<img width="501" height="759" alt="Image" src="https://github.com/user-attachments/assets/ba6d1352-23de-4907-9a86-8fc9b7db76c3" />

TYPING INDICATOR TOGGLE

<img width="350" height="148" alt="Image" src="https://github.com/user-attachments/assets/411c1da4-42f1-4003-a127-ce6feb94a2fe" />

## Other notes and issues

- There does not appear to be a way to customize the heading of the chatbot header that says "Message Us"
- The trash icon for clearing the conversation is a toggle, so we can turn that off if we want.
- There is an idle message that will display if the user has not interacted with the bot for some amount of time. The current setting is 1 minute and is set within the bot flow -> settings -> user input. There are also settings for Max number of no input retries, No input apology message, and handling of no input maximum retries exceeded handling. We should discuss how we want to handle this. For instance we could set this to just show once, and make the timeout much larger so its not so annoying.
