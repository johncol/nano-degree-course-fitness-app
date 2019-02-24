import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

import { Permissions } from './../constants/Permissions';

const PermissionsDenied = () => (
  <View>
    <Text>{Permissions.DENIED}</Text>
  </View>
);

const PermissionsUndetermined = () => (
  <View>
    <Text>{Permissions.UNDETERMINED}</Text>
  </View>
);

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
      return <PermissionsDenied />;
    }
    if (permissions === Permissions.UNDETERMINED) {
      return <PermissionsUndetermined />;
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
