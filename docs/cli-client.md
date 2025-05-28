# Smartdust CLI Client

### Description

Smartdust CLI client is a tool that enables connecting to devices present in Smartdust Lab instances via ADB (Android) and usbfluxd (iOS) through the command line. 
This in turn allows for automation of development/testing/etc. processes as connecting to devices can be done entirely in terminal script environments without touching the web UI interface. 
It enables usage of CI/CD tools such as Jenkins.

## Installation
- Install [Ruby](https://www.ruby-lang.org/en/downloads/)
- Then you can install Smartdust CLI client as a Ruby gem:
 
        sudo gem install smartdust-client
 
## Quick device connecting tutorial

### Prerequisites

- An account that you can log in to a Smartdust Lab with - you can make one by visiting [public.smartdust.me](https://public.smartdust.me)
- Using a Linux OS and having basic knowledge regarding using the terminal - using Bash or zsh is recommended
- Android:
    - ADB installed and working
- iOS:
    - [usbmuxd](https://github.com/libimobiledevice/usbmuxd) installed
    - [sd_remoteios](sd_remoteios.md) installed (needs to be in your PATH)
    - libimobiledevice installed - use the [instructions](libimobiledevice.md) (idevice_id program needs to be in your PATH)

:::caution
A Smartdust account with administrator privileges cannot be used with this tool, it doesn’t work!
:::
:::caution
You cannot reuse the same ADB key in another Smartdust account. 
:::

Steps:

Follow the installation instructions from above and make sure that the client is installed properly by invoking

    smartdust-client
in your terminal window. You should see a description of the tool’s options.

### Getting a Lab connection token
Obtain a Smartdust Lab connection token from a Smartdust Lab instance - for example at public.smartdust.me. 
After logging in, click “Settings” on the upper menu bar:
![](/cli-client/upper-menu-settings.png)

Then go to the “Keys” tab and in the “Access Tokens” pane click on the “+” icon on the right.
![](/cli-client/access-token-settings.png)
Name your token however you like and after clicking “Generate New Token” your token will be displayed as a string of characters. 
Copy it and keep it somewhere you’ll have access to.

Go back to the main view of the Lab, for example by clicking on the Smartdust logo in the upper left corner.

### Setting your Lab token and URL as environmental variables
Let’s bring the terminal back to view again. We’ll need to set some environmental variables - the token you just copied and the URL of the Smartdust Lab. 
This is roughly described by the tool itself when you type

    smartdust-client -h

Instead of using environmental variables we can just pass appropriate flags when interacting with the client but for the purposes of this tutorial let’s proceed with the former.

Setting the variables we need in a Bash or zsh shell goes as follows:

    export SD_TOKEN=your_copied_token
    export SD_URL=https://public.smartdust.me

It might differ if you’re using a different shell, check for suitable instructions online.

As you can see, the Smartdust Lab URL must be passed in the full, including the `https://` protocol signifier. 
However, don’t add any trailing characters after the domain name of the Lab which might be displayed in your browser.

## Connecting to Android devices

### Connecting to a device for the first time

Keep the web UI interface of the Smartdust Lab open in your browser and in the terminal window use the freshly installed Smartdust CLI client like this:

    smartdust-client connect --min=1 -n 1 -f group.type:free ready:true platform:Android
That’s for free public.smartdust.me users, so this command should work for everyone. If you’re a premium user and/or working on a private instance, you should omit the `group type` filter, like this:

    smartdust-client connect --min=1 -n 1 -f ready:true platform:Android
:::caution
If that’s the first time you’re connecting to a Smartdust Lab device using ADB, a popup should now appear in the web interface, prompting you to add a new ADB key. Confirm it and run the above command again.
:::
It is recommended to use the `ready:true platform:Android` filtering keys when connecting to public.smartdust.me, otherwise the tool will try to connect to unavailable devices and take a long time or even fail.

It is highly advisable to use both --min and -n arguments and set them to the same value.

That’s it, the tool should now connect you to an available Lab device via ADB! After it finishes its work, check

    adb devices
and the device should be available for you to use via ADB!

If you want to connect to more devices and/or use particular types of devices, use the -h flag to find out more about a given command. For example

    smartdust-client connect -h

## Connecting to iOS devices

When connecting to iOS devices, Smartdust CLI heavily depends on a couple of external dependencies. 
You need to make sure that `usbmuxd` service works by typing:

    sudo systemctl start usbmuxd
and check if it’s running:

    sudo systemctl status usbmuxd
You also need to install [`sd_remoteios`] for your OS. 
Put it in your PATH so that you can call it just like this:

    sd_remoteios
Also, verify if `idevice_id` is working:

    idevice_id
To be sure that so far everything’s fine, you can go ahead to Smartdust Lab, pick a free iOS device and copy the command for Remote Debug:
![](/cli-client/remote-debug.png)

Paste it in your terminal and hit enter. It should say that you are connected successfully.

In another terminal window type

    ideviceinfo
If a bunch of properties are printed on the screen, congratulations! That was the hardest part.
:::tip
We advise to read the [`sd_remoteios` documentation](sd_remoteios.md) for better understanding.
:::
To connect to an iOS device in a Smartdust Lab instance, you can copy its serial number and execute the following command:

    smartdust-client connect -f serial:adeb2bc11f101da2a3de1d0c52a2f32b474f5127
You should of course put the serial of your device after the colon.

That’s it! You can confirm the connected devices by listing them:

    idevice_id -l
It can surprise you, but you can have more than one device on the list. Due to the current connection mechanism, you get connected to all the iOS devices from one provider.
:::info
As for now, `sd_remoteios` and consequently Smartdust CLI Client can only connect to iOS devices connected to one provider at the same time.
If you, for example, try to connect to all devices and they are connected to different providers, Smartdust CLI Client will fail.
:::
## Disconnecting from the devices

In order to disconnect from all devices, both via ADB, `sd_remoteios` and also to free them in the Lab, use:

    smartdust-client disconnect --all

## Troubleshooting
:::tip
On a rare occasion that different users will start the Smartdust CLI Client on the same device, there might be a permission issue with some temporary files the program creates.
In that case, forcefully delete the `/tmp/stf.log` and `/tmp/stf.pid` files.
:::
