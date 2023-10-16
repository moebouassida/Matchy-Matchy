import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable} from 'react-native';

export default function Welcome2() {
  return (
    <View style={styles.container}>

      <View style={styles.bg}>
        <Image source={require('./imgs/bg2.png')}/>
      </View>
      <View style={styles.overlay}>
        <Image source={require('./imgs/img2.png')}/>
      </View>

      <View style={styles.dots}>
        <Text style={styles.dotsStyle1}></Text>
        <Text style={styles.dotsStyle2}></Text>
      </View>

      <View style={styles.textView}>
          <Text style={styles.text}>
            Look good, feel great
          </Text>
          
      </View>
      

      <Pressable style={styles.btn1}>
        <Text style={styles.btnText1} onPress={() => console.log('next')}>Next</Text>
      </Pressable> 

      <Pressable style={styles.btn2}>
        <Text style={styles.btnText2} onPress={() => console.log('skip')}>Skip</Text>
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
    top:50
  },

  overlay: {
    top:180
  },

  textView: {
    top:350,
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
    top:280,
    backgroundColor:'#00CDBD',
    borderRadius: 50,
    marginRight:5,
    height:12,
    width:30,
  },

  dotsStyle2: {
    top:280,
    backgroundColor:'black',
    borderRadius: 100,
    marginRight:5,
    height:12,
    width:12,
    opacity:0.1
  },

  btn1: {
    backgroundColor:'#00CDBD',
    borderRadius:20,
    paddingTop:15,
    paddingBottom:20,
    paddingRight:150,
    paddingLeft:150,
    bottom:-470
  },

  btnText1: {
    color:'white',
    fontSize:22,
    fontWeight:'bold'
  },

  btn2: {
    bottom:-475,
    borderRadius:20,
    paddingTop:15,
    paddingBottom:20,
    paddingRight:150,
    paddingLeft:150,
  },

  btnText2: {
    color:'#00CDBD',
    fontSize:22,
    fontWeight:'bold'
  }
});
