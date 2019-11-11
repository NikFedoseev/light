import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCog, faHeart} from '@fortawesome/free-solid-svg-icons';
import LightButton from '../components/LightButton';

import {MAIN, SETTINGS} from './routeNames';

import Main from '../screens/main';
import Settings from '../screens/settings';

const TabNavigator = createBottomTabNavigator(
  {
    [MAIN]: {
      screen: Main,
      navigationOptions: {
        tabBarIcon: ({focused, horizontal, tintColor}) => (
          <FontAwesomeIcon icon={faHeart} size={24} color={tintColor} />
        ),
      },
    },
    Light: {
      screen: () => null,
      navigationOptions: ({navigation}) => ({
        tabBarIcon: <LightButton />,
      }),
      params: {navigationDisabled: true},
    },
    [SETTINGS]: {
      screen: Settings,
      navigationOptions: {
        tabBarIcon: ({focused, horizontal, tintColor}) => (
          <FontAwesomeIcon icon={faCog} size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false, // hide labels
      activeTintColor: '#4f6de5', // active icon color
      inactiveTintColor: '#586589', // inactive icon color
      style: {
        border: 'none',
        backgroundColor: '#f3f6ff', // TabBar background
      },
      tabStyle: {},
    },
  },
);

const AppContainer = createAppContainer(TabNavigator);
export default AppContainer;
