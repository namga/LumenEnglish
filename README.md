# Lumen English Practice

Responsive English-learning app with a mobile-friendly interface, lesson rooms, speaking recorder, settings, progress history, and weekly statistics.

## Build the web app

From this project root:

```bash
node build.mjs
```

Then serve the project over HTTPS or localhost to use the installable PWA features in a browser.

## Build an Android APK

An Android Studio project is included in `android/`. Open that folder in Android Studio, install Android SDK Platform 35, allow Gradle sync, then choose **Build → Build Bundle(s) / APK(s) → Build APK(s)**. The debug APK will be at `android/app/build/outputs/apk/debug/app-debug.apk`.

See [`android/README-ANDROID.md`](android/README-ANDROID.md) for detailed build and update steps. This ZIP contains the Android project source, not a precompiled APK. An Android SDK and Gradle dependency downloads are required to produce the APK.
