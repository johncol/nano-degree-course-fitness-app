import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { timeToString, getMetricsMetaInfo, MetricType } from '../utils/helpers';
import Slider from './Slider';
import Stepper from './Stepper';
import DateHeader from './DateHeader';
import AlreadyLogged from './AlreadyLogged';
import TextButton from './TextButton';

const initialState = {
  run: 0,
  bike: 0,
  swim: 0,
  sleep: 0,
  eat: 0
};

class AddEntry extends Component {
  state = { ...initialState };

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

  submit = () => {
    const key = timeToString();
    const entry = this.state;
    console.log('TODO: handle submit for new entry');
    console.log('key: ', key);
    console.log('entry: ', entry);
    this.setState({ ...initialState });
  };

  reset = () => {
    console.log('TODO: handle reset');
    this.setState({ ...initialState });
  };

  render() {
    const { alreadyLogged } = this.props;
    if (alreadyLogged) {
      return <AlreadyLogged />;
    }

    const metrics = Object.keys(this.state);
    const metricsInfo = getMetricsMetaInfo();
    return (
      <View>
        <DateHeader date={new Date().toLocaleDateString()} />
        <View>{metrics.map(metric => this.renderMetric(metricsInfo, metric))}</View>
        <TextButton onPress={this.submit}>Submit</TextButton>
      </View>
    );
  }
}

export default AddEntry;
