import { createStackNavigator } from 'react-navigation';

import TabsNavigation from './TabsNavigation';
import EntryDetail from './EntryDetail';
import { Screen } from './../constants/Screens';
import { COLOR } from '../utils/colors';

const defaultNavigationOptions = {
  headerTintColor: COLOR.white,
  headerStyle: {
    backgroundColor: COLOR.purple
  }
};

const AppNavigation = createStackNavigator({
  [Screen.Home]: {
    screen: TabsNavigation,
    navigationOptions: defaultNavigationOptions
  },
  [Screen.EntryDetail]: {
    screen: EntryDetail,
    navigationOptions: defaultNavigationOptions
  }
});

export default AppNavigation;
