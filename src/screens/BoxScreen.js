import React from 'react';
import { StyleSheet, View } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle}/> 
      <View style={styles.viewTwoStyle}/> 
      <View style={styles.viewThreeStyle}/> 
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'orange',
    height: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewOneStyle: {
    backgroundColor: 'red',
    height: 100,
    width: 100
  },
  viewTwoStyle: {
    backgroundColor: 'green',
    marginTop: 100,
    height: 100,
    width: 100
  },
  viewThreeStyle: {
    backgroundColor: 'blue',
    height: 100,
    width: 100
  }
});

export default BoxScreen