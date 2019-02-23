import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import MetricCard from './MetricCard';
import TextButton from './TextButton';
import { COLOR } from './../utils/colors';
import * as API from './../utils/api';
import { ActionCreator } from '../actions';
import { getDailyRemainderValue, timeToString } from '../utils/helpers';

class EntryDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { entryId: title } = navigation.state.params;
    return { title };
  };

  reset = () => {
    const { entryId, resetEntry, navigation } = this.props;
    API.removeEntry(entryId);
    resetEntry(entryId);
    navigation.goBack();
  };

  shouldComponentUpdate() {
    const { metrics } = this.props;
    return metrics && !metrics.today;
  }

  render() {
    const { metrics } = this.props;
    return (
      <View style={style.container}>
        <MetricCard metrics={metrics} />
        <TextButton onPress={this.reset}>Reset</TextButton>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    padding: 15,
    justifyContent: 'space-between'
  }
});

const stateToProps = (state, props) => {
  const { navigation } = props;
  const { entryId } = navigation.state.params;
  const metrics = state[entryId];
  return {
    navigation,
    entryId,
    metrics
  };
};
const dispatchToProps = dispatch => ({
  resetEntry: key => {
    const todayKey = timeToString();
    const entryForToday = key === todayKey;
    const entry = entryForToday ? getDailyRemainderValue() : null;
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
)(EntryDetail);
