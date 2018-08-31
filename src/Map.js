import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <MapView
        showsUserLocation
        followsUserLocation
        style={styles.map}
        initialRegion={{
          latitude: 40.696011,
          longitude: -73.993286,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    map: {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  position: "absolute"
    },
    container: {
      flex: 1,
      backgroundColor: 'cyan',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  });