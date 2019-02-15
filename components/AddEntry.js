import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { getMetricsMetaInfo } from '../src/js/utils/helpers';

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

  render() {
    return <View>{getMetricsMetaInfo('swim').getIcon()}</View>;
  }
}

export default AddEntry;
