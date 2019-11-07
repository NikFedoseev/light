import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import React from 'react';
import {Text} from 'react-native';
import LightButton from '../components/LightButton';

import {MAIN} from './routeNames';
import {SETTINGS} from './routeNames';

import Main from '../screens/main';
import Settings from '../screens/settings';

// const RootNavigation = createStackNavigator({
//   [MAIN]: {
//     screen: Main,
//     navigationOptions: {
//       header: null,
//     },
//   },
//   [SETTINGS]: {
//     screen: Settings,
//     navigationOptions: {
//       header: null,
//     },
//   },
// });

const TabNavigator = createBottomTabNavigator(
  {
    [MAIN]: {
      screen: Main,
      navigationOptions: {
        tabBarIcon: () => <Text>Main</Text>,
      },
    },
    Light: {
      screen: () => null, // Empty screen
      navigationOptions: () => ({
        tabBarIcon: <LightButton />, // Plus button component
      }),
    },
    [SETTINGS]: {
      screen: Settings,
      navigationOptions: {
        tabBarIcon: () => <Text>Settings</Text>,
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false, // hide labels
      activeTintColor: '#F8F8F8', // active icon color
      inactiveTintColor: '#586589', // inactive icon color
      style: {
        border: 'none',
        backgroundColor: '#f2f6ff', // TabBar background
      },
    },
  },
);

const AppContainer = createAppContainer(TabNavigator);
export default AppContainer;
