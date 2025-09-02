---
id: app-installation
title: Installing apps on SmartDust Lab devices
---
SmartDust Lab provides features for fast and convenient installation of applications on Lab devices. 
Both Android and iOS platforms are supported.

To access the installation features, go to the main page of the SmartDust Lab and select a device to control.
Select the "Dashboard" tab if you're not already there.
To the right of the device's screen, look for the tile labeled "Install App".

## Android
You need to have your app in the APK format.
### Uploading from your computer
Click on the "Drop file from your computer" button and select the APK file from your computer.
A progress bar will let you know about the installation status.
After the installation has been completed, an app details window will appear, allowing you to launch the app or uninstall it.
### (Custom feature) Uploading from a preconfigured storage
If your private SmartDust Lab instance has been set up with a private storage, you can upload the APK file from there.
Click on the the button labeled "Install from private storage [storage_name]".
A dialog will appear, allowing you to view and install files from the configured storage.

## iOS
It is required for your app to be in the IPA format.
Like all iOS apps, it needs to be signed with a valid provisioning profile for the specific Lab device you want to run it on.
You have 2 options regarding the signing:
1. You can sign the app yourself using your own Apple Developer account and a provisioning profile that includes the UDID of the Lab device.
2. You can run your app through our special signing service.

Once you have a properly signed IPA file, you can upload it to the Lab device in the same way as for Android apps.

### Signing your app yourself
You need to know the UDID of the Lab device you want to run your app on.
On the main page of the SmartDust Lab it should be visile in the "Details" tab in the column named "Serial".
You can also find it when you're using the device on the device control view in the "Info" tab, in the "Hardware" section.

Then you need to add the device UDID to the provisioning profile you will use to sign the app.
Refer to the official Apple documentation, e.g. [https://developer.apple.com/help/account/devices/register-a-single-device](https://developer.apple.com/help/account/devices/register-a-single-device)
You can automate the signing process using [Fastlane](https://docs.fastlane.tools/)

### Using our signing service
You can use our signing service to sign your app with SmartDust's provisioning profile that works on all Lab devices.
For that, use the POST endpoint at `https://[instance_name].smartdust.me/s/apk/resign`, e.g. `https://public.smartdust.me/s/apk/resign`
You need to send your IPA file in the request.
The response will contain the signed IPA file.

Example using a shell tool `curl`:
```bash
curl -X POST -H "Accept: application/octet-stream" -F "file=@/path/to/your/app.ipa;type=application/octet-stream" https://public.smartdust.me/s/apk/resign -o resigned.ipa
```
Just replace `/path/to/your/app.ipa` with the actual path to your IPA file.
You might also need to adjust the URL if you're using a private instance of SmartDust Lab.
The signed IPA file will be saved as `resigned.ipa` in the current directory.