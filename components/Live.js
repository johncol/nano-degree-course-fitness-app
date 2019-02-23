import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

import { Permissions } from './../constants/Permissions';

class Live extends Component {
  state = {
    permissions: null,
    coords: null,
    direction: null
  };

  render() {
    const { permissions } = this.state;
    if (!permissions) {
      return <ActivityIndicator style={style.activityIdicator} />;
    }

    if (permissions === Permissions.DENIED) {
      return (
        <View>
          <Text>{Permissions.DENIED}</Text>
        </View>
      );
    }

    if (permissions === Permissions.UNDETERMINED) {
      return (
        <View>
          <Text>{Permissions.UNDETERMINED}</Text>
        </View>
      );
    }

    return (
      <View>
        <Text>{Permissions.GRANTED}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  activityIdicator: {
    marginTop: 30
  }
});

export default Live;
