import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import reducers from './reducers';

import AppNavigation from './components/AppNavigation';
import StatusBar from './components/StatusBar';
import { COLOR } from './utils/colors';

const store = createStore(reducers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar backgroundColor={COLOR.purple} barStyle="light-content" />
          <AppNavigation />
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
