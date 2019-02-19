import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const MetricInfo = ({ value, unit }) => {
  return (
    <View style={style.container}>
      <Text style={style.value}>{value}</Text>
      <Text style={style.unit}>{unit}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  value: {
    fontSize: 25
  },
  unit: {
    fontSize: 15
  }
});

export default MetricInfo;
