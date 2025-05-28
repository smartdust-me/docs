---
id: ios-remote-debug
title: iOS Remote Debugging
---

iOS Remote Debugging is a feature in SmartDust Lab that allows you to have remote access to developer features.
The use cases include running Appium tests and inspecting web views.

The connection interface is `usbmuxd`, which enables the use of open-source tools such as:
- `libimobiledevice` https://libimobiledevice.org/
- `pymobiledevice3` https://github.com/doronz88/pymobiledevice3
- `go-ios` https://github.com/danielpaulus/go-ios
- On devices with iOS versions *older* than 17 it allows full developer access to the device on MacOS, e.g. in XCode.

## Prerequisites
- A MacOS computer or a machine with Linux OS not older than Ubuntu 20.

- Basic command line competence.

## Software installation
- Install `libimobiledevice` https://libimobiledevice.org/.
Many package managers allow for simple installation.

- Install a custom SmartDust version of `usbfluxd` and `usbfluxctl` programs:
    - Download the appropriate zipped binaries for your OS and CPU from the links below.
    - Unzip the files. 
    - Rename the files to remove the OS and architecture postfix after `_` (e.g. `usbfluxd_macos_x64` -> `usbfluxd`).
    - Add run permissions for the files (`chmod +x PATH_TO_FILE`)
    - Move them to a directory that's in your $PATH environment variable so that you can execute it from everywhere.

## Downloads
`usbfluxd`:
- [Mac OS x64 binary](/usbfluxd-builds/usbfluxd_macos_x64.zip)
- [Mac OS ARM binary](/usbfluxd-builds/usbfluxd_macos_arm.zip)
- [Linux x64 binary](/usbfluxd-builds/usbfluxd_linux_x64.zip)

`usbfluxctl`:
- [Mac OS x64 binary](/usbfluxd-builds/usbfluxctl_macos_x64.zip)
- [Mac OS ARM binary](/usbfluxd-builds/usbfluxctl_macos_arm.zip)
- [Linux x64 binary](/usbfluxd-builds/usbfluxd_linux_x64.zip)
  
## Usage
- Go to an iOS device on your Smartdust Lab instance and click `Enable` on the `Remote Debug` section in the `Dashboard` tab.
- A command is displayed for an older tool, [`sd_remoteios`](sd_remoteios.md), which is *not recommended* anymore.
- Copy only the part that looks like [instance_name].smartdust.me:[port]. (You can also just manually take the port number).
- In your terminal, run the command `usbfluxctl add [instance_name].smartdust.me:[port]`, for example `usbfluxctl add public.smartdust.me:12345`.
- You can use `usbfluxctl list` to list the connected devices.

At this point it should be possible to connect to the device using various `usbmuxd` based tools.

- You can verify the connection by using programs from the `libimobiledevice` toolchain, for example `ideviceinfo` should print a lot of data about one of the connected phones.
- For managing the connections, check out `usbfluxctl -h`.

## Troubleshooting
- In case of connection issues, try disabling and enabling the Remote Debug feature in the Smartdust Lab device page.
