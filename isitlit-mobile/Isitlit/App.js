/**
 * This file is the entry component of the entire application. Modifications to
 * the root-element of the app should be done here rather than in `index.js`.
 */

import 'react-native-gesture-handler';
import React from 'react';
import { Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Settings from './screens/SettingsScreen';
import LitMapScreen from './screens/LitMapScreen';
import LitPointsScreen from './screens/LitPointsScreen';

const tabs = {
  //Settings: { screen: Settings },
  LitMap: { screen: LitMapScreen },
  LitPoints: { screen: LitPointsScreen },
};

const tabLabels = {
  Settings: 'Settings',
  LitMap: 'Map',
  LitPoints: 'Saved',
};

const tabIcons = {
  Settings: 'ios-settings',
  LitMap: 'ios-navigate',
  LitPoints: 'ios-star',
};

const TabNavigator = createBottomTabNavigator(
  tabs,
  {
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state;
      const Label = ({ tintColor }) => (
        <Text style={{ color: tintColor }}>{tabLabels[routeName]}</Text>
      );
      /*
      const Icon = ({ tintColor }) => (
        <Ionicons name={tabIcons[routeName]} size={24} color={tintColor} />
      );*/
      return {
        tabBarLabel: Label,
        tabBarIcon: null,
        //tabBarIcon: Icon,
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
