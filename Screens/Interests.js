import { useState } from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import Items from './Items';

export default function App() {
    interestArray = ["TV show",
    "Music",
    "Books",
    "Sports",
    "Shooping",
    "Art",
    "Movies",
    "Games",
    "Drinks",
    "Social N.",
    "Family",
    "Pets",
    "Politics",
    "Dance",
    "Eating",
    "Travel"]

    return (
      <View>

        <View style={{flexDirection:'row', marginTop:'20%', marginLeft:'7%'}}>
          <View><Text style={{fontSize:25, fontWeight:'bold'}}>My interests</Text></View>
          <View><Text style={{fontSize:15, fontWeight:'bold', marginTop:'4%', marginLeft:'52%', color:'#00CDBD'}}>STEP 3/3</Text></View>
        </View>

        <View style={{marginTop:'8%',marginLeft:'7%',flexWrap:'wrap', flexDirection:'row'}}>
          {
            interestArray.map(i => (<Items key={i} interest={i}/>))
          }
        </View>

        <View style={styles.btnView}>
          <Pressable style={styles.signUpBtn}>
              <Text style={styles.signUpTxt}>Sign up</Text>
          </Pressable>
        </View>

      </View>
  );
} 

const styles = StyleSheet.create({

  btnView : {
    justifyContent:'center',
    alignItems:'center'
  },

  signUpBtn:{
      marginTop:'40%',
      backgroundColor:'#e6fffd',
      borderRadius:20,
      paddingTop:20,
      paddingBottom:20,
      paddingRight:150,
      paddingLeft:150
  },
  signUpTxt:{
    fontSize:20,
    fontWeight:'bold',
    color:'#00CDBD',
    textAlign:'center'
  }
});

