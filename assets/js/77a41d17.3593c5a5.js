"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[426],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(i),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return i?n.createElement(h,r(r({ref:t},u),{},{components:i})):n.createElement(h,r({ref:t},u))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=i[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},4500:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=i(7462),o=(i(7294),i(3905));const a={id:"Configuring and running Appium tests on Android devices in Android Studio",title:"Configuring and running Appium tests on Android devices in Android Studio"},r=void 0,s={unversionedId:"Configuring and running Appium tests on Android devices in Android Studio",id:"Configuring and running Appium tests on Android devices in Android Studio",title:"Configuring and running Appium tests on Android devices in Android Studio",description:"Every developer knows that however daunting it might be, testing is a crucial part of building and deploying software. Mobile apps are not in the very least an exception to this rule due to the immense number of devices and operating systems configurations they have to support. Thankfully, there are many tools facilitating the testing process and one of them, Appium, is the main concern of the article.",source:"@site/docs/Configuring_and_running_Appium_tests_on_Android_devices_in_Android_Studio.md",sourceDirName:".",slug:"/Configuring and running Appium tests on Android devices in Android Studio",permalink:"/docs/docs/Configuring and running Appium tests on Android devices in Android Studio",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Configuring_and_running_Appium_tests_on_Android_devices_in_Android_Studio.md",tags:[],version:"current",frontMatter:{id:"Configuring and running Appium tests on Android devices in Android Studio",title:"Configuring and running Appium tests on Android devices in Android Studio"},sidebar:"tutorialSidebar",next:{title:"Parallel testing Android apps using a remote testing platform and Appium",permalink:"/docs/docs/Parallel testing Android apps using a remote testing platform and Appium"}},l={},p=[{value:"What is Appium and why should I care?",id:"what-is-appium-and-why-should-i-care",level:2},{value:"How does Appium work?",id:"how-does-appium-work",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Every developer knows that however daunting it might be, testing is a crucial part of building and deploying software. Mobile apps are not in the very least an exception to this rule due to the immense number of devices and operating systems configurations they have to support. Thankfully, there are many tools facilitating the testing process and one of them, Appium, is the main concern of the article."),(0,o.kt)("h2",{id:"what-is-appium-and-why-should-i-care"},"What is Appium and why should I care?"),(0,o.kt)("p",null,"Appium is an open source automation tool for testing native applications, mobile-web applications and hybrid applications on Android or iOS utilizing Selenium Webdriver technology. Anticipating your questions \u2014 Selenium is a popular web applications testing automation framework."),(0,o.kt)("p",null,"Appium allows you to use your favorite programming language to write automatic instrumentation tests for your mobile applications (and websites but this is outside of the scope of this article). There is cross-platform support, meaning that you can easily write UI tests for both Android and iOS devices for example. Moreover, you can run your tests on many devices simultaneously."),(0,o.kt)("h2",{id:"how-does-appium-work"},"How does Appium work?"),(0,o.kt)("p",null,"Essentially, Appium is just an HTTP server running on Node.js which exposes a REST API and implements Selenium WebDriver. When Appium receives a connection request from the client, it then listens for commands which upon receiving are translated to device-specific commands, sent and executed. Responses from the test devices are forwarded back to the client."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Appium architecture scheme",src:i(2822).Z,width:"1000",height:"532"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How to install and configure Appium for usage in Android Studio")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install Appium dependencies")),(0,o.kt)("p",null,"Appium requires Node.js and Node Package Manager to be installed beforehand. If you have them already installed, it is best to update them to the latest stable version."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install Appium via NPM")),(0,o.kt)("p",null,"Ensure that NPM is installed correctly for command line usage and simply run npm install -g appium ."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Set up Android Studio")),(0,o.kt)("p",null,"Ensure that Android Studio with all its dependencies are installed correctly, with special attention to Java SDK and Android SDK setup. Also verify that ADB is running correctly and that your test device is recognized. Developer Options and USB debugging must be enabled on the device. You might need to restart ADB. For more detailed help visit the official guide at ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/command-line/adb"},"https://developer.android.com/studio/command-line/adb"),"."),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Add environment variables")),(0,o.kt)("p",null,"Appium requires 2 environment variables to be set up in your operating system. Namely:"),(0,o.kt)("p",null,"ANDROID_HOME environmental variable must be added and set to the location of the Android SDK on your workstation."),(0,o.kt)("p",null,"JAVA_HOME environmental variable must be added and set to the location of the Java SDK."),(0,o.kt)("p",null,"Normally, the 2 tools mentioned above are installed with Android Studio and are situated in standardized locations. You can easily Google search the location depending on your operating system and Android Studio installation."),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Verify Appium install")),(0,o.kt)("p",null,"After all the steps above, Appium should be ready to launch with a simple command appium in the command line. Should you encounter any problems, there is a tool for that \u2014 \u201cappium-doctor\u201d which verifies all the Appium dependencies. For more information see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/appium/appium-doctor"},"https://github.com/appium/appium-doctor"),"."),(0,o.kt)("p",null,"For more detailed Appium installation instructions see ",(0,o.kt)("a",{parentName:"p",href:"https://appium.io/docs/en/about-appium/getting-started/?lang=en"},"https://appium.io/docs/en/about-appium/getting-started/?lang=en"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set up Android Studio tests")),(0,o.kt)("p",null,"For running Appium tests I recommend using the TestNG testing library. It is important NOT to use the Android Studio Instrumentation Tests default configuration. TestNG is supported out-of-the-box by Android Studio as well. You just need to add it to the list of dependencies in Gradle or any other dependency management tool you\u2019re using. Grab the latest version from the Maven repository ",(0,o.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.testng/testng"},"https://mvnrepository.com/artifact/org.testng/testng"),". Other significant dependencies you are going to need are as follow:"),(0,o.kt)("p",null,"Appium Java client \u2014 ",(0,o.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.appium/java-client"},"https://mvnrepository.com/artifact/io.appium/java-client")),(0,o.kt)("p",null,"Selenium Java \u2014 ",(0,o.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.seleniumhq.selenium/selenium-java/4.4.0"},"https://mvnrepository.com/artifact/org.seleniumhq.selenium/selenium-java/4.4.0")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create your first test")),(0,o.kt)("p",null,"Create a new subpackage for Appium tests, naming it whatever you like and create a new file within it and paste the following Kotlin code, adding the relevant package xxx.xxx.xxx directive at the top. This is a skeleton for running Appium tests. If you wish to use Java, it should be simple enough to translate this code into Java, either manually or using conversion tools."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import io.appium.java_client.android.AndroidDriver\nimport kotlinx.coroutines.delay\nimport kotlinx.coroutines.runBlocking\nimport org.testng.annotations.BeforeTest\nimport org.openqa.selenium.remote.DesiredCapabilities\nimport org.testng.annotations.AfterTest\nimport org.testng.annotations.Test\nimport java.net.URL\n\nconst val ADB_DEVICE_UID = "adb_device_uid"\nconst val APP_PACKAGE = "xxx.app.package"\nconst val ACTIVITY = "main.app.activity"\nconst val PATH_TO_APK = "path/to/your/apk.apk"\nconst val APPIUM_SERVER_URL = "http://127.0.0.1:4723/wd/hub"\n\nclass AppiumTest {\n    private lateinit var driver: AndroidDriver = null\n\n    @BeforeTest\n    fun setUp() {\n        val desiredCapabilities = DesiredCapabilities()\n        desiredCapabilities.setCapability("platformName", "Android")\n        desiredCapabilities.setCapability("appium:automationName", "UiAutomator2")\n        desiredCapabilities.setCapability("appium:deviceName", ADB_DEVICE_UID)\n        desiredCapabilities.setCapability(MobileCapabilityType.UDID, ADB_DEVICE_UID)\n        desiredCapabilities.setCapability("appium:appPackage", APP_PACKAGE)\n        desiredCapabilities.setCapability("appium:appActivity", ACTIVITY)\n        desiredCapabilities.setCapability("appium:app", PATH_TO_APK)\n        desiredCapabilities.setCapability("appium:newCommandTimeout", 60)\n        desiredCapabilities.setCapability("uiautomator2ServerInstallTimeout", 60000)\n        desiredCapabilities.setCapability("adbExecTimeout", 30000)\n        val remoteUrl = URL(APPIUM_SERVER_URL)\n        driver = AndroidDriver(remoteUrl, desiredCapabilities)\n        driver.setSetting(Setting.WAIT_FOR_IDLE_TIMEOUT, 100)\n    }\n\n    @Test\n    fun sampleTest() {\n        driver.findElement(By.id("element_id"))\n    }\n\n    @AfterTest\n    fun tearDown() {\n        driver.quit()\n    }\n}\n')),(0,o.kt)("p",null,"Obviously, you need to change the constants at the top to match your case."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ADB_DEVICE_UID")," \u2014 the ID of your device connected to Android Debug Bridge. This can be checked using adb devices command."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"APP_PACKAGE")," \u2014 the package name of your Android app \u2014 for example com.example.application"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ACTIVITY")," \u2014 the app Activity that you wish to perform tests on \u2014 you can simply copy the main activity name from your AndroidMainfest.xml . For example .MainActivity"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PATH_TO_APK")," \u2014 path to the .apk file on your workstation that is built by Android Studio. I recommend to manually execute the following steps in Android Studio:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Top-bar menu -> Build -> Clean Project"),(0,o.kt)("li",{parentName:"ul"},"Build -> Rebuild Project")),(0,o.kt)("p",null,"After these steps (each of them takes a while, have patience) your APK should be present in your project files under app/build/outputs/apk/debug/app-debug.apk. (The location might differ due to custom project configurations, Android Studio version and more.) Right-click the file and copy the absolute path to it and paste it. Note that in order to localize it you may have to change the project structure view to \u201cProject\u201d. It might not be visible in the default \u201cAndroid\u201d view."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"APPIUM_SERVER_URL")," \u2014 this is the only constant that you should probably leave as is. If you change Appium configuration to utilize a different port, different API endpoints, or run it on a remote machine with a different IP address then you will need to tune it."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"\u201celement_id\u201d")," \u2014 replace it with the layout xml id of any element that is displayed on the tested activity. Of course the capabilities of Appium go way beyond mere verification of an element being present, this is just a basic demonstration."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configuring TestNg")),(0,o.kt)("p",null,"One of the last steps is to point Android Studio to your newly created TestNg test class. Select the \u201cSelect Run/Debug Configuration\u201d list, then click on \u201cEdit Configurations\u201d. Click the \u201c+\u201d button and select TestNg from the list. Set \u201cTest kind\u201d to \u201cClass\u201d and choose the AppiumTest class file you created in the previous steps. In \u201cUse classpath of module\u201d choose the package within which your test class resides. The rest should be left as default. For reference:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"reference",src:i(2029).Z,width:"1038",height:"693"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run your test!")),(0,o.kt)("p",null,"Ensure that Appium is running in the terminal. If not, launch it with the appium command. In Android Studio, choose your TestNg run configuration and press the Green Play button. Ensure that the target test device is unlocked. Wait for Appium to do its magic and launch the test on your device automatically\u2026"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Troubleshooting")),(0,o.kt)("p",null,"In case of any problems, read the test output, logcat messages and Appium server logs that are displayed in the terminal by default. It might be required to use the infamous \u201cInvalidate caches and restart\u201d option in Android Studio. Follow troubleshooting guides at ",(0,o.kt)("a",{parentName:"p",href:"https://appium.io/docs/en/writing-running-appium/other/troubleshooting/"},"https://appium.io/docs/en/writing-running-appium/other/troubleshooting/"),". A good option to try as well is to download the Appium desktop GUI app and seperately, Appium Inspector. These two tools enable you to configure and launch Appium tests without writing code."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What next?")),(0,o.kt)("p",null,"For writing more sophisticated and interactive instrumentation tests that perform things like clicking on buttons, swiping, double-tapping, etc. the official Appium Java client documentation is the most reliable and obvious source of knowledge \u2014 ",(0,o.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/io.appium/java-client/latest/index.html"},"https://javadoc.io/doc/io.appium/java-client/latest/index.html"),". For more digestible reference, there are some cheatsheets available online, like this one: ",(0,o.kt)("a",{parentName:"p",href:"https://www.automatetheplanet.com/most-complete-appium-kotlin-cheat-sheet/"},"https://www.automatetheplanet.com/most-complete-appium-kotlin-cheat-sheet/"),"."),(0,o.kt)("p",null,"Thank you for bearing with me till the end of this article. I plan to write a follow-up tutorial on setting up Appium tests on a remote battery of devices, so follow me if you would like to see it!"))}c.isMDXComponent=!0},2822:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Appium-Architecture-9f4bf2325310bc10a51ab3e663f16d48.webp"},2029:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/example-04d6dccbcdd4bc23e12d189bac84d252.webp"}}]);