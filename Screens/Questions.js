
import { useState } from 'react';
import {StyleSheet,View, TextInput, Image, Text, Pressable, TouchableOpacity} from 'react-native';



export default function Questions(props) {
  
    console.log(props)
    return (
      <View>

          <View style={qstStyle.qstContainer}>
            <Text style={qstStyle.qstTxt}>{props.question}</Text>
          </View>
        

      </View>
  );
} 

const qstStyle = StyleSheet.create({
  qstContainer : {
    position:'relative',
      backgroundColor: '#0070F0',
      borderRadius:30,
      marginLeft:'5%',
      width:'75%',
      marginBottom:'3%',
      marginTop:'5%'
  },

  qstTxt : {
      color:'white',
      fontSize:17,
      paddingTop:10,
      paddingBottom:10,
      paddingLeft:20,
  },
})


