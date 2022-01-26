import React from 'react';
import { StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  return (
    <View>
      <ColorCounter color="Red"/>
      <ColorCounter color="Green"/>
      <ColorCounter color="Blue"/>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default SquareScreen;
