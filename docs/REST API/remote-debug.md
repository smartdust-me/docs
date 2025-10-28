---
id: api-remote-debug
title: Connecting to devices remotely via REST API
sidebar_position: 1
---
# Connecting to devices remotely via REST API

The SmartDust Lab REST API allows you to connect to devices remotely. 
This is particularly useful for automating tasks and integrating with other systems.

If you are unfamiliar with the REST API, please refer to the [API access documentation](api-access.md) for more information.

## Steps to connect

1. Pick a free device from the SmartDust Lab.

Use the `GET /api/v1/devices` endpoint to retrieve a list of available devices.
To view the available, unused devices, you should filter the device objects to have the following values:
```json
{
  "present": true,
  "status": 3,
  "ready": true,
  "using": false
}
```
Store the `serial` field values of the devices you choose to connect to.

2. Put the device under your control.

Call the `POST /api/v1/user/devices` endpoint to take control of the chosen device.
Include the chosen device's serial identifier in the request body:
```json
{
    "serial": "serial_number"
}
```

3. Start a Remote Debug session.

Send a POST request to the `/api/v1/user/devices/{serial}/remoteConnectTunnel` endpoint.
Replace `{serial}` with the serial number of the device you want to connect to.

4. Connect to the device via ADB (Android) or `usbfluxctl` (iOS).

**Android:**

Use Android Debug Bridge which comes with the Android SDK.
Run the following command to connect to the device:
```bash
adb connect [remoteConnectUrl]
```
where `[remoteConnectUrl]` is the value returned in the API response from the previous step.

If it's the first time your machine is connecting to an Android device, you have open the SmartDust Lab web interface first and accept the key fingerprint when connecting.

**iOS:**

Only Linux and MacOS are supported for iOS Remote Debugging for the time being.
Follow the instructions in the [iOS Remote Debugging documentation](ios-remote-debug.md) to install `usbfluxd` and `usbfluxctl`.
Run the following command to connect to the device:
```bash
sudo usbfluxd -n && usbfluxctl add [remoteConnectUrl]
```
where `[remoteConnectUrl]` is the value returned in the API response from the previous step.

## Steps to disconnect

1. Close the connection to the device.

Call the `DELETE /api/v1/user/devices/{serial}/remoteConnectTunnel` endpoint.

2. Release the device.

Call the `DELETE /api/v1/user/devices/{serial}` endpoint to release the device from your control.

## Tips
Refer to the Swagger documentation for the API for more information, which is available at `https://[your-instance-name].smartdust.me/api/v1/swagger.json`.

When you put the device under control through the API, you should see it in the web interface of the SmartDust Lab.
The device is then marked as "Automation".

For automation use cases, such as CI/CD pipelines, you need to make sure to reuse a previously manually accepted ADB key, otherwise the connection will be rejected.
On Linux, the ADB key is stored in `~/.android/adbkey`.
It needs to be copied to the machine where the automation is running.