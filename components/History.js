import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';

import UdaciFitnessCalendar from 'udacifitness-calendar';

import * as API from './../utils/api';
import { ActionCreator } from '../actions';
import { timeToString, getDailyRemainderValue } from '../utils/helpers';
import { COLOR } from '../utils/colors';
import DateHeader from './DateHeader';
import MetricCard from './MetricCard';
import { Screen } from './AppNavigation';

class History extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    const { receiveEntries, addDailyReminderEntry } = this.props;
    API.fetchCalendarResults().then(entries => {
      receiveEntries(entries);
      const key = timeToString();
      if (!entries[key]) {
        addDailyReminderEntry(key);
      }
      this.setState({ loading: false });
    });
  }

  renderItem = ({ today, ...metrics }, formattedDate, key) => {
    if (today) {
      <View style={style.item}>
        <View>
          <DateHeader date={formattedDate} />
          <Text style={style.noDataText}>{today}</Text>
        </View>
      </View>;
    }
    const { navigate } = this.props.navigation;
    return (
      <View style={style.item}>
        <TouchableOpacity onPress={() => navigate(Screen.EntryDetail, { entryId: key })}>
          <MetricCard date={formattedDate} metrics={metrics} />
        </TouchableOpacity>
      </View>
    );
  };

  renderEmptyDate = formattedDate => {
    return (
      <View style={style.item}>
        <DateHeader date={formattedDate} />
        <Text style={style.noDataText}>You did not log any data on this day</Text>
      </View>
    );
  };

  render() {
    const { loading } = this.state;
    if (loading) {
      return <AppLoading />;
    }

    const { entries } = this.props;
    return (
      <UdaciFitnessCalendar
        items={entries}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
      />
    );
  }
}

const style = StyleSheet.create({
  item: {
    backgroundColor: COLOR.white,
    borderRadius: 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
  noDataText: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20
  }
});

const stateToProps = state => ({
  entries: state
});

const dispatchToProps = dispatch => ({
  receiveEntries: entries => {
    dispatch(ActionCreator.receiveEntries(entries));
  },
  addDailyReminderEntry: key => {
    dispatch(
      ActionCreator.addEntry({
        [key]: getDailyRemainderValue()
      })
    );
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(History);
