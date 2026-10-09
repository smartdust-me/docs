---
id: android-webdriverio-quickstart
title: WebdriverIO
---

## 🧪 WebdriverIO Quickstart

WebdriverIO is a test automation framework for web and mobile applications. With Appium, it can run automated tests against real Android devices connected through ADB.

WebdriverIO documentation:  
`https://webdriver.io/docs/gettingstarted/`

Appium service documentation:  
`https://webdriver.io/docs/appium-service/`

## Prerequisites

Before you begin, ensure you have the following installed:

- A **SmartDust** account
- Your **SmartDust device remote debug key**
- **Node.js**
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

5. Paste into your terminal and run it
6. Back in the dashboard, accept the ADB key request (if no popup, toggle remote debug off/on)

Verify your device is connected:

```bash
adb devices
```

Expected output:

```text
List of devices attached
123.45.67.89.smartdust.me:5555   device
```

If it says `offline`, retry the connection.

---

## Step 2: Upload your app to the device.

We will upload based on the Dust app: `https://github.com/damiant/dust`.

So, firstly build the app, for example, using:

```bash
bunx ng build
```

Then deploy the app using:

```bash
npx cap run android
```

You should see the app on your device.

![Smart Dust lab apk upload](/img/apk_upload.png)

If not, check your terminal for potential issues.

---

## Step 3: Install WebdriverIO

Create a new project:

```bash
mkdir webdriverio-test
cd webdriverio-test
npm init -y
```

Install WebdriverIO, the Mocha test runner, the Appium service, and Appium:

```bash
npm install --save-dev \
  @wdio/cli \
  @wdio/local-runner \
  @wdio/mocha-framework \
  @wdio/spec-reporter \
  @wdio/appium-service \
  appium
```

Install the Android UiAutomator2 driver:

```bash
export APPIUM_HOME="$PWD/.appium"
npx appium driver install uiautomator2
```

---

## Step 4: Configure WebdriverIO

Create a file named:

```text
wdio.conf.mjs
```

Add the following configuration:

```js
const device = process.env.ANDROID_SERIAL;

if (!device) {
  throw new Error('ANDROID_SERIAL is required');
}

export const config = {
  runner: 'local',

  specs: ['./test/specs/**/*.mjs'],

  maxInstances: 1,

  hostname: '127.0.0.1',
  port: 4723,

  capabilities: [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': device,
    'appium:udid': device,
    'appium:noReset': true,

    'appium:adbExecTimeout': 120000,
    'appium:uiautomator2ServerInstallTimeout': 120000,
    'appium:uiautomator2ServerLaunchTimeout': 120000
  }],

  services: [
    ['appium', {
      command: 'appium',
      appiumStartTimeout: 60000
    }]
  ],

  framework: 'mocha',
  reporters: ['spec'],
  logLevel: 'error',

  mochaOpts: {
    ui: 'bdd',
    timeout: 180000
  }
};
```

The Appium service starts the Appium server automatically when the WebdriverIO test begins.

The longer Android timeouts are useful when testing through a remote ADB connection.

---

## Step 5: Write Your Test

Create the test directory:

```bash
mkdir -p test/specs
```

Create:

```text
test/specs/dust.e2e.mjs
```

Add the following test:

```js
const appPackage = 'nexus.concepts.dust';

describe('Dust app', () => {
  it('should launch and close the app', async () => {
    console.log(`✓ Launch app "${appPackage}"`);

    await browser.activateApp(appPackage);
    await browser.pause(3000);

    const currentPackage = await browser.getCurrentPackage();

    if (currentPackage !== appPackage) {
      throw new Error(
        `Expected "${appPackage}", but "${currentPackage}" is running`
      );
    }

    console.log(`✓ Assert app "${appPackage}" is running`);

    console.log(`✓ Kill ${appPackage}`);
    await browser.terminateApp(appPackage);

    console.log('\n✓ WebdriverIO test passed');
  });
});
```

---

## ▶️ Step 6: Run Your Tests

Make sure the SmartDust device is still connected:

```bash
adb devices
```

Set the local Appium environment:

```bash
export APPIUM_HOME="$PWD/.appium"
```

Then run the test using the device serial shown by ADB:

```bash
ANDROID_SERIAL=123.45.67.89.smartdust.me:5555 npx wdio run ./wdio.conf.mjs
```

Example output:

```text
✓ Launch app "nexus.concepts.dust"
✓ Assert app "nexus.concepts.dust" is running
✓ Kill nexus.concepts.dust

✓ WebdriverIO test passed

Spec Files:  1 passed, 1 total (100% completed)
```

![Smart Dust lab WebdriverIO test](/img/webdriverio_test.png)
