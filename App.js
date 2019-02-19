import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import reducers from './reducers';

import History from './components/History';

const store = createStore(reducers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <View style={{ height: 20 }} />
          <History />
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
