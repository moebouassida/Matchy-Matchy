
import { useState } from 'react';
import {StyleSheet,View, TextInput, Image, Text, Pressable, TouchableOpacity} from 'react-native';
import Questions from './Questions';
import Answers from './Answers';


export default function Input(props) {

    const [input, setInput] = useState("")
    const [rep, setRep] = useState("")
    var reps = []

    const dayArr = ["SUN", "MON", "THU", "WED", "TUE", "FRI","SAT"]

    const ques = ["Hello there!",
    "I am an AI-powered bot from Matchy Matchy Startup. My purpose is to assist you in finding the clothes you are looking for! How can I assist you today?",
    "Can you please mention the type of t-shirt that you are looking for ?"]

    var date = dayArr[new Date().getDay()]
    var hours = new Date().getHours().toString().length > 1 ? 
              new Date().getHours().toString() :
             "0" + new Date().getHours().toString() //To get the Current Hours
    
    
    var min = new Date().getMinutes().toString().length > 1 ? 
              new Date().getMinutes().toString() :
             "0" + new Date().getMinutes().toString() 
    
    var fullDate = date + " " +hours + ":" + min

    const [i, setI] = useState(null)
    
    return (
      <View>
          <View style={rsltStyle.rsltContainer}>
            <View style={rsltStyle.timeContainer}>
              <Text style={rsltStyle.timeTxt}>{fullDate}</Text>
            </View>
          </View>

        <View style={styles.convoContainer}>
         <Questions question={'Hello'}/>
         <Answers answer={ques[0]}/>
         <Questions question={'Who are you?'}/>
         <Answers answer={ques[1]}/>
         <Questions question={'I am looking to buy a t-shirt'}/>
         <Answers answer={ques[2]}/>
        </View>

        <View style={{marginTop:'30%'}}>
          <View style={{flexWrap:'wrap', flexDirection:'row'}}>
            
            <View style={styles.inputContainer}>
              <TextInput placeholder="Type a message..." value={input} onChangeText={text =>{setInput(text);}}/>  
            </View>

            <Image style={styles.galPic} source={require('./imgs/gal.png')}/>

            <View style={styles.sendImgs}>        
                <Pressable onPress={() => {setRep(input); setInput("") }}>
                  <Image source={require('./imgs/sendbg.png')}/>
                  <Image style={styles.sendPic} source={require('./imgs/send.png')}/>
                </Pressable>
            </View>
            
          </View>

        </View>

      </View>
  );
} 

const styles = StyleSheet.create({

    convoContainer: {
      marginTop:'5%'
    },

    inputContainer: {
      position:'absolute',
      borderWidth: 1,
      borderColor:'#b3b3b3',
      borderRadius:20,
      paddingRight:150,
      paddingLeft:20,
      paddingTop:5,
      paddingBottom:10,
      marginLeft:'7%'
    },

    sendImgs: {
      position:'absolute',
      right:20,
      top:-2
    },

    sendPic : {
      position:'absolute',
      right:12.5,
      top:11,
    },

    galPic: {
      position:'absolute',
      right:110,
      top:12
    },

    sendBtn: {
      position:'absolute',
      right:2,
      top:10
    },

});

const rsltStyle = StyleSheet.create({

  rsltContainer: {
    marginTop:'8%'
  },

  timeContainer: {
    alignItems:'center',
    justifyContent:'center'
  },

  timeTxt: {
    fontSize:15,
    fontWeight:400,
    opacity: .4
  }
});

