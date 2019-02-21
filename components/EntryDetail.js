import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EntryDetail = ({ navigation }) => {
  return (
    <View>
      <Text>Entry detail component for entry {navigation.state.params.entryId}</Text>
    </View>
  );
};

export default EntryDetail;
