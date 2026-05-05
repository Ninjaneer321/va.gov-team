# Testing Appointment Scheduling in Webviews

## Background

The current web scheduling process is linked into the VAHB web app via a Webview component (the "react-native-webview" is pinned at the major version 13 in the package.json). Unfortunately, it doesn't give a lot of control to how we load things. Some work has been done to add a script which hides the header/footer and other things can be injected there, or we can do them on our traditional web code. 

To check if the current web page is being loaded in a react-native-webview, there is a window property attached: `window.ReactNativeWebView`

## Making sure the page is accessible if using mocks
For testing purposes, you may have to insert a script into the page you are testing like this:

```javascript
const isReactNativeWebView = !!window.ReactNativeWebView;
if (isReactNativeWebView){
  localStorage.setItem('hasSession', true);
}
```

Loading the page with the "Start scheduling" blue button link in VAHB will take you to the URL you have in your `VAMobile/envs/.env` file (hopefully your local page) and will reload several times while updating the localStorage. Webviews seem to carry over their content and storage to all other pages they open so you'll probably never see the reload again once it happens, even if you restart the app.

## To get something not to display

for exmaple the `Add to calendar` button that we want to remove on VAHB can be found here: `src/applications/vaos/components/AddToCalendarButton.jsx`

If you add
```javascript
  if (!!window.ReactNativeWebView) {
    return null
  }
```

you will effectively make the component not render in ReactNativeWebviews. You could also, say change the classNames and add a hidden CSS attribute for it when on ReactNativeWebview

## To test (automated) use vets-website

Adding e2e tests are a bit complex because opening webviews (or file viewers) in Detox testing is very temperamental. Sometimes they will open and not be able to be closed. Sometimes they won't open if another one has been opened in the same thread. So, it may be best to mock the `window.ReactNativeWebview` value inside vets-website tests rather than on VAHB.

## VAHB prefers unit tests if tests must go in there

They are trying to move as many tests as possible from e2e (Detox) to unit tests. e2e takes a very long time on mobile (because it simulates click, loads, swipes, transitions, etc.)

