# Genesys Chatbot Design Audit
As an excercise to see where the Genesys chatbot falls inline with the VA Design system, an audit was done to find the gaps and note the limits of the customization of the Genesys chatbot.

![]( https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/GenesysChatbotDesignAudit2.png "GenesysChatbot")


1. CORNER RADIUS: There is no ability for the user to customize the corner radius sizes of the outer container window or the inner dialgue chat window.  The VA.gov Design System (VADS) uses specific [shape tokens](https://design.va.gov/foundation/design-tokens#:~:text=vads%2Dshape%2Dborder%2Dradius,for%20controls%20such%20as%20checkboxes) and spacing units to define border radius standards across its interface. These standards ensure consistency and approachability for digital services on the VA.gov platform. There are currently 3 semantic token sizes for border radii (small - 2 pixels, medium - .5 em space and large - 1 em space).
2. TEXT: The text size and styles are not able to be edited by the user in Genesys. The VA Design System has a [very specific set](https://design.va.gov/foundation/typography) of fonts, sizes, weights, styles, line spacing (leading and kerning) for the different uses of "headlines", "body text", "captions" and other stylings that are used in the heiracrchy of typography on any given page.
3. ICONS: There is not the ability to use custom icons in Genesys.  The VA Design System uses the [icons](https://designsystem.digital.gov/components/icon/) of the U.S. Web Design System (USDS) which differ from the icons used by the Genesys chatbot.
4. SPACING:  The VA Design System uses a [base-8](https://design.va.gov/foundation/spacing-units) for spacing meaning that they use spacing in 8 pixel incriments (i.e. 8, 16, 24, 32, etc.) and it appears that Genesys is using a base 4 or possibly base 10 and that is not able to be updated or customized.
5. COLOR SCHEME: The color of the chat box (as well as the rule lines) are not able to be editied on the Genesys chatbot.  It is worth noting that the only place where color can be edited is at the top header banner where "Messages" and the trash icon are located.  The VA Design System uses a specific [set of colors](https://design.va.gov/foundation/color-palette) when using for different areas of the VA.gov site.  It seems like a minor thing, however, but my only concern with large amounts of text being on this grey color would be if it passes contrast standards for accessibility.
6. CUSTOM MESSAGES: The Genesys chatbot does not allow for special messages or extra text to appear in this area below the message box.  In the previous (Microsoft) version of the VA chatbot, the "This message is AI generated..." warning that would be displayed here.
7. FEEDBACK OPTIONS: We are unable to use custom feedback indicators (such as a star scale or thumbs up/thumbs down) in this area as it is not a feature of the Genesys chatbot.  We can only ask the qustion "Did this answer your question?" in the chat window for feedback from users.
8. CHARACTER COUNT: Although technically only an option and not a hard set rule, in the VA Design system, there is an option for a [character limit](https://design.va.gov/components/form/text-input) to be displayed in the text box area.  This is not an option for the Genesys version.
9. BORDERS: The thickness and style of borders and rule lines are not customizable in the Genesys chatbot.  There are [standards](https://design.va.gov/foundation/utilities/border) that the VA Design System uses for the color and thickness of borders.
10. DROP SHADOW: The VA Design System uses [elivation tokens](https://design.va.gov/foundation/design-tokens) to govern the shadow on elements.  The Genesys chatbot does not allow for customization of the drop shadow.

## Genesys Customization Panel

The image below shows the limitation of the customization of the Genesys Chatbot.  As mentioned above, the user is able to enter a hexidecimal number to customize the color of the top "header" where "Messages" and the trash icon are displayed.  One is able to also select the location of the minimized chat widget on the page (left/right) and customize the spacing for the distance from the side and bottom. The user is also able to upload an icon / logo, which is where we have the blue circle with the white VA letters. As far as the last toggle under "User Interface", I'm not sure what the reference is to "Messenger's Headless SDK functions."  That would be a question for the deveolopers. 

![]( https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/GenesysCustomization.png "GenesysCustomization")

## Conclusion

While not ideal, the current stage of the Genesys chatbot would not cause a major issues as far as passing the Collaboration Cycles integration.  The VA is more leniant on standards when using 3rd party installations such as this and they realize that "off-the-shelf" products such as this Genesys chatbot usually are not able to be customized to the great length of detail that the VA uses for its own design system.  The only risk I see is the fact that the main screen size not being able to be customized would limit the length of the text in the disclaimer avoid the situation where the user is not able to read the top of the disclaimer.  If we don't limit the text, this would leave it up to the user to scroll up to see the entire message.  And since we are not able to put the user at the top of the chat to insure they see the entire message, we run the risk of this disclaimer not being read by Veterans.  Also, the placement of the "This message is AI generated..." would have to appear in the actual text box and not in small italics outside of the text box as in the previous chatbot design.  This is not to mention any accessability issues that may be present as we have not had the accessibility audit of the Genesys chatbot completed yet.  There is, however, an [open ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/134107) with the accessibility team for this effort.

***

Lucas Wright

UX/UI designer & researcher
