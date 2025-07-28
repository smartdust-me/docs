---
id: android-maestro-quickstart
title: Maestro
---

## Maestro Quickstart
Maestro is a modern mobile UI testing framework that allows you to write lightweight, readable YAML-based flows for testing native apps on Android and iOS devices. It is designed for fast iteration, ease of debugging, and seamless integration with both real devices and CI environments.

## Prerequisities
Before you begin, ensure you have the following installed:
- A Smartdust account
- Your smartdust device remote debug key. 
- Maestro cli
- Android sdk

## Step 1: Connect to device.
Firstly you have to connect to device, then:
- Navigate to Dashboard
- Find Remote debug (probably on the upper left of the dashboard settings) and click Enable

![Smart Dust lab remote debug](/img/remote_debug.png)

- Copy the code, it will look like this: `adb connect ...smartdust.me:..`
- Paste the code to the terminal/Powershell/cmd
- On website accept to add adb key to Smart Dust Lab, if you don't have any popup try disabling and enabling Remote debug.

Now u should be connected to the device via adb. You can check connection using `adb devices`, it should be something like this:
`list of devices attached
...smartdust.me:..   device`
if instead of `device` there is displayed `offline`, you should try to connect again.

## Step 2: Upload your app to the device.
We will upload based on the Dust app: `https://github.com/damiant/dust`.
So firstly, build the app i will do it using `bunx ng build` and then deploy app using `npx cap run android`. 
You should see the app on your device. 

![Smart Dust lab apk upload](/img/apk_upload.png)

If not check you terminal for potential issues.

## Step 3: Run the Tests
Maestro Documentation:
`https://docs.maestro.dev/api-reference/commands`
You can now simply run the maestro tests on your device using:
`maestro test NAME_OF_THE_TEST.yaml`

![Smart Dust lab dust app test](/img/dust_test.png)