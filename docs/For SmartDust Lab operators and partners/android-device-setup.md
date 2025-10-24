---
id: android-device-setup-guide
title: Connecting Android devices to SmartDust Lab
sidebar_position: 1
---

# Connecting Android devices to SmartDust Lab

Step-by-step instructions for connecting Android devices to the system.

## (Optional) Step 1: Resetting the Device

- If the device is intended to be used by different users, you might want to first reset it to factory settings to avoid sharing personal data and providing a cleaner experience. 

## Step 2: Enabling Developer Options

1. Open the device settings.
2. Navigate to **About phone**.
3. Tap **Build number** seven times to activate Developer Options.

This might differ slightly based on your device, consult online documentation and tutorials.

## Step 3: Activating USB Debugging

1. Return to the main settings menu.
2. Open **Developer options**.
3. Enable **USB Debugging**.
4. Enable **Disable adb authorization timeout**

Depending on the device and its OS, additional steps may be required:

- Some systems require enabling **Install via USB** within Developer Options.
- Ensure the device is in **File Transfer (MTP)** mode rather than "Charging only."
- In certain environments, additional permissions such as background operation for developer tools or explicit trust confirmation may be necessary.

## Step 4: Connecting the Device

1. Turn the provider server on.
2. Connect your device to the server via a USB cable.
3. Unlock your device.
4. Accept the prompt asking for permission to allow USB debugging.
5. If prompted, accept the installation of the SmartDust Lab app.

:::caution Device must be unlocked
The phone must be **unlocked** whenever you connect it to the server and **after every reboot**.  
If the device is locked at boot or relocks while connected, ADB may show it as *offline/unauthorized* and the device will not appear in the Lab.  
Unlock the device and confirm the USB debugging prompt again if needed.
:::


## Step 5: Verify Connection

- Navigate to the **SmartDust Lab page** to confirm the device connection status.

## Troubleshooting

The procedures for activating developer options and USB debugging may vary. 
Consult online documentation and tutorials relevant to your device.

If the USB debugging prompt does not appear:

1. Disable **USB Debugging**.
2. Disconnect the USB cable.
3. Re-enable **USB Debugging**.
4. Reconnect the USB cable.

If the issue persists, try restarting the phone or verifying that USB mode is not set to "Charging only."

If `adb devices` shows **unauthorized** or the device disappears after a reboot: **unlock the phone**, reconnect the USB cable, and confirm the USB debugging prompt again.
