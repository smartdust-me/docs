---
id: ios-device-setup-guide
title: Connecting iOS devices to SmartDust Lab
sidebar_position: 2
---

# Connecting iOS devices to SmartDust Lab

Step-by-step instructions for connecting iOS devices to the system.

## Step 1: Report Device Information
- Every new iOS device to be connected to the SmartDust Lab must be registered in accordance with Apple requirements.
Contact the Lab system administrator (usually Smartdust) to report the serial number (UDID) of the iOS device you wish to connect.
This step is not necessary for devices that have already been connected to the Lab in the past.

##  Step 2: Resetting the Device

- (Optional) If the device is intended to be used by different users, you might want to first reset it to factory settings to avoid leaking personal data and providing a cleaner experience. 
- **Remove any lockscreen security (passcode, biometric).**
> If you keep a passcode/biometrics, be aware that you will need to enter the passcode as described below to allow the connection.

## Step 3: Connecting the Device

1. Turn the provider server on.
2. Connect your iPhone to the server via a USB cable.
3. Unlock the iPhone.
4. Tap **Trust** when prompted by your iPhone.
   - For devices running iOS 17 and above, you will be prompted to trust the computer twice. Ensure to accept the prompt each time it appears.

:::caution Passcode required when connecting/restarting
If a passcode/Face ID/Touch ID is enabled:
- You must **enter the passcode after every iPhone restart** and when **connecting to the server** to allow data access/pairing.
- iOS may **periodically require the passcode again** (e.g., due to security policies). If you see prompts like “Unlock iPhone to use accessories” or are asked to trust the computer again, **unlock and enter the passcode** to continue.
:::


## Step 4: Verify Connection

- Navigate to the **SmarDust Lab page** to confirm the device connection status.

## Troubleshooting

If the "Trust this computer" prompt does not appear:

1. Disconnect the USB cable from your device.
2. Restart your iPhone.
3. Reconnect the USB cable.

If the device is not recognized or disconnects unexpectedly: **unlock the iPhone** and **enter the passcode** (especially after a restart or after a period of inactivity), then reconnect the USB cable if necessary.
