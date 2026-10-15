---
id: android-jenkins-quickstart
title: Jenkins
---

## 🧩 Jenkins Quickstart

Jenkins is an automation server commonly used for CI/CD pipelines. With SmartDust, Jenkins can connect to a remote Android device through ADB, install the application and test APKs, and run Android instrumentation tests such as Espresso.

Jenkins documentation:  
`https://www.jenkins.io/doc/`

## Prerequisites

Before you begin, ensure you have the following installed:

- **Jenkins**
- Installed **Android SDK + ADB**
- Installed **Java JDK 21**
- Dust source code: `https://github.com/damiant/dust`

---
## SmartDust Device Setup

Enable SmartDust Remote Debug and obtain the ADB endpoint as described in
[Android Test Setup](./android-test-setup.md#step-1-connect-to-device).

Keep the generated SmartDust ADB address. It will be used in the Jenkins job configuration below.

---

## Step 1: Start Jenkins

Start Jenkins, for example using the Jenkins WAR file:

```bash
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
export PATH="$JAVA_HOME/bin:$PATH"

java -jar jenkins.war --httpPort=8080
```

Open Jenkins in your browser:

```text
http://localhost:8080
```

If this is your first Jenkins launch, complete the setup wizard and install the suggested plugins.

---

## Step 2: Create a Jenkins Job

In Jenkins:

1. Click **New Item**
2. Enter a job name, for example:

```text
SmartDust-Espresso
```

3. Select **Freestyle project**
4. Click **OK**
5. Scroll to **Build Steps**
6. Click **Add build step**
7. Select **Execute shell**

---

## Step 3: Configure the SmartDust Test

Paste the following script into the **Execute shell** build step:

```bash
set -e

export HOME=/home/u
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
export ANDROID_HOME=/home/u/Android/Sdk
export PATH="$JAVA_HOME/bin:$ANDROID_HOME/platform-tools:$PATH"

SMARTDUST_SERIAL="123.45.67.89.smartdust.me:5555"

echo "=== Connect to SmartDust ==="
adb connect "$SMARTDUST_SERIAL" || true
adb -s "$SMARTDUST_SERIAL" get-state

cd /home/u/Documents/dust-main/android

echo "=== Build app and Espresso test APK ==="
./gradlew assembleDebug assembleDebugAndroidTest --console=plain

echo "=== Install Dust ==="
adb -s "$SMARTDUST_SERIAL" install -r \
  app/build/outputs/apk/debug/app-debug.apk

echo "=== Install Espresso test APK ==="
adb -s "$SMARTDUST_SERIAL" install -r -t \
  app/build/outputs/apk/androidTest/debug/app-debug-androidTest.apk

echo "=== Run Espresso test ==="
adb -s "$SMARTDUST_SERIAL" shell am instrument -w -r \
  -e class nexus.concepts.dust.DustEspressoTest \
  nexus.concepts.dust.test/androidx.test.runner.AndroidJUnitRunner

echo "=== SmartDust Espresso test passed ==="
```

Replace:

```text
123.45.67.89.smartdust.me:5555
```

with the current SmartDust remote ADB address shown in the dashboard.

This job:

- Connects Jenkins to the SmartDust device
- Builds the Dust debug APK
- Builds the Espresso test APK
- Installs both APKs on the SmartDust device
- Runs the `DustEspressoTest` instrumentation test

---

## ▶️ Step 4: Run the Jenkins Test

Click:

```text
Build Now
```

Then open:

```text
Build #1 → Console Output
```

Expected output should include:

```text
=== Connect to SmartDust ===
device

=== Install Dust ===
Success

=== Install Espresso test APK ===
Success

=== Run Espresso test ===

OK (1 test)

=== SmartDust Espresso test passed ===

Finished: SUCCESS
```

![Smart Dust lab Jenkins test](/img/jenkins_test.png)
