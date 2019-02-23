import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class EntryDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { entryId: title } = navigation.state.params;
    return { title };
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Entry detail component for entry {navigation.state.params.entryId}</Text>
      </View>
    );
  }
}

export default EntryDetail;
