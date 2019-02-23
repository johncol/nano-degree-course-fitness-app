import React from 'react';
import { View, StatusBar as ReactNativeStatusBar } from 'react-native';
import { Constants } from 'expo';

const StatusBar = props => {
  return (
    <View
      style={{
        backgroundColor: props.backgroundColor,
        height: Constants.statusBarHeight
      }}
    >
      <ReactNativeStatusBar translucent {...props} />
    </View>
  );
};

export default StatusBar;
