import React from 'react';
import { View, Text } from 'react-native';

import LiveComponentStyles from './LiveComponentStyles';
import LiveMetric from './LiveMetric';

const PermissionsGranted = ({ coords, direction }) => {
  const altitude = Math.round(coords.altitude * 3.2808);
  const speed = (coords.speed * 2.2369).toFixed(1);
  return (
    <View style={LiveComponentStyles.container}>
      <View style={LiveComponentStyles.directionContainer}>
        <Text style={LiveComponentStyles.header}>You're heading</Text>
        <Text style={LiveComponentStyles.direction}>{direction}</Text>
      </View>
      <View style={LiveComponentStyles.metricContainer}>
        <LiveMetric metricName="Altitude" value={altitude} unit="feet" />
        <LiveMetric metricName="Speed" value={speed} unit="MPH" />
      </View>
    </View>
  );
};
export default PermissionsGranted;
