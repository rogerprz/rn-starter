import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  
  return (
    <View>
      <Button title="Add Color" 
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList 
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return <View style={ { height: 100, width: 100, backgroundColor: randomRgb() }}/>
        }}
      /> 
    </View>
    )
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${blue}, ${green})`;
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ColorScreen;