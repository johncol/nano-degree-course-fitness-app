import { createStackNavigator } from 'react-navigation';

import TabsNavigation from './TabsNavigation';
import EntryDetail from './EntryDetail';
import { COLOR } from '../utils/colors';

const Home = 'Home';
const EntryDetail = 'EntryDetail';

export const Screen = {
  Home,
  EntryDetail
};

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
