import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import * as API from './../utils/api';
import {
  timeToString,
  getMetricsMetaInfo,
  MetricType,
  getDailyRemainderValue
} from '../utils/helpers';
import Slider from './Slider';
import Stepper from './Stepper';
import DateHeader from './DateHeader';
import AlreadyLogged from './AlreadyLogged';
import TextButton from './TextButton';
import { ActionCreator } from '../actions';
import { COLOR } from '../utils/colors';

const initialState = {
  run: 0,
  bike: 0,
  swim: 0,
  sleep: 0,
  eat: 0
};

const MetricsList = ({ metrics, renderMetric }) => {
  const metricsInfo = getMetricsMetaInfo();
  return (
    <View style={style.metrics}>
      {metrics.map(metric => renderMetric(metricsInfo, metric))}
    </View>
  );
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
      <View key={metric} style={style.metric}>
        {getIcon()}
        {this.getMetricComponent(metricsInfo, metric)}
      </View>
    );
  };

  submit = () => {
    const key = timeToString();
    const entry = this.state;
    API.sumbitEntry(key, entry);
    this.props.addEntry(key, entry);
    this.props.navigation.goBack();
  };

  reset = () => {
    const key = timeToString();
    API.removeEntry(key);
    this.props.resetEntry(key);
    this.setState({ ...initialState });
  };

  render() {
    const { alreadyLogged } = this.props;
    if (alreadyLogged) {
      return <AlreadyLogged onReset={this.reset} />;
    }

    return (
      <View style={style.container}>
        <DateHeader date={new Date().toLocaleDateString()} />
        <MetricsList metrics={Object.keys(this.state)} renderMetric={this.renderMetric} />
        <TextButton
          onPress={this.submit}
          buttonStyle={style.submitButton}
          buttonTextStyle={style.submitButtonText}
        >
          Submit
        </TextButton>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLOR.white,
    justifyContent: 'space-between'
  },
  submitButton: {
    alignSelf: 'flex-end'
  },
  metric: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  metrics: {
    justifyContent: 'space-between',
    flex: 1,
    paddingTop: 30,
    paddingBottom: 30
  }
});

const stateToProps = (state, { navigation }) => {
  const key = timeToString();
  const alreadyLogged = state[key] && !state[key].today;
  return {
    navigation,
    alreadyLogged
  };
};

const dispatchToProps = dispatch => ({
  addEntry: (key, entry) => {
    dispatch(
      ActionCreator.addEntry({
        [key]: entry
      })
    );
  },
  resetEntry: key => {
    const entry = getDailyRemainderValue();
    dispatch(
      ActionCreator.addEntry({
        [key]: entry
      })
    );
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(AddEntry);
