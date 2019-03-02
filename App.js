import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';

import { createStore } from 'redux';
import reducers from './reducers';

import MainNavigator from './components/MainNavigator';
import StatusBar from './components/StatusBar';
import { COLOR } from './utils/colors';
import { scheduleNextNotification } from './utils/notification';

const store = createStore(reducers);

const MainApp = createAppContainer(MainNavigator);

export default class App extends React.Component {
  componentDidMount() {
    scheduleNextNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar backgroundColor={COLOR.purple} barStyle="light-content" />
          <MainApp />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
