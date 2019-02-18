import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import TextButton from './TextButton';

const AlreadyLogged = ({ onReset }) => {
  return (
    <View>
      <Ionicons name="ios-fitness" size={100} />
      <Text>You already logged your information for today</Text>
      <TextButton onPress={onReset}>Reset</TextButton>
    </View>
  );
};

export default AlreadyLogged;
