import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import reducers from './reducers';

import AddEntry from './components/AddEntry';
import FlexboxExamples from './samples/FlexboxExamples';

const store = createStore(reducers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <FlexboxExamples />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center'
  }
});
