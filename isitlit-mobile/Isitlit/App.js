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

const tabs = {
  LitMap: { screen: LitMapScreen },
  LitPoints: { screen: LitPointsScreen },
};

const tabLabels = {
  LitMap: 'Map',
  LitPoints: 'Saved',
};

const tabSources = {
  LitMap: mapIcon,
  LitPoints: listIcon,
};

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
