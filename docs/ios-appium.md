# iOS CI-CD pipeline with Appium 
Simple example of what's needed to set up and run a CI-CD pipeline of an iOS application. <br/>
The pipeline involves: 
- building the app from source,
- connecting to iOS devices on a Smartdust Lab instance,
- installing the built app package on the connected test devices,
- running an Appium server on Linux and connecting it to the iPhones,
- running an Appium test on test devices using a standard webdriverio Javascript client.

All project files are available in a Github [repository](https://github.com/jordus100/ios-example)

## Prerequisites
- Mac OS machine 
- Apple Developer account (active)
- Linux machine with preferably Ubuntu (technically you could do everything on the Mac, but we split responsibilities in this example)
- Being comfortable using Unix-like OS (command line, resolving issues)

# Setting up iOS project on Mac (XCode, Fastlane)
First, you need to make sure your project in XCode builds and runs on simulators without any issues.

Then, you need to use the `sd_remoteios` tool from Smartdust to connect to iOS devices. 
Follow the instructions from [its documentation](https://smartdust.atlassian.net/wiki/spaces/SMARTDUST/pages/955187201/Remote+iOS+Device)
:::info
You only need to connect to ONE connection URL and you will be instantly connected to every iOS device connected to the same provider.
:::
You should be able to select iOS devices from the Smartdust Lab instance in XCode to run your app on them.
Check if that works. You need to resolve any code signing issues that may arise. 
**Run your application on each and every device that you want to use for testing.**
For simplicity's sake I used only automatic code signing and development builds in this example.
You might be in need of a more advanced setup.

### Fastlane
Fastlane is a widely popular tool facilitating iOS building and deployment processes. 
Download and get it running with the help of the [official docs](https://docs.fastlane.tools/)
You need to install Ruby for Fastlane to work and please use Ruby version manager, [rbenv](https://github.com/rbenv/rbenv)
for that. It will make things much easier down the road.
I use it only for building the app, nothing fancy. Here is my configuration file (*fastfile*):

    default_platform(:ios)

    platform :ios do
      desc "Simple build"
      lane :build do
        unlock_keychain(
          path:"~/Library/Keychains/login.keychain-db",
          password:"smart1986")
        gym(
          xcargs:"-allowProvisioningUpdates",
          configuration:"Debug",
          export_method:"development")
      end
    end

As you can see, I define only one *lane*.
The `unlock_keychain` action is necessary for running the builds via an SSH connection.
Otherwise, the certificates needed for codesigning are locked and building fails.
Your keychain `path` may be different, you need to look where the keychain with your codesigning certificates is.
You can view the certificates via the "Keychain" application.

The `gym` command just builds the app. 

The goal here is to be able to build your app via an SSH connection and running only one command in your project directory:

    bundle exec fastlane build
where `build` is the lane name I chose.

After everything, upload your project to an online Git repository, if you haven't already.

# Setting up Jenkins server
I use a Linux machine for this part, however a Mac or even Windows should work too - you may need to make some adjustments.
Download and run the all-popular CI-CD automation software - [Jenkins](https://www.jenkins.io/).
After you have the server up and running, head to the web interface dashboard. 

### Adding the Mac machine as a slave node
You need to add the Mac machine that we set up in the earlier step as a Jenkins slave node.
Go to `Manage Jenkins -> Nodes -> New Node` and go through the wizard.
It's pretty straighforward given you have an SSH server already set up on your Mac. 
If in trouble, there is plenty of online tutorials on how to do that.
The goal is to have your Mac machine displayed as available in the `Nodes` list on Jenkins.

### Creating a pipeline
Now go ahead and create a Jenkins pipeline through the web interface - `Dashboard -> New item -> Pipeline`
The configuration should be standard. 
Set the Pipeline definition to `Pipeline script from SCM.` Enter your project repository credentials.
Put `Jekinsfile` in the `Script path` option.
My config looks like this:
    ![](/img/ios-appium/pipeline-config.png)

# Setting up CI-CD tools
We need a computer to connect to iOS devices on Smartdust Lab, install the application on them and run Appium test.
We could set up another Jenkins slave node, but for simplicity I decided to go against best practices and use the "built-in"
Jenkins node - the same machine on which the server is running.

### Libimobiledevice tools
[libimobiledevice](https://libimobiledevice.org/) is a library and tool suite designed to enable communication with iOS
devices on any operating system. Unfortunately, we need the latest versions and that can only be done by building from source.
Following instructions will do it on Ubuntu:

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


### Smartdust CLI client
Download, install and test run the Smartdust CLI client according to our [tutorial](https://smartdust.atlassian.net/wiki/spaces/SMARTDUST/pages/967049221/CLI+client).
It will enable Jenkins to connect to headlessly connect to test devices.

You should be able to list connected iOS devices by calling `idevice_id -l`.
After that, check if `ideviceinstaller` works by installing your .ipa app on an iPhone connected via the Smartdust CLI client.

### Node.js (for Appium)
We will need to get Node installed for running the Appium server (and client in our case).
Please use Node Version Manager [nvm](https://github.com/nvm-sh/nvm) for this. I recommend Node LTS version 18.16.1.

### go-ios toolchain
Another iOS toolchain that we'll use: [repo](https://github.com/danielpaulus/go-ios). Install it via npm:
    
    npm install -g go-ios

# Creating pipeline script
Create a file called `Jenkinsfile` in the home directory of your project.
This is what I've come up with:

    pipeline {
        agent none
        stages {
            stage('Build app') {
                agent { label 'mac' }
                environment {
                    PATH="/Users/smartdust/.rbenv/shims:/usr/bin:/bin:/usr/sbin:/sbin"
                }
                steps {
                    checkout scm
                    sh 'gem install bundler'
                    sh 'bundle install'
                    sh 'bundle exec fastlane build'
                    stash includes: 'Kalculator.ipa', name: 'BUILT_IPA'
                }
            }
            stage('Connect to iPhones') {
                agent { label 'inbuilt' }
                environment {
                    SD_URL = 'https://staging.smartdust.me'
                    SD_TOKEN = 'a534c80c572442689dd560c4bc34921ce441781b34434f5bb02b062424a89fee'
                }
                steps {
                    sh 'smartdust-client disconnect --all'
                    sh 'smartdust-client connect --all -f platform:iOS'
                }
            }
            stage('Install app on iPhones') {
                agent { label 'inbuilt' }
                environment {
                    APP_PATH = 'Kalculator.ipa'
                }
                steps {
                    unstash 'BUILT_IPA'
                    sh 'ideviceinstaller -u c81fadec2a2affb46093bb3036cf1f49db2dc187 install $APP_PATH'
                    sh 'ideviceinstaller -u 25c925bfbb0ed425fa7c4e30d62b6be82fe15298 install $APP_PATH'
                }
            }
            stage('Appium test') {
                agent { label 'inbuilt' }
                environment {
                    PATH = '/home/smartdust/.nvm/versions/node/v18.16.1/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin'
                    SD_URL = 'https://staging.smartdust.me'
                    SD_TOKEN = 'a534c80c572442689dd560c4bc34921ce441781b34434f5bb02b062424a89fee'
                }
                steps {
                    dir('client') {
                        sh 'npm install'
                        sh 'npx appium &'
                        sh 'ios --udid=25c925bfbb0ed425fa7c4e30d62b6be82fe15298 forward 7777 8100&'
                        sh 'ios --udid=c81fadec2a2affb46093bb3036cf1f49db2dc187 forward 7778 8100&'
                        sh 'sleep 10'
                        sh 'node test.js'
                    }
                    sh 'smartdust-client disconnect --all'
                }
            }
        }

    }

- Change the agent labels to match your Jenkins nodes config
- The PATH environment variables being set uses a bit dirty trick that points to a version of Ruby and Node installed by `rbenv` and `nvm`.

# Appium test 
The last stage of the pipeline above involves an Appium test.
It's a Node project in a subfolder "client" in my project repository. You can go ahead and copy it.
It declares dependencies on Appium and XCUITest iOS driver.

### How it works
Appium server communicates with iOS devices using a proxy app called [WebDriverAgent](https://github.com/facebookarchive/WebDriverAgent).
It runs an infinite XC Test (iOS test framework) case on the device and listens to WebDriver commands in W3C specification format.
Then it translates WebDriver commands to native XC Test commands and runs them on the device.
To be able to use multiple devices which all listen on the same WDA port, we need to forward them to different ports.
This is executed via the go-ios tool in lines 34 and 35 of my Jenkinsfile.
I recommend to go through the whole pipeline manually to make sure everything works.

### Appium client code

    const wdio = require("webdriverio");

    const sharedCapabilities = {
        'appium:automationName': 'XCUITest',
        'platformName': 'iOS',
        'appium:usePrebuiltWDA': true,
        //startIWDP: true,
    }
    const devicesCapabilities = [{
        'appium:udid': '25c925bfbb0ed425fa7c4e30d62b6be82fe15298',
        'appium:webDriverAgentUrl': 'http://localhost:7777'
    }, {
        'appium:udid': 'c81fadec2a2affb46093bb3036cf1f49db2dc187',
        'appium:webDriverAgentUrl': 'http://localhost:7778'
    }]
    const opts = {
        path: '/',
        port: 4723,
        //maxInstances: 1,
    };

    async function main() {
        clients = []
        for(i=0; i<devicesCapabilities.length; i++){
            opts.capabilities = {...sharedCapabilities, ...devicesCapabilities[i]}
            clients[i] = await wdio.remote(opts)
        }
        for (const client of clients) {
            await client.activateApp("jog.Kalculator")
            const elem = await client.$('~clearButton')
            await elem.click()
            client.pause(2000)
            await elem.click()
            await client.deleteSession()
        }
    }

    main();
