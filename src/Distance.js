import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Distance extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.value}>{this.props.value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: 'transparent',
    width: '100%',
    alignItems: 'center'
    //   justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    paddingTop: 10,
  },
  value: {
    fontSize: 36,
    fontWeight: '200',
    paddingBottom: 10,
  }
});
