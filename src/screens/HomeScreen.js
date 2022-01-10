import React from 'react';
import { StyleSheet, Text } from 'react-native';

const HomeScreen = () => {
  return <Text style={styles.text}>Hello Home Screen!</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
