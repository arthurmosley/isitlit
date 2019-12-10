# Isitlit Mobile

This directory contains the source files for the React Native application that builds to iPhone and Android devices.

## Installation

Before you do anything else, you need to install React Native and make sure you either the Android SDK or the Apple Developer Kit installed on your machine. (One of these emulators is necessary to test the mobile applications.) Provided one of these installations are available, React Native will find and utilize them.

Then, you must install all necessary dependencies for this project by running:

```
npm install
```

in this directory.

## Developing

During development, React Native runs a hot reload server that automatically responds to changes in the file system. To start this server, you run:

```
react-native run-ios
```

or

```
react-native run-android
```

depending on which emulator you won't to target.

## Directory structure

The project is roughly organized into the following structure

* `./screens/` contains components which represent a screen on the mobile application
* `./components/` contains components which are reusable pieces of the user interface
* `./api.js` interface with our API service
* `./storage.js`  interfaces with the local storage API on the mobile device
* `./geo.js` interfaces with the geolocation API on the mobile device
* `./index.js` and `./App.js` serve as the entry point for the application
  - Typically you will never touch `./index.js`. General configuration should be done in `./App.js`.

## Issues

To file an issue with this project, refer to the main Issues page on Github.
