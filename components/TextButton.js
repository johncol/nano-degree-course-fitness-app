import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { COLOR } from '../utils/colors';

const TextButton = ({ onPress, children, buttonStyle, buttonTextStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[style.button, buttonStyle]}>
      <Text style={[style.buttonText, buttonTextStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: COLOR.purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: COLOR.white,
    fontSize: 22,
    textAlign: 'center'
  }
});

export default TextButton;
