import { createStackNavigator } from 'react-navigation';

import TabsNavigation from './TabsNavigation';
import EntryDetail from './EntryDetail';
import { Screen } from './../constants/Screens';
import { COLOR } from '../utils/colors';

const AppNavigation = createStackNavigator({
  [Screen.Home]: {
    screen: TabsNavigation
  },
  [Screen.EntryDetail]: {
    screen: EntryDetail,
    navigationOptions: {
      headerTintColor: COLOR.white,
      headerStyle: {
        backgroundColor: COLOR.purple
      }
    }
  }
});

export default AppNavigation;
