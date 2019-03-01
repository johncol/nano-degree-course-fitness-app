import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Foundation from '@expo/vector-icons/Foundation';

import LiveComponentStyles from './LiveComponentStyles';

const PermissionsDenied = ({ onEnableLocation: askForLocationPermission }) => (
  <View style={LiveComponentStyles.center}>
    <Foundation name="alert" size={50} />
    <Text>
      You denied your location. You can fix this by visiting your settings and enabling
      location services for this app.
    </Text>
    <TouchableOpacity
      style={LiveComponentStyles.button}
      onPress={askForLocationPermission}
    >
      <Text style={LiveComponentStyles.buttonText}>Enable</Text>
    </TouchableOpacity>
  </View>
);

export default PermissionsDenied;
