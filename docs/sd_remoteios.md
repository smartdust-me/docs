# `sd_remoteios` - iOS Remote Connect tool

`sd_remoteios` is a program available for Mac OS and Linux that connects iOS devices from a remote Smartdust Lab so that they're visible on your PC as if they ware plugged in via USB.
In itself, it's not a feature rich tool, so for automation purposes for example, we recommend using the [Smartdust CLI Client](/docs/docs/cli-client) that utilizes `sd_remoteios` under the hood.

## Installation 
Grab the appropriate binary for your OS and put it in a directory that's in your PATH so that you can call it everywhere.
Also, if your downloaded file contains an architectural postfix(e.g. `x64`), rename it to `sd_remoteios`.
**After clicking the link, refresh the page to download**
- [Mac OS universal binary](/sd_remoteios/sd_remoteios) 
- [Mac OS ARM64 binary](/sd_remoteios/sd_remoteios_arm64)
- [Linux x64 binary](/sd_remoteios/sd_remoteios_x64)

**Linux**: additionally, you need to install [usbmuxd](https://github.com/libimobiledevice/usbmuxd) and make sure it works:

    sudo systemctl start usbmuxd
    sudo systemctl status usbmuxd

We also recommend for all users to install `libimobiledevice` tools for easier debugging. More info [here](/docs/docs/libimobiledevice).

## Usage
Go to an iOS device on your Smartdust Lab instance and click `Enable` on the `Remote Debug` section in the `Dashboard` tab.
![](/cli-client/remote-debug.png)

If on Mac OS, copy the command and execute it. 

On Linux, you should first make sure that the `usbmuxd` service is working.

    sudo systemctl enable usbmuxd

In the command itself, delete the `./` characters before the executable name, e.g.
    
    sudo sd_remoteios -c xxx.smartdust.me:12345 

You can verify the connection by using programs from the `libimobiledevice` toolchain, for example `ideviceinfo` should print a lot of data about one of the connected phones.
:::note
Due to the current connection mechanism, you get connected to all the iOS devices from one provider.
Additionally, as for now, `sd_remoteios` and consequently Smartdust CLI Client can only connect to one "connection string" at a time.
:::



