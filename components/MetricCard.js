import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DateHeader from './DateHeader';
import { getMetricsMetaInfo } from './../utils/helpers';
import { COLOR } from './../utils/colors';

const NoMetricsAvailable = () => (
  <View>
    <Text>No metrics found for this day</Text>
  </View>
);

const MetricItem = ({ metrics, metric }) => {
  const { getIcon, displayName, unit } = getMetricsMetaInfo(metric);
  const value = metrics[metric];
  return (
    <View style={style.metric}>
      {getIcon()}
      <View>
        <Text style={style.metricName}>{displayName}</Text>
        <Text style={style.metricValue}>
          {value} {unit}
        </Text>
      </View>
    </View>
  );
};

const MetricCard = ({ date, metrics }) => {
  const noMetricsAvailable = !metrics || metrics.today;
  if (noMetricsAvailable) {
    return <NoMetricsAvailable />;
  }

  const metricNames = Object.keys(metrics);
  return (
    <View>
      {date && <DateHeader date={date} />}
      {metricNames.map(metric => (
        <MetricItem key={metric} metric={metric} metrics={metrics} />
      ))}
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
  metricValue: {
    fontSize: 16,
    color: COLOR.gray
  }
});

export default MetricCard;
