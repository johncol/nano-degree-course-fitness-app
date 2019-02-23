import { createStackNavigator } from 'react-navigation';

import TabsNavigation from './TabsNavigation';
import EntryDetail from './EntryDetail';
import { Screens } from './../constants/Screens';
import { COLOR } from '../utils/colors';

const defaultNavigationOptions = {
  headerTintColor: COLOR.white,
  headerStyle: {
    backgroundColor: COLOR.purple
  }
};

const AppNavigation = createStackNavigator({
  [Screens.Home]: {
    screen: TabsNavigation,
    navigationOptions: defaultNavigationOptions
  },
  [Screens.EntryDetail]: {
    screen: EntryDetail,
    navigationOptions: defaultNavigationOptions
  }
});

export default AppNavigation;
