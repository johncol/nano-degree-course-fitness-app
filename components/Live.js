import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Foundation from '@expo/vector-icons/Foundation';

import { Permissions } from './../constants/Permissions';
import { COLOR } from './../utils/colors';

const PermissionsDenied = () => (
  <View>
    <Text>{Permissions.DENIED}</Text>
  </View>
);

const PermissionsUndetermined = ({ onEnableLocation: askForLocationPermission }) => (
  <View style={style.center}>
    <Foundation name="alert" size={50} />
    <Text>You need to enable location services for this app.</Text>
    <TouchableOpacity style={style.button} onPress={askForLocationPermission}>
      <Text style={style.buttonText}>Enable</Text>
    </TouchableOpacity>
  </View>
);

class Live extends Component {
  state = {
    permissions: Permissions.UNDETERMINED,
    coords: null,
    direction: null
  };

  askForLocationPermission = () => {};

  render() {
    const { permissions } = this.state;

    if (!permissions) {
      return <ActivityIndicator style={style.activityIdicator} />;
    }

    if (permissions === Permissions.DENIED) {
      return <PermissionsDenied />;
    }

    if (permissions === Permissions.UNDETERMINED) {
      return <PermissionsUndetermined onEnableLocation={this.askForLocationPermission} />;
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
  },
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30
  },
  button: {
    padding: 10,
    margin: 20,
    backgroundColor: COLOR.purple,
    alignSelf: 'center',
    borderRadius: 5
  },
  buttonText: {
    color: COLOR.white,
    fontSize: 20
  }
});

export default Live;
