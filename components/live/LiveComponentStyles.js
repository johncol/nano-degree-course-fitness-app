import { StyleSheet } from 'react-native';

import { COLOR } from './../../utils/colors';

const LiveComponentStyles = StyleSheet.create({
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
  },
  metricName: { color: COLOR.white },
  metricValue: { color: COLOR.white }
});

export default LiveComponentStyles;
