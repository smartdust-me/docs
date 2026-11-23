---
id: android-appium-quickstart
title: Appium
---

## 🤖 Appium Quickstart

Appium is an open-source automation framework for testing native, hybrid, and mobile web applications. It uses the WebDriver protocol and supports real Android devices through the UiAutomator2 driver.

Appium documentation:  
`https://appium.io/docs/en/latest/`

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js v20.19+**
- **npm v10+**
- Installed **Android SDK + ADB**
- Installed **Java JDK**

---

## Setup

Before continuing, complete the [Android Test Setup](./android-test-setup.md).

It covers connecting a SmartDust Android device through Remote Debug and deploying the Dust application used in this example.

---
## Step 1: Install Appium

Create a new directory for the Appium test:

```bash
mkdir appium-test
cd appium-test
npm init -y
```

Install Appium and WebdriverIO:

```bash
npm install --save-dev appium webdriverio
```

Install the Android UiAutomator2 driver:

```bash
npx appium driver install uiautomator2
```

You can verify the Android setup using:

```bash
npx appium driver doctor uiautomator2
```

A correctly configured environment should show:

```text
0 required fixes needed
```

Optional warnings such as missing `ffmpeg` or `bundletool.jar` do not prevent this basic test from running.

---

## Step 2: Start Appium Server

Start the Appium server:

```bash
npx appium
```

By default, Appium starts on:

```text
http://127.0.0.1:4723
```

Keep this terminal running while executing the test.

---

## Step 3: Write Your Test

Create a file named:

```text
dust-test.mjs
```

Add the following test:

```js
import { remote } from 'webdriverio';

const device = process.env.ANDROID_SERIAL;
const appPackage = 'nexus.concepts.dust';

if (!device) {
  throw new Error('ANDROID_SERIAL is required');
}

const driver = await remote({
  hostname: '127.0.0.1',
  port: 4723,
  logLevel: 'error',

  capabilities: {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': device,
    'appium:udid': device,
    'appium:noReset': true,

    'appium:adbExecTimeout': 120000,
    'appium:uiautomator2ServerInstallTimeout': 120000,
    'appium:uiautomator2ServerLaunchTimeout': 120000
  }
});

try {
  console.log(`✓ Launch app "${appPackage}"`);
  await driver.activateApp(appPackage);

  await driver.pause(3000);

  const currentPackage = await driver.getCurrentPackage();

  if (currentPackage !== appPackage) {
    throw new Error(
      `Expected "${appPackage}", but "${currentPackage}" is running`
    );
  }

  console.log(`✓ Assert app "${appPackage}" is running`);

  console.log(`✓ Kill ${appPackage}`);
  await driver.terminateApp(appPackage);

  console.log('\n✓ Appium test passed');
} finally {
  await driver.deleteSession();
}
```

The longer timeout values are useful when testing through SmartDust remote ADB, because Appium may need additional time to install and start the UiAutomator2 server on the remote device.

---

## ▶️ Step 4: Run Your Tests

Make sure the SmartDust device is still connected:

```bash
adb devices
```

Then run the test using the device serial shown by ADB:

```bash
ANDROID_SERIAL=123.45.67.89.smartdust.me:5555 node dust-test.mjs
```

Example output:

```text
✓ Launch app "nexus.concepts.dust"
✓ Assert app "nexus.concepts.dust" is running
✓ Kill nexus.concepts.dust

✓ Appium test passed
```

![Smart Dust lab Appium test](/img/appium_test.png)
