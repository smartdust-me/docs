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

- Installed **Android SDK + ADB**
- Installed **Java JDK 21**
- An Android project with Espresso configured

---

## Setup

Before continuing, complete the [Android Test Setup](./android-test-setup.md).

It covers connecting a SmartDust Android device through Remote Debug and deploying the Dust application used in this example.

---
## Step 1: Prepare Espresso

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

## Step 2: Write Your Test

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

## ▶️ Step 3: Run Your Tests

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
