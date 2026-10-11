# Lumen English Practice — Android APK project

This folder wraps the existing Lumen web app in a native Android WebView shell. It enables JavaScript and local storage, serves bundled assets through AndroidX WebKit's secure `appassets.androidplatform.net` origin, and requests microphone permission only when the app's recording feature asks for it.

## Build a debug APK in Android Studio

1. Install Android Studio (current stable) and an Android SDK Platform 35.
2. Extract the full ZIP and open the `android/` folder as a project.
3. Allow Gradle sync to download the Android Gradle Plugin and AndroidX WebKit dependency. Use JDK 17 (Android Studio's bundled JBR is suitable).
4. Choose **Build → Build Bundle(s) / APK(s) → Build APK(s)**.
5. Android Studio creates the debug APK at `android/app/build/outputs/apk/debug/app-debug.apk`.
6. Transfer that APK to the Android phone and allow installation from that source when prompted.

## Build from a terminal

From the `android/` folder, with Android SDK Platform 35 installed and Gradle 8.9 available:

```bash
gradle assembleDebug
```

The APK is written to `app/build/outputs/apk/debug/app-debug.apk`.

## Update the web app before building

Edit `../src/template.html` and/or `../src/data.json`, then from the project root run:

```bash
node build.mjs
cp index.html android/app/src/main/assets/www/index.html
```

Then rebuild the Android project. The Android app currently uses a local WebView shell; it does not require hosting the learning content online. Microphone recording still depends on the Android WebView version and device permission behavior, so test it on the target device.

## Release APK

A release APK must be signed with your own private signing key. Do not share the keystore or passwords. The debug APK is suitable for local testing, not Play Store publication.
