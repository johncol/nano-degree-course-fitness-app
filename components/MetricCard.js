import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DateHeader from './DateHeader';
import { getMetricsMetaInfo } from './../utils/helpers';
import { COLOR } from './../utils/colors';

const MetricCard = ({ date, metrics }) => {
  const metricNames = Object.keys(metrics);
  return (
    <View>
      {date && <DateHeader date={date} />}
      {metricNames.map(metric => {
        const { getIcon, displayName, unit } = getMetricsMetaInfo(metric);
        return (
          <View style={style.metric} key={metric}>
            {getIcon()}
            <View>
              <Text style={style.metricName}>{displayName}</Text>
              <Text style={style.metricUnit}>
                {metrics[metric]} {unit}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const style = StyleSheet.create({
  metric: {
    flexDirection: 'row',
    marginTop: 12
  },
  metricName: {
    fontSize: 20
  },
  metricUnit: {
    fontSize: 16,
    color: COLOR.gray
  }
});

export default MetricCard;
