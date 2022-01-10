import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', number:'1', age: '20' },
    { name: 'Friend #2', number:'2', age: '21' },
    { name: 'Friend #3', number:'3', age: '40'},
    { name: 'Friend #4', number:'4', age: '42'},
    { name: 'Friend #5', number:'5', age: '30'},
    { name: 'Friend #6', number:'6', age: '70'},
    { name: 'Friend #7', number:'7', age: '80'},
    { name: 'Friend #8', number:'8', age: '90'}
  ];
  
  return (
    <FlatList 
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>
      }}
      />
    )
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;