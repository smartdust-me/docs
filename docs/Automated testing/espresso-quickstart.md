---
id: android-espresso-quickstart
title: Espresso
---

## ☕ Espresso Quickstart

Espresso is Android's native UI testing framework for writing reliable UI tests directly against Android applications. It integrates with Android instrumentation tests and can run on real devices connected through ADB.

Espresso documentation:  
`https://developer.android.com/training/testing/espresso`

## Prerequisites

Before you begin, ensure you have the following installed:

- A **SmartDust** account
- Your **SmartDust device remote debug key**
- Installed **Android SDK + ADB**
- Installed **Java JDK 21**
- An Android project with Espresso configured
- Optional: your `.apk` or app build process ready

---

## 🔌 Step 1: Connect to Device

1. Navigate to Dashboard
2. Click **Remote debug** in the device card (top-left corner or settings)
3. Enable remote ADB access

![Smart Dust lab remote debug](/img/remote_debug.png)

4. Copy the generated ADB command, e.g.:

```bash
adb connect 123.45.67.89.smartdust.me:5555
```

5. Paste into your terminal and run it
6. Back in the dashboard, accept the ADB key request (if no popup, toggle remote debug off/on)

Verify your device is connected:

```bash
adb devices
```

Expected output:

```text
List of devices attached
123.45.67.89.smartdust.me:5555   device
```

If it says `offline`, retry the connection.

---

## Step 2: Upload your app to the device.

We will upload based on the Dust app: `https://github.com/damiant/dust`.

So, firstly build the app, for example, using:

```bash
bunx ng build
```

Then deploy the app using:

```bash
npx cap run android
```

You should see the app on your device.

![Smart Dust lab apk upload](/img/apk_upload.png)

If not, check your terminal for potential issues.

---

## Step 3: Prepare Espresso

Dust already contains Android instrumentation test support.

Make sure the Android module contains:

```gradle
testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
```

and the Espresso dependency:

```gradle
androidTestImplementation "androidx.test.espresso:espresso-core:$androidxEspressoCoreVersion"
```

For Dust, the Android application package is:

```text
nexus.concepts.dust
```

and the main activity is:

```text
nexus.concepts.dust.MainActivity
```

---

## Step 4: Write Your Test

Create the test directory:

```bash
mkdir -p app/src/androidTest/java/nexus/concepts/dust
```

Create:

```text
app/src/androidTest/java/nexus/concepts/dust/DustEspressoTest.java
```

Add the following test:

```java
package nexus.concepts.dust;

import android.webkit.WebView;

import androidx.test.ext.junit.rules.ActivityScenarioRule;

import org.junit.Rule;
import org.junit.Test;

import static androidx.test.espresso.Espresso.onView;
import static androidx.test.espresso.assertion.ViewAssertions.matches;
import static androidx.test.espresso.matcher.ViewMatchers.isAssignableFrom;
import static androidx.test.espresso.matcher.ViewMatchers.isDisplayed;

public class DustEspressoTest {

    @Rule
    public ActivityScenarioRule<MainActivity> activityRule =
        new ActivityScenarioRule<>(MainActivity.class);

    @Test
    public void dustAppLaunchesSuccessfully() throws Exception {
        System.out.println("✓ Launch app \"nexus.concepts.dust\"");

        onView(isAssignableFrom(WebView.class))
            .check(matches(isDisplayed()));

        System.out.println("✓ Assert Dust WebView is visible");

        Thread.sleep(5000);

        System.out.println("✓ Espresso test passed");
    }
}
```

If your project contains an old generated example test such as:

```text
app/src/androidTest/java/com/getcapacitor/myapp/ExampleInstrumentedTest.java
```

remove it before running the test:

```bash
find app/src/androidTest -type f -name 'ExampleInstrumentedTest.java' -delete
```

---

## ▶️ Step 5: Run Your Tests

Make sure the SmartDust device is still connected:

```bash
adb devices
```

Set the required Android and Java environment:

```bash
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
export ANDROID_HOME=$HOME/Android/Sdk
```

Run only the Dust Espresso test using the SmartDust device serial:

```bash
ANDROID_SERIAL=123.45.67.89.smartdust.me:5555 \
./gradlew connectedDebugAndroidTest \
-Pandroid.testInstrumentationRunnerArguments.class=nexus.concepts.dust.DustEspressoTest \
--console=plain
```

Expected result:

```text
Starting 1 tests on Android device

Tests 1/1 completed. (0 skipped) (0 failed)

BUILD SUCCESSFUL
```


![Smart Dust lab Espresso test](/img/espresso_test.png)
