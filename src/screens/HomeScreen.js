import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello Home Screen!</Text>
      <Button
        onPress={() => navigation.navigate('Components')} 
        title="Components" 
      />
       <Button
        onPress={() => navigation.navigate('Home')} 
        title="Home" 
      />
       <Button
        onPress={() => navigation.navigate('List')} 
        title="Go To List" 
      />
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>List Opacity</Text>
        </TouchableOpacity >
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
