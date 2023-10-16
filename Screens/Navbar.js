import { useState } from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';

export default function Navbar() {
    return (
      <View>
          
          <View style={styles.header}>
            <View>
              <Pressable style={styles.firstBtn}>
                  <Text style={{position:'absolute',top:-13, left:1,fontSize:40, opacity:.4}}>←</Text>
              </Pressable>
            </View>

            <View style={{flexWrap:'wrap', flexDirection:'row', marginRight:'20%'}}>
              <View style={{marginRight:'6%'}}>
                <Image source={require('./imgs/robotbg.png')}/>
                <Image style={styles.robotPic} source={require('./imgs/robot.png')}/>
              </View>
              <View>
                <Text style={styles.chatbotName}>Matchy Matchy</Text>
                <Text style={styles.activeIcon}> </Text>
                <Text style={styles.activeTxt}>Always Active</Text>
              </View>
            </View>
            
            <Pressable style={styles.paramBtn}>
              <Text style={styles.paramTxt}>...</Text>
            </Pressable>
          </View>

      </View>
  );
} 

const styles = StyleSheet.create({
    header:  {
      marginTop:'20%',
      marginLeft:'5%',
      flexWrap:'wrap', 
      flexDirection:'row'
    },

    firstBtn: {
      borderWidth:1,
      borderColor:'#d9d9d9',
      borderRadius:100,
      fontSize:20,
      height:45,
      width:45,
      marginRight:'9%'
    },

    robotPic: {
      position:'absolute',
      left:11.5,
      top:10
    },

    activeIcon: {
      borderRadius:100,
      backgroundColor:'#7DDE86',
      height:8,
      width:8,
      marginTop:'7%'
    },

    chatbotName: {
      fontSize: 15,
      fontWeight:'bold'
    },

    activeTxt: {
      fontSize:12,
      fontWeight:'500',
      position:'absolute',
      top:'54%',
      left:'15%'
    },

    paramBtn: {
      borderWidth:1,
      borderColor:'#d9d9d9',
      borderRadius:100,
      fontSize:20,
      height:45,
      width:45,
    },

    paramTxt: {
      fontSize:30,
      opacity:.3,
      fontWeight:'bold',
      position:'absolute',
      left:8,
      top:-7
    }
});

