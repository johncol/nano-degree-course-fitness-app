import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';

const StepperButtonType = {
  MINUS: 'minus',
  PLUS: 'plus'
};

const StepperButton = ({ type, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <FontAwesome name={type} size={30} color="black" />
  </TouchableOpacity>
);

const Stepper = ({ unit, value, onIncrement, onDecrement }) => {
  return (
    <View>
      <View>
        <StepperButton type={StepperButtonType.MINUS} onPress={onDecrement} />
        <StepperButton type={StepperButtonType.PLUS} onPress={onIncrement} />
      </View>
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  );
};

export default Stepper;
