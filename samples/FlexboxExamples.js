import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

class FlexboxExamples extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, { flexGrow: 1 }]} />
        <View style={[styles.box, { flexGrow: 2 }]} />
        <View style={[styles.box, { flexGrow: 1 }]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: '#e76e63',
    margin: 10
  }
});

export default FlexboxExamples;
