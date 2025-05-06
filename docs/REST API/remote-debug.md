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

Send a POST request to the `/api/v1/user/devices/{serial}/remoteConnect` endpoint.
Replace `{serial}` with the serial number of the device you want to connect to.
The response object will contain a `remoteDebugUrl` field, from which you should export the port number by splitting the URL string by `:`.

4. Find out the device's provider information.

Use the `GET /api/v1/user/devices/{serial}` endpoint to retrieve a specific device's information.
Extract the `ip` field from the `provider` object in the response JSON.

5. Open a tunnel to the device's provider server.

Call the `POST api/v1/tunnel` endpoint to open a tunnel to the device's provider server.
Put the variables saved in previous steps in request body:
```json
{
    "ip": "provider_ip",
    "port": "remote_debug_port"
}
```
The response will contain a `port` field, which should be saved.

6. Connect to the device via ADB (Android) or `sd_remoteios` (iOS).

The Remote Debug address for the device is `[your_instance_name].smartdust.me:[port]`, where `[port]` is the port number you received in the previous step.

If it's the first time your machine is connecting to an Android device, you have open the SmartDust Lab web interface first and accept the key fingerprint when connecting.

## Steps to disconnect
1. Close the tunnel to the device's provider.

Call the `DELETE /api/v1/tunnel` endpoint to close the tunnel to the device's provider server.
Provide the same information in the body as when creating the tunnel.

2. Stop the Remote Debug session.

Use the `DELETE /api/v1/user/devices/{serial}/remoteConnect` endpoint to stop the Remote Debug session.

3. Release the device.

Call the `DELETE /api/v1/user/devices/{serial}` endpoint to release the device from control.

## Tips
Refer to the Swagger documentation for the API for more information, which is available at `https://[your-instance-name].smartdust.me/api/v1/swagger.json`.

When you put the device under control through the API, you should see it in the web interface of the SmartDust Lab.
The device is then marked as "Automation".

For automation use cases, such as CI/CD pipelines, you need to make sure to reuse a previously manually accepted ADB key, otherwise the connection will be rejected.
On Linux, the ADB key is stored in `~/.android/adbkey`.
It needs to be copied to the machine where the automation is running.