import React from 'react';
import { View, Text } from 'react-native';

import LiveComponentStyles from './LiveComponentStyles';

const LiveMetric = ({ metricName, value, unit }) => (
  <View style={LiveComponentStyles.metric}>
    <Text style={[LiveComponentStyles.header, LiveComponentStyles.metricName]}>
      {metricName}
    </Text>
    <Text style={[LiveComponentStyles.subHeader, LiveComponentStyles.metricValue]}>
      {value} {unit}
    </Text>
  </View>
);
export default LiveMetric;
