import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ComponentsScreen = () => {
  const greeting = 'Hello there!';
  
  return (
    <View>
      <Text style={styles.textStyle}>Components Screen</Text>
      <Text>{greeting}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  } 
});

export default ComponentsScreen