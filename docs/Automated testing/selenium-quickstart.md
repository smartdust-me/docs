---
id: android-selenium-quickstart
title: Selenium
---

## 🌐 Selenium Quickstart

Selenium can automate **Chrome on Android devices** through ChromeDriver and ADB.

> Selenium does not directly automate native Android application UI.  
> In this quickstart, Selenium is used to control Chrome on a SmartDust Android device.

Selenium documentation:  
`https://www.selenium.dev/documentation/`

## Prerequisites

Before you begin, ensure you have the following installed:

- Installed **Android SDK + ADB**
- Installed **Node.js + npm**
- Google Chrome installed on the SmartDust Android device
- A ChromeDriver version matching the Chrome version on the device

---

## SmartDust Device Setup

Connect the Android device through SmartDust Remote Debug as described in
[Android Test Setup](./android-test-setup.md#step-1-connect-to-device).

This Selenium example automates Chrome running on the SmartDust Android device. It does not automate the native Dust application.

---

## Step 3: Create Selenium Project

Create a project directory:

```bash
mkdir -p selenium
cd selenium
```

Initialize npm:

```bash
npm init -y
```

Install Selenium WebDriver:

```bash
npm install selenium-webdriver
```

---

## Step 1: Check Chrome Version

Verify Chrome is installed on the SmartDust device:

```bash
adb -s 123.45.67.89.smartdust.me:5555 shell pm list packages | grep com.android.chrome
```

Expected:

```text
package:com.android.chrome
```

Check the installed Chrome version:

```bash
adb -s 123.45.67.89.smartdust.me:5555 shell dumpsys package com.android.chrome | grep versionName
```

Example:

```text
versionName=153.0.8010.52
```

ChromeDriver must match the Chrome version installed on the Android device.

---

## Step 2: Install Matching ChromeDriver

Create a directory for ChromeDriver:

```bash
mkdir -p .drivers
```

For example, for Chrome `153.0.8010.52`:

```bash
wget -q \
https://storage.googleapis.com/chrome-for-testing-public/153.0.8010.52/linux64/chromedriver-linux64.zip \
-O /tmp/chromedriver.zip
```

Extract it:

```bash
unzip -o /tmp/chromedriver.zip -d .drivers
```

Make ChromeDriver executable:

```bash
chmod +x .drivers/chromedriver-linux64/chromedriver
```

Verify:

```bash
./.drivers/chromedriver-linux64/chromedriver --version
```

Expected:

```text
ChromeDriver 153.0.8010.52
```

---

## Step 3: Write Selenium Test

Create:

```text
selenium-android.mjs
```

Add:

```js
import { Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

const device = process.env.ANDROID_SERIAL;

if (!device) {
  throw new Error('ANDROID_SERIAL is required');
}

const options = new chrome.Options()
  .androidChrome()
  .androidDeviceSerial(device);

const service = new chrome.ServiceBuilder(
  './.drivers/chromedriver-linux64/chromedriver'
);

const driver = await new Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .setChromeService(service)
  .build();

try {
  console.log(`✓ Open Chrome on "${device}"`);

  await driver.get('https://example.com');

  const title = await driver.getTitle();

  if (title !== 'Example Domain') {
    throw new Error(`Unexpected title: ${title}`);
  }

  console.log('✓ Assert Example Domain is loaded');

  await new Promise(resolve => setTimeout(resolve, 5000));

  console.log('\n✓ Selenium test passed');
} finally {
  await driver.quit();
}
```

---

## ▶️ Step 4: Run Selenium Test

Make sure the SmartDust device is still connected:

```bash
adb devices
```

Run the test using the current SmartDust ADB serial:

```bash
ANDROID_SERIAL=123.45.67.89.smartdust.me:5555 node selenium-android.mjs
```

Expected output:

```text
✓ Open Chrome on "123.45.67.89.smartdust.me:5555"
✓ Assert Example Domain is loaded

✓ Selenium test passed
```

Chrome should open on the SmartDust Android device, navigate to `https://example.com`, and Selenium should verify the page title.

![Smart Dust lab Selenium test](/img/selenium_test.png)
