import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLOR } from '../utils/colors';

const DateHeader = ({ date }) => {
  return <Text style={style.text}>{date}</Text>;
};

const style = StyleSheet.create({
  text: {
    color: COLOR.purple,
    fontSize: 35,
    paddingTop: 10
  }
});

export default DateHeader;
