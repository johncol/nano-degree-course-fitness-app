import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { getMetricsMetaInfo } from '../src/js/utils/helpers';

class AddEntry extends Component {
  render() {
    return <View>{getMetricsMetaInfo('swim').getIcon()}</View>;
  }
}

export default AddEntry;
