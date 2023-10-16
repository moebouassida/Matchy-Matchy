import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable} from 'react-native';

export default function Welcome3() {
  return (
    <View style={styles.container}>

      <View style={styles.bg}>
        <Image source={require('./imgs/bg3.png')}/>
      </View>
      <View style={styles.overlay}>
        <Image source={require('./imgs/img3.png')}/>
      </View>

      <View style={styles.dots}>
        <Text style={styles.dotsStyle1}></Text>
      </View>

      <View style={styles.textView}>
          <Text style={styles.text}>
          Step up your style game
          </Text>
          <Text style={styles.text}>
          and leave a lasting
          </Text>
          <Text style={styles.text}>
          impression!
          </Text>
           
          
      </View>
      

      <Pressable style={styles.btn1}>
        <Text style={styles.btnText1} onPress={() => console.log('next')}>Next</Text>
      </Pressable> 
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },

  bg: {
    position:'absolute',
    top:20
  },

  overlay: {
    top:190
  },

  textView: {
    top:360,
  },

  text: {
    fontSize: 27,
    color: "black",
    fontWeight: "bold",
    textAlign: 'center'
  },

  dots: {
    flexDirection: 'row',
  },

  dotsStyle1: {
    top:310,
    backgroundColor:'#00CDBD',
    borderRadius: 50,
    marginRight:5,
    height:12,
    width:60,
  },

  btn1: {
    backgroundColor:'#00CDBD',
    borderRadius:20,
    paddingTop:15,
    paddingBottom:20,
    paddingRight:150,
    paddingLeft:150,
    bottom:-420
  },

  btnText1: {
    color:'white',
    fontSize:22,
    fontWeight:'bold'
  },

});
