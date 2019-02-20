import React from 'react';
import { View, StatusBar as ReactNativeStatusBar, StyleSheet } from 'react-native';
import { Constants } from 'expo';

const StatusBar = props => {
  return (
    <View style={style.container}>
      <ReactNativeStatusBar translucent {...props} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: props.backgroundColor,
    height: Constants.statusBarHeight
  }
});

export default StatusBar;
