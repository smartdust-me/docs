---
id: android-test-setup
title: Android Test Setup
---

## Android Test Setup
This guide contains the common SmartDust Lab setup used by the Android automated testing quickstarts.

The example below use the Dust application:
`https://github.com/damiant/dust`

## Prerequisities 

Before you begin, ensure you have the following installed:

- A **SmartDust account
- Access to **Remote debug** for a SmartDust Lab device
- Installed **Android SDK + ADB**

---

## Step 1: Connect to Device

1. Navigate to the SmartDust Lab Dashboard.
2. Click **Remote debug** in the device card.
3. Enable remote ADB access.

![Smart Dust lab remote debug](/img/remote_debug.png)

4. Copy the generated ADB command, for example:

```bash
adb connect example.smartdust.me:5555
```

5. Paste the command into your terminal and run it.


Verify the connection:

```bash
adb devices
```

Expected output:

```text
List of devices attached
example.smartdust.me:5555   device
```
If the device is displayed as `offline` or authentication fails, reconnect Remote Debug and accept the ADB key request again.

---

## Step 2: Build and Deploy Dust

Build the Dust application:

```bash
bunx ng build
```

Deploy it to the connected Android device:

```bash
npx cap run android
```

You should see Dust on the SmartDust Lab device.

![Smart Dust lab apk upload](/img/apk_upload.png)

> These quickstarts were validated using `npx cap run android`. Remote ADB connections can occasionally be affected by deployment timeouts. You can also upload your own APK using the SmartDust Lab **Install App** feature described in [Installing apps on SmartDust Lab devices](../app-installation.md).
