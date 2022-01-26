import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ColorCounter = ({color}) => {
  return (
    <View>
      <Text style={styles.text}>{color}</Text>
      <Button title={`Increase ${color}`} />
      <Button title={`Decrease ${color}`} />

    </View>
  )
};

const styles = StyleSheet.create({
   text: {
    fontSize: 30
  }
});

export default ColorCounter;
