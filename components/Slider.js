import React from 'react';
import { View, Slider as ReactNativeSlider, StyleSheet } from 'react-native';

import MetricInfo from './MetricInfo';

const Slider = ({ step, value, onChange, max, unit }) => {
  return (
    <View style={style.row}>
      <ReactNativeSlider
        step={step}
        value={value}
        minimumValue={0}
        maximumValue={max}
        onValueChange={onChange}
        style={style.slider}
      />
      <MetricInfo value={value} unit={unit} />
    </View>
  );
};

const style = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1
  },
  slider: {
    flex: 1
  }
});

export default Slider;
