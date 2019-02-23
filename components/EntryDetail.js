import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { COLOR } from './../utils/colors';
import MetricCard from './MetricCard';

class EntryDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { entryId: title } = navigation.state.params;
    return { title };
  };

  render() {
    const { metrics, entryId } = this.props;
    return (
      <View style={style.container}>
        <Text>Entry detail component for entry {entryId}</Text>
        <MetricCard metrics={metrics} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    padding: 15
  }
});

const stateToProps = (state, props) => {
  const { entryId } = props.navigation.state.params;
  const metrics = state[entryId];
  return {
    entryId,
    metrics
  };
};
const dispatchToProps = dispatch => ({});

export default connect(
  stateToProps,
  dispatchToProps
)(EntryDetail);
