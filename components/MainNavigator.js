import { createStackNavigator } from 'react-navigation';

import TabsNavigator from './TabsNavigator';
import EntryDetail from './EntryDetail';
import { Screens } from './../constants/Screens';
import { COLOR } from '../utils/colors';

const defaultNavigationOptions = {
  headerTintColor: COLOR.white,
  headerStyle: {
    backgroundColor: COLOR.purple
  }
};

const MainNavigator = createStackNavigator({
  [Screens.Home]: {
    screen: TabsNavigator,
    navigationOptions: defaultNavigationOptions
  },
  [Screens.EntryDetail]: {
    screen: EntryDetail,
    navigationOptions: defaultNavigationOptions
  }
});

export default MainNavigator;
