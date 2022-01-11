import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail 
        title="Forest" 
        imageSource={require('../../assets/forest.jpg')} 
        score={'9'}/>
      <ImageDetail 
        title="Beach" 
        imageSource={require('../../assets/beach.jpg')} 
        score={'90'}/>
      <ImageDetail 
        title="Mountain" 
        imageSource={require('../../assets/mountain.jpg')} 
        score={'95'}/>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageScreen;
