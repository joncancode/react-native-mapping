import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Map from './src/Map';
import Distance from './src/Distance';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Map />
        <View style={styles.distance}>
        <Distance title="Distance" value="0 miles" />
        <Distance title="Speed" value="100mph" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
    alignItems: 'center',
    justifyContent: 'center'
  },
  distance: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%'
  }
});
