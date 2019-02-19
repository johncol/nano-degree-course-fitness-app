import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { COLOR } from '../utils/colors';
import MetricInfo from './MetricInfo';

const StepperButtonType = {
  MINUS: 'minus',
  PLUS: 'plus'
};

const StepperButton = ({ type, onPress }) => (
  <TouchableOpacity onPress={onPress} style={style.button}>
    <FontAwesome name={type} size={30} color={COLOR.white} />
  </TouchableOpacity>
);

const Stepper = ({ unit, value, onIncrement, onDecrement }) => {
  return (
    <View style={style.row}>
      <View style={style.row}>
        <StepperButton type={StepperButtonType.MINUS} onPress={onDecrement} />
        <StepperButton type={StepperButtonType.PLUS} onPress={onIncrement} />
      </View>
      <MetricInfo value={value} unit={unit} />
    </View>
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: COLOR.purple,
    padding: 10,
    marginRight: 10
  },
  row: {
    flexDirection: 'row',
    flex: 1
  }
});

export default Stepper;
