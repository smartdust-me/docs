---
id: appium-service
title: Appium service (limited availability)
---
This article describes an Appium service that exposes an Appium server hosted on a SmartDust Lab instance.
This allows for running Appium test on remote SmartDust devices with minimal setup and configuration.
You don't need to install or maintain your own Appium server.
Therefore you also don't need to establish remote connections to the devices (no need for `ADB` or `usbfluxctl`).
You just need to apply a certain configuration in your test code and you're ready to go.

:::info
For now, this feature is only available on chosen Smartdust Lab private instances.
If you'd like to use it, please contact us for the details.
:::

## Connection configuration

To use the Appium service, you need to set up the Appium server connection details in your test setup code.
The details vary depending on the programming language and Appium client you are using.
The examples in this guide are for the WebdriverIO client library for JavaScript/TypeScript, but it should be easy to translate them to other technologies.

The connection details can be passed in an 'options' object when initializing an Appium client instance in WebDriverIO.
You need to pass the SmartDust Appium server address, set the protocol to HTTPS and the port to 443.
The default prepended path needs to be set, as well as authorization headers. 
Contact Smartdust support to obtain the connection details for your instance.

```javascript
const wdio = require("webdriverio");

const options = {
  path: '/appium',
  hostname: '[yourinstance].smartdust.me',
  protocol: 'https',
  port: 443,
  headers: {
    Authorization: `Basic ${Buffer.from('appiumuser:password').toString('base64')}`
  }
};

capabilities = {} // define your Appium capabilities here (see below)
options.capabilities = capabilities;
const client = await remote(options);
```

## User authorization

To use the Appium service, you need to have an active SmartDust Lab account on your instance so that the devices are locked under your name during test runs.
You have to generate an API token.
To do so please log in to your Smartdust Lab instance and click the **Settings** button on the top bar menu.
Go to the **Keys** tab and in the **Access Tokens** section, click the **+** button to generate a new token.
Save it somewhere safe, as you will not be able to see it again.
If you lose it, you'll need to generate a new one.
The generated token needs to be passed in the Appium session capabilities, named `smart:token`.

## Android native tests

Use the following capabilities to run native tests on Android devices:
```javascript
const capabilities = {
    'smart:token': 'your_api_token_here',
    'appium:automationName': 'UiAutomator2',
    'platformName': 'Android',
    'wdio:enforceWebDriverClassic': true 
}
```
That's it!
You can be more specific if you wish, for example, by specifying the device UDID or OS version.
You can use any standard Appium capabilities.

## Android browser tests

Use the capabilities below to run web browser tests on Android devices:

```javascript
const capabilities = {
    'smart:token': 'your_api_token_here',
    'appium:automationName': 'UiAutomator2',
    'platformName': 'Android',
    'browserName': 'chrome',
    'appium:chromedriverExecutableDir': 'chromedrivers', 
    'wdio:enforceWebDriverClassic': true 
}
```

## iOS tests

Here's a minimal set of capabilities to run native app tests on iOS devices:

```javascript
const capabilities = {
  'smart:token': 'your_api_token_here',
  'appium:automationName': "XCUITest",
  'platformName': "iOS",
  //'browserName': "Safari", // enable this to run web browser (Safari) tests
}
```

As per the comment, you can enable the `browserName` capability to run web browser tests on iOS devices.

You may run into issues if you enter the tested iOS device's page in SmartDust Lab while the test is running.
If you want to monitor the test, please open the device page before starting the test and do not interact with the device until the test has finished.

## Tips

- The Appium tests startup time varies wildly depending on the device used.
- To speed up test startup on Android devices, try setting the `appium:skipDeviceInitialization` capability to `true`.
- In case of persisting issues, please contact Smartdust support for assistance.


