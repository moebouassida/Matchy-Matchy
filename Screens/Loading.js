
import { useState } from 'react';
import {StyleSheet,View, TextInput, Image, Text, Pressable, TouchableOpacity} from 'react-native';
import Input from './Input';
import Navbar from './Navbar';
import Video from 'react-native-video';


export default function Loading() {
 
    return (
      <View style={imgStyle.loadingContainer}>
        <Image style={imgStyle.img} source={require('./imgs/loading.gif')}/>
        <Text style={imgStyle.loadingTxt}>Now Loading...</Text>
      </View>
  );
} 
const imgStyle = StyleSheet.create({
  loadingContainer: {
    flex:1,
    alignItems:'center',
    marginTop:'50%'
  },
  
  img: {
    height:150,
    width:150
  },

  loadingTxt: {
    fontSize:20,
    fontWeight:'bold'
  }
})

