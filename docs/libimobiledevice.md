# Libimobiledevice installation guide
[libimobiledevice](https://libimobiledevice.org/) is a library and tool suite designed to enable communication with iOS
devices on any operating system. Unfortunately, we need the latest versions and that can only be done by building from source.
The following manual was written with Ubuntu OS in mind, but it should work on most Linux OS's. 
If in doubt, consult the README's in the Github repositories of the projects.

Install libimobiledevice depenencies:

    sudo apt-get install \
        python3-dev \
        build-essential \
        checkinstall \
        git \
        autoconf \
        automake \
        libtool-bin \
        pkg-config \
        libplist-dev \
        libzip-dev \
        usbmuxd \
        libusbmuxd-dev \
        libssl-dev \
        ifuse

Install libplist

    git clone https://github.com/libimobiledevice/libplist.git
    cd libplist

    ./autogen.sh
    make
    sudo make install

    cd ..
    rm -rf libplist

Install libimobiledevice-glue

    git clone https://github.com/libimobiledevice/libimobiledevice-glue.git
    cd libimobiledevice-glue

    ./autogen.sh
    make
    sudo make install

    cd ..
    rm -rf libimobiledevice-glue

Install libusbmuxd

    git clone https://github.com/libimobiledevice/libusbmuxd.git
    cd libusbmuxd

    ./autogen.sh
    make
    sudo make install

    cd ..
    rm -rf libusbmuxd

Install libimobiledevice

    git clone https://github.com/libimobiledevice/libimobiledevice.git
    cd libimobiledevice

    ./autogen.sh
    make
    sudo make install

    cd ..
    rm -rf libimobiledevice

Install ideviceinstaller

    git clone https://github.com/libimobiledevice/ideviceinstaller.git
    cd ideviceinstaller

    ./autogen.sh
    make
    sudo make install

    cd ..
    rm -rf ideviceinstaller
