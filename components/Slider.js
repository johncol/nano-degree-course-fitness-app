import React from 'react';
import { View, Text, Slider as ReactNativeSlider } from 'react-native';

const Slider = ({ step, value, onChange, max, unit }) => {
  return (
    <View>
      <ReactNativeSlider
        step={step}
        value={value}
        minimumValue={0}
        maximumValue={max}
        onValueChange={onChange}
      />
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  );
};

export default Slider;
