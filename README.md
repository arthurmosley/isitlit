# Is It Lit? :fire: ...yeahnah

## Is It Lit? is a crowdsourced mobile platform that gives users insight into the population traffic of geographical locations based on the density of users at notable points of interest nearby.

## Getting Started

### Prerequisites

- [Git]
- [NodeJS]
- [React Native] (https://facebook.github.io/react-native/docs/getting-started)
- [Android Studio] (If you plan on running the android version)

### Developing

1. Run `npm install` to install server dependencies.

2. Navigate to the mobile folder: isitlit/isitlit-mobile/Isitlit.

3. Run `react-native create` to start an instance of the react-native server.

4. Run an emulator (android, ios, or both).

5. In a new terminal, run `react-native run-android` or `react-native run-ios` to build and deploy the app.

6. In a new terminal, navigate to the api folder isitlit/isilit-api and run `node index.js` to start a node server.

### Code Navigation

#### isitlit-api

- Contains the code necessary to startup an instance of the node server
- Node server is used for temporary storage of location data and points of interest

#### isitlit-mobile

- Contains the application code for the Android & IOS versions of the app
- Components
  - LitMapView: contains the definition and themes for the LitMap
  - LitMapButton: Defines the dimensions and touch funcionality of the LitMapButton
  - LitMapInstructions: Defines the user instructions for the app that appear on the first installation 
