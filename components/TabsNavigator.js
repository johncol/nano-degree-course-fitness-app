import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';

import History from './History';
import AddEntry from './AddEntry';
import Live from './Live';
import { COLOR } from '../utils/colors';

const tabs = {
  History: {
    screen: History,
    navigationOptions: {
      tabBarLabel: 'History',
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name="event-note" color={tintColor} size={25} />
      )
    }
  },
  AddEntry: {
    screen: AddEntry,
    navigationOptions: {
      tabBarLabel: 'Add Entry',
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name="playlist-add" color={tintColor} size={25} />
      )
    }
  },
  Live: {
    screen: Live,
    navigationOptions: {
      tabBarLabel: 'Live',
      tabBarIcon: ({ tintColor }) => (
        <SimpleLineIcons name="speedometer" color={tintColor} size={25} />
      )
    }
  }
};

const config = {
  tabBarOptions: {
    activeTintColor: COLOR.white,
    style: {
      height: 56,
      backgroundColor: COLOR.purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowradius: 6,
      shadowOpacity: 1
    }
  }
};

const TabsNavigator = createBottomTabNavigator(tabs, config);
TabsNavigator.navigationOptions = () => {
  return { title: 'Entries' };
};

export default TabsNavigator;
