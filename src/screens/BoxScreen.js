import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}> Box Screen</Text>
      <Text style={styles.textOneStyle}> Child 1</Text>
      <Text style={styles.textTwoStyle}> Child 2</Text>
      <Text style={styles.textThreeStyle}> Child 3 </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    justifyContent: 'space-around'
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'red',
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red'
  },
  textTwoStyle: {
    borderWidth: 3, 
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'green'
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
  }
});

export default BoxScreen