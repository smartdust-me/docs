---
id: ios-appium-tests
title: iOS Appium tests 
---
Components needed:

 
- WDA running on the tested device (thankfully we already have that in the Lab)

- Port forwarding from the iOS device to the test running client (Linux machine)

This can be done using iproxy or go-ios tools: `https://github.com/danielpaulus/go-ios`

 
- Appium installed on test machine 

- Appium project set up with appropriate Capabilities, for example:

```javascript
const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
	deviceName: "blabla",
	automationName: "XCUITest",
	platformName: "iOS",
	// browserName: "Safari",
	udid: "auto",
        usePrebuiltWDA: true,
	startIWDP: true,
        webDriverAgentUrl: "http://localhost:7777"
  }
};
```
 

Supposedly, some of the Capabilities need to be set but their value doesn’t matter (lol).

Pay attention to the “usePrebuiltWDA” field. If it isn’t set, Appium will probably try to interact with XCode to get WDA installed on the tested device, which is unnecessary, not to mention futile if you’re on Linux.

 
- For the tests themselves, you can probably use a number of WebDriver implementations but you should keep in mind the limitations of WDA (not everything is implemented or behaves the same way as on Android).

 

- The tested app already installed on the tested devices. If you have a built and signed app file on a Mac computer, you might be able to copy it on a Linux machine and install it using ideviceinstaller.

 

Further reading:


`https://daniel-paulus.medium.com/automate-ios-devices-the-almost-mac-free-way-973e8760f9df` 

`https://docs.eggplantsoftware.com/mobilegateway/`
 

 
