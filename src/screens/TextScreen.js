import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('')
  return (
    <View>
      <Text> Enter Password:</Text>
      <TextInput 
      style={styles.input}
      autoCapitalize='none'
      autoCorrect={false}
      value={password}
      onChangeText = {(newValue)=> setPassword(newValue)}
      />
      { password.length < 5 ? <Text>Password is less than 5 chars</Text> : null }
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen