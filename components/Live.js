import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Location, Permissions } from 'expo';

import { PermissionStatus } from './../constants/PermissionStatus';
import { LocationSettings } from './../constants/Location';
import { calculateDirection } from './../utils/helpers';
import LiveComponentStyles from './live/LiveComponentStyles';
import PermissionsDenied from './live/PermissionsDenied';
import PermissionsUndetermined from './live/PermissionsUndetermined';
import PermissionsGranted from './live/PermissionsGranted';

class Live extends Component {
  state = {
    permissionStatus: null,
    coords: null,
    direction: null
  };

  updatePermissionStatusAndWatchLocationIfGranted = ({ status: permissionStatus }) => {
    if (permissionStatus === PermissionStatus.GRANTED) {
      return this.watchLocation();
    }
    this.setState({ permissionStatus });
  };

  componentDidMount() {
    Permissions.getAsync(Permissions.LOCATION)
      .then(this.updatePermissionStatusAndWatchLocationIfGranted)
      .catch(error => {
        console.warn('Error getting location: ', error);
        this.setState({ permissionStatus: PermissionStatus.UNDETERMINED });
      });
  }

  askForLocationPermission = () => {
    Permissions.askAsync(Permissions.LOCATION)
      .then(this.updatePermissionStatusAndWatchLocationIfGranted)
      .catch(error => {
        console.warn('Error asking location permissions: ', error);
      });
  };

  watchLocation = () => {
    Location.watchPositionAsync(LocationSettings, ({ coords }) => {
      const direction = calculateDirection(coords.heading);
      const permissionStatus = PermissionStatus.GRANTED;

      this.setState({
        coords,
        direction,
        permissionStatus
      });
    });
  };

  render() {
    const { permissionStatus, coords, direction } = this.state;

    if (!permissionStatus) {
      return <ActivityIndicator style={LiveComponentStyles.activityIdicator} />;
    }

    if (permissionStatus === PermissionStatus.UNDETERMINED) {
      return <PermissionsUndetermined onEnableLocation={this.askForLocationPermission} />;
    }

    if (permissionStatus === PermissionStatus.DENIED) {
      return <PermissionsDenied onEnableLocation={this.askForLocationPermission} />;
    }

    return <PermissionsGranted coords={coords} direction={direction} />;
  }
}

export default Live;
