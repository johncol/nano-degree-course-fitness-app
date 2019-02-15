import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { getMetricsMetaInfo, MetricType } from '../src/js/utils/helpers';
import Slider from './Slider';
import Stepper from './Stepper';

class AddEntry extends Component {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0
  };

  increment = metric => {
    const { max, step } = getMetricsMetaInfo(metric);
    this.setState(state => {
      const count = state[metric] + step;
      return {
        [metric]: count > max ? max : count
      };
    });
  };

  decrement = metric => {
    const { step } = getMetricsMetaInfo(metric);
    this.setState(state => {
      const count = state[metric] - step;
      return {
        [metric]: count < 0 ? 0 : count
      };
    });
  };

  slide = (metric, value) => {
    this.setState({
      [metric]: value
    });
  };

  getMetricComponent = (metricsInfo, metric) => {
    const { type, ...metricInfo } = metricsInfo[metric];
    const metricValue = this.state[metric];
    return type === MetricType.SLIDER ? (
      <Slider
        value={metricValue}
        onChange={value => this.slide(metric, value)}
        {...metricInfo}
      />
    ) : (
      <Stepper
        value={metricValue}
        onIncrement={() => this.increment(metric)}
        onDecrement={() => this.decrement(metric)}
        {...metricInfo}
      />
    );
  };

  renderMetric = (metricsInfo, metric) => {
    const { getIcon } = metricsInfo[metric];
    return (
      <View key={metric}>
        {getIcon()}
        {this.getMetricComponent(metricsInfo, metric)}
      </View>
    );
  };

  render() {
    const metrics = Object.keys(this.state);
    const metricsInfo = getMetricsMetaInfo();
    return <View>{metrics.map(metric => this.renderMetric(metricsInfo, metric))}</View>;
  }
}

export default AddEntry;
