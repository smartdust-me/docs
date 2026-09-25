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

- A **SmartDust** account
- Your **SmartDust device remote debug key**
- **Node.js v20.19+**
- **npm v10+**
- Installed **Android SDK + ADB**
- Installed **Java JDK**
- Optional: your `.apk` or app build process ready

---

## 🔌 Step 1: Connect to Device

1. Navigate to Dashboard
2. Click **Remote debug** in the device card (top-left corner or settings)
3. Enable remote ADB access

![Smart Dust lab remote debug](/img/remote_debug.png)

4. Copy the generated ADB command, e.g.:

```bash
adb connect 123.45.67.89.smartdust.me:5555
```

5. Paste it into your terminal and run it
6. Back in the dashboard, accept the ADB key request. If no popup appears, disable and enable **Remote debug** again.

Verify that your device is connected:

```bash
adb devices
```

Expected output:

```text
List of devices attached
123.45.67.89.smartdust.me:5555   device
```

If `offline` is displayed instead of `device`, retry the connection.

---

## Step 2: Upload your app to the device.

We will use the Dust app:  
`https://github.com/damiant/dust`

First, build the app, for example using:

```bash
bunx ng build
```

Then deploy it to the connected Android device using:

```bash
npx cap run android
```

You should see the app on your device.

![Smart Dust lab apk upload](/img/apk_upload.png)

If not, check your terminal output for possible errors.

---

## Step 3: Install Appium

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

## Step 4: Start Appium Server

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

## Step 5: Write Your Test

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

## ▶️ Step 6: Run Your Tests

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
