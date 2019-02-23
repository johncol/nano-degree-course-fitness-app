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
import { Screen } from './../constants/Screens';

const TouchableMetricCard = ({ navigate, entryId, date, metrics }) => (
  <View style={style.item}>
    <TouchableOpacity onPress={() => navigate(Screen.EntryDetail, { entryId })}>
      <MetricCard date={date} metrics={metrics} />
    </TouchableOpacity>
  </View>
);

const DontForgetToLogCard = ({ date, reminder }) => (
  <View style={style.item}>
    <View>
      <DateHeader date={date} />
      <Text style={style.noDataText}>{reminder}</Text>
    </View>
  </View>
);

const NoDataCard = ({ date }) => (
  <View style={style.item}>
    <DateHeader date={date} />
    <Text style={style.noDataText}>You did not log any data on this day</Text>
  </View>
);

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
    if (Boolean(today)) {
      return <DontForgetToLogCard date={formattedDate} reminder={today} />;
    }

    return (
      <TouchableMetricCard
        navigate={this.props.navigation.navigate}
        entryId={key}
        date={formattedDate}
        metrics={metrics}
      />
    );
  };

  renderEmptyDate = formattedDate => {
    return <NoDataCard date={formattedDate} />;
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
