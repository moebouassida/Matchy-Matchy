
import { useState } from 'react';
import {StyleSheet,View, TextInput, Image, Text, Pressable, TouchableOpacity} from 'react-native';



export default function Answers(props) {
  
    
    return (
      <View>
          <View style={answrStyle.answrContainer}>
            <Text style={answrStyle.answrTxt}>{props.answer}</Text>
          </View>
      </View>
  );
} 

const answrStyle = StyleSheet.create({
    answrContainer : {
        backgroundColor: '#F2F4F5',
        borderRadius:30,
        marginLeft:'20%',
        width:'75%',
    },

    answrTxt : {
        color:'black',
        fontSize:17,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
    },

    bg: {
        marginRight:'5%'
    },

    robot: {
        position:'absolute',
        left:10,
        top:10
    },
})



