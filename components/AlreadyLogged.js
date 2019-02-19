import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import TextButton from './TextButton';

const AlreadyLogged = ({ onReset }) => {
  return (
    <View style={style.container}>
      <Ionicons name="ios-fitness" size={100} />
      <Text style={style.text}>You already logged your information for today</Text>
      <TextButton onPress={onReset} buttonStyle={style.button}>
        Reset
      </TextButton>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    marginTop: 20
  },
  button: {
    marginTop: 30
  }
});

export default AlreadyLogged;
