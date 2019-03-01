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
  <View style={style.center}>
    <Foundation name="alert" size={50} />
    <Text>
      You denied your location. You can fix this by visiting your settings and enabling
      location services for this app.
    </Text>
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

const PermissionsGranted = ({}) => (
  <View style={style.container}>
    <View style={style.directionContainer}>
      <Text style={style.header}>You're heading</Text>
      <Text style={style.direction}>North</Text>
    </View>
    <View style={style.metricContainer}>
      <LiveMetric metricName="Altitude" value={200} unit="feet" />
      <LiveMetric metricName="Speed" value={300} unit="MPH" />
    </View>
  </View>
);

const LiveMetric = ({ metricName, value, unit }) => (
  <View style={style.metric}>
    <Text style={[style.header, { color: COLOR.white }]}>{metricName}</Text>
    <Text style={[style.subHeader, { color: COLOR.white }]}>
      {value} {unit}
    </Text>
  </View>
);

class Live extends Component {
  state = {
    permissions: Permissions.GRANTED,
    coords: null,
    direction: null
  };

  askForLocationPermission = () => {};

  render() {
    const { permissions } = this.state;

    if (!permissions) {
      return <ActivityIndicator style={style.activityIdicator} />;
    }

    if (permissions === Permissions.UNDETERMINED) {
      return <PermissionsUndetermined onEnableLocation={this.askForLocationPermission} />;
    }

    if (permissions === Permissions.DENIED) {
      return <PermissionsDenied />;
    }

    return <PermissionsGranted />;
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
  },
  directionContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  header: {
    fontSize: 35,
    textAlign: 'center'
  },
  subHeader: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 5
  },
  direction: {
    color: COLOR.purple,
    fontSize: 120,
    textAlign: 'center'
  },
  metricContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: COLOR.purple
  },
  metric: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10
  }
});

export default Live;
