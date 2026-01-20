---
id: provider-live-demo
title: Device Provider Live Demo (limited availability)
---

The most robust and stable option for connecting your own devices to your private SmartDust Lab instance is hosting your own provider servers.
This guide is for showing how to quickly set up a demo provider server for testing purposes.
If that's too much for you, you can always use the "Add your own device" tab on the SmartDust Lab main page.

# Prerequisites
- Computer with a Linux OS (a Windows or Mac can also be used, but we don't have ready instructions for them)
- Computer to act as a device provider; doesn't need any OS installed, but an x86-64 (Intel or AMD) CPU is required.
It needs to be connected to the internet via a physical cable, Wi-Fi is not supported for now.
You can actually use the same machine as the one above.
- disk (e.g. a USB stick) with at least 32 GB of capacity, ready to be erased
- Linux CLI familiarity

# 1. Obtain the custom OS image
Contact SmartDust to receive a customized OS image for a device provider for your Lab instance.
It's a standard ISO file compressed with GZip.
Download it to your computer and take note of its location (path).

# 2. Write the OS image to your disk

## Linux instructions:

Enter the terminal and make sure that the following utilities are installed:
```
fdisk
gzip
dd
```
If not, install them.

Plug in your chosen disk to the computer.
Find out its device path by running `sudo fdisk -l`

Browse through the output to find your device, e.g.:
```aiignore
Disk /dev/sdb: 28,82 GiB, 30943995904 bytes, 60437492 sectors
Disk model: DataTraveler 70 
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0xc3072e18
```
In this case, the device path is */dev/sdb*. Determine yours.

You need to also know the path to the downloaded image file or just `cd` into the directory where it resides.
The crux of the process is in the next command, which simultaneously unpacks the archive and writes the custom OS image to your disk:
```aiignore
gzip -dc /path/to/downloaded/image.img.gz | sudo dd of=/dev/your_disk bs=4K conv=sync,noerror status=progress
```
Replace the path to the downloaded image and to the disk with your own.
The process can take a while, but that's all when it comes to the disk preparation.

# 3. Boot up your new device provider

Find out how to enter into the Boot Menu on the machine of your choosing.
You need to connect the computer to a monitor or KVM tooling at least for the first-time setup.
Power it off and insert the disk prepared beforehand (most likely you're using a USB stick so you just need to plug it into a USB port).
Turn on the computer and try to enter the Boot Menu.
If you fail, reboot and try again.

Once in the Boot Menu, choose your prepared disk.
If it isn't listed, you might need to try another machine or redo the setup from the section above.

Next, the GRUB menu should appear with the SmartDust Provider option highlighted.
Click Enter to proceed, but even if you don't, it'll happen automatically after a few seconds.

That's basically all you need to do on the machine! Provided it has a stable internet connection via a cable, the rest of the setup should get completed automatically.

You can set up the boot order in the UEFI menu if you want to be able to reboot without having to manually go into the Boot Menu again.

# Claim the provider in your SmartDust Lab instance

Your newly configured server should automatically connect to your SmartDust Lab instance.
Then, after logging in as an admin or user, you need to go to the “Add your own device” tab. 

In this tab, you’ve got all the information about the possibility of connecting with an external device or providers. 
In case there is a provider server which is not claimed in your network, then you will see it. 
If there aren't any, you will get information. 
The providers are matched to you based on the IPv4 address.

![Provider claiming view - example](/provider-live-demo/provider-claiming-list.png)

If you see your provider server on the list, you can begin the claiming process by clicking the button.