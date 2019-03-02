import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';

import LiveComponentStyles from './LiveComponentStyles';
import LiveMetric from './LiveMetric';

class LocationInfo extends Component {
  state = {
    animations: {
      bounceValue: new Animated.Value(1)
    }
  };

  triggerAnimation = () => {
    const { bounceValue } = this.state.animations;
    Animated.sequence([
      Animated.timing(bounceValue, { toValue: 1.1, duration: 200 }),
      Animated.timing(bounceValue, { toValue: 1.0, friction: 4 })
    ]).start();
  };

  componentDidUpdate(prevProps) {
    const directionChanged = this.props.direction !== prevProps.direction;
    if (directionChanged) {
      this.triggerAnimation();
    }
  }

  calculateAltitude = () => {
    const { coords } = this.props;
    return Math.round(coords.altitude * 3.2808);
  };

  calculateSpeed = () => {
    const { coords } = this.props;
    return (coords.speed * 2.2369).toFixed(1);
  };

  render() {
    const { bounceValue } = this.state.animations;
    const { direction } = this.props;
    const altitude = this.calculateAltitude();
    const speed = this.calculateSpeed();
    return (
      <View style={LiveComponentStyles.container}>
        <View style={LiveComponentStyles.directionContainer}>
          <Text style={LiveComponentStyles.header}>You're heading</Text>
          <DirectionText direction={direction} scaleAnimation={bounceValue} />
        </View>
        <View style={LiveComponentStyles.metricContainer}>
          <LiveMetric metricName="Altitude" value={altitude} unit="feet" />
          <LiveMetric metricName="Speed" value={speed} unit="MPH" />
        </View>
      </View>
    );
  }
}

const DirectionText = ({ direction, scaleAnimation }) => {
  const style = [
    LiveComponentStyles.direction,
    { transform: [{ scale: scaleAnimation }] }
  ];
  return <Animated.Text style={style}>{direction}</Animated.Text>;
};

export default LocationInfo;
