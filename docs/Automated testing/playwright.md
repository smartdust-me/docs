---
id: android-playwright-quickstart
title: Playwright
---

##  🎭 Playwright Quickstart
Playwright is a fast and reliable end-to-end testing framework for modern web applications. It enables you to write expressive tests in JavaScript, TypeScript, Python, Java, or C#, and supports all major browsers — including Chromium, Firefox, and WebKit — with a single unified API.

Playwright documentation:
`https://playwright.dev/docs/intro`

## Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js v20+**
- Installed **Android SDK + ADB**

---
## Setup

Before continuing, complete the [Android Test Setup](./android-test-setup.md).

It covers connecting a SmartDust Android device through Remote Debug and deploying the Dust application used in this example.

---

## Step 1: Install Playwright
You can install Playwright using the official generator:

```bash
npm init playwright@latest
```

This will:
- Set up a new test project
- Let you choose language (TypeScript/JS)
- Optionally install browsers (Chromium, Firefox, WebKit)

Example setup output:
✔ Where to put your end-to-end tests? · tests
✔ Add a GitHub Actions workflow? · Yes
✔ Install Playwright browsers? · Yes

Once installed, try running the example tests:
```bash
npx playwright test
```

---

## Step 2: Write Your Test:
We will test the connection with the device by simply taking a screenshot:

```bash
import { _android as android } from 'playwright';
import { execSync } from 'child_process';
import fs from 'fs';

(async () => {
  const devices = await android.devices();
  const device = devices[0];

  const model = await device.model();
  const serial = await device.serial();

  console.log('✅ Connected to Android Device');
  console.log('📱 Model:', model);
  console.log('🔌 Serial (masked):', serial.slice(0, 4) + '****');

  console.log('📸 Taking screenshot via ADB...');

  const adbCommand = `adb -s ${serial} exec-out screencap -p`;
  const screenshot = execSync(adbCommand);

  fs.writeFileSync('device-screen.png', screenshot);
  console.log('✅ Screenshot saved as device-screen.png');

  await device.close();
})();
```

---

## ▶️ Step 3: Run Your Tests
You can now simply run the playwright tests on your device using:
```bash
npx tsx NAME_OF_THE_TEST.ts
```
![Smart Dust lab playwright test](/img/playwright_test.png)


