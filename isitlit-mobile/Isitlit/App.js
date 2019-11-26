/**
 * This file is the entry component of the entire application. Modifications to
 * the root-element of the app should be done here rather than in `index.js`.
 */

import 'react-native-gesture-handler';
import React from 'react';
import { Text, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import LitMapScreen from './screens/LitMapScreen';
import LitPointsScreen from './screens/LitPointsScreen';

import mapIcon from './assets/map-icon.png';
import listIcon from './assets/list-icon.png';

// Assocation between route names and route screens.
const tabs = {
  LitMap: { screen: LitMapScreen },
  LitPoints: { screen: LitPointsScreen },
};

// Associate between route names and their label on the tab bar.
const tabLabels = {
  LitMap: 'Map',
  LitPoints: 'Saved',
};

// Association betwene route names and their icon on the tab bar.
const tabSources = {
  LitMap: mapIcon,
  LitPoints: listIcon,
};

// Navigator item controls the tab bar at the bottom of the application.
const TabNavigator = createBottomTabNavigator(
  tabs,
  {
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state;
      const Label = ({ tintColor }) => (
        <Text style={{ color: tintColor }}>{tabLabels[routeName]}</Text>
      );
      const Icon = () => (
        <Image
          source={tabSources[routeName]}
          style={{
            width: 24,
            height: 24,
          }}
        />
      );
      return {
        tabBarLabel: Label,
        tabBarIcon: Icon,
      };
    },
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

const App = createAppContainer(TabNavigator);

export default App;
