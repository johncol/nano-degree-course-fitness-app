import { createBottomTabNavigator } from 'react-navigation';
import History from './History';
import AddEntry from './AddEntry';
import { COLOR } from '../utils/colors';

const tabs = {
  History: {
    screen: History,
    navigationOptions: {
      tabBarLabel: 'History'
    }
  },
  AddEntry: {
    screen: AddEntry,
    navigationOptions: {
      tabBarLabel: 'Add Entry'
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

const TabsNavigation = createBottomTabNavigator(tabs, config);

export default TabsNavigation;
