# `sd_remoteios` - iOS Remote Connect tool

`sd_remoteios` is a program available for Mac OS and Linux that connects iOS devices from a remote Smartdust Lab so that they're visible on your PC as if they were plugged in via USB.
In itself, it's not a feature rich tool, so for automation purposes for example, we recommend using the [Smartdust CLI Client](/docs/docs/cli-client) that utilizes `sd_remoteios` under the hood.

## Installation 
- Grab the appropriate binary for your OS
- Put it in a directory that's in your PATH so that you can call it everywhere.
- Add run permissions for the file (`chmod +x PATH_TO_FILE`)
- Also, if your downloaded file contains an architectural postfix (e.g. `x64`), rename it to `sd_remoteios`.
- Mac OS - you need to "Trust" the application the first time you run it. Locate it in Finder and select "Open" from right-click context menu.

**After clicking the link, refresh the page to download.**
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
:::caution
For your devices to be visible in XCode and similar apps, you need to open the application only **after** you've made a connection. 
If they were previously running, you need to fully restart them.
:::
:::note
Due to the current connection mechanism, you get connected to all the iOS devices from one provider.
Additionally, as for now, `sd_remoteios` and consequently Smartdust CLI Client can only connect to one "connection string" at a time.
:::
## Troubleshooting
:::info
Sometimes, especially in bad network condition, your connection to the remote devices might suddenly drop. In that case, restart `sd_remoteios`.
You can also obtain a new connection URL by click `Disable` and `Enable` again on the Remote Debug panel in Smartdust Lab device page.
:::
:::tip
You might encounter an error saying that `/tmp/usbfluxd` has locked permission. You can resolve that by deleting the file yourself:
    
    sudo rm /tmp/usbfluxd
:::
