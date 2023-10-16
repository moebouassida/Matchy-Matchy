import { StyleSheet, Text, View, Image, Pressable} from 'react-native';

export default function Welcome1() {
  return (
    <View style={styles.container}>

      <View style={styles.bg}>
        <Image source={require('./imgs/bg1.png')}/>
      </View>
      <View style={styles.overlay}>
        <Image source={require('./imgs/img1.png')}/>
      </View>

      <View style={styles.textView}>
          <Text style={styles.text}>
            Find your perfect fit
          </Text>
          <Text style={styles.text}>
            and express your unique 
          </Text>
          <Text style={styles.text}>
            personality!
          </Text>
      </View>
      
      <View style={styles.dots}>
        <Text style={styles.dotsStyle1}></Text>
        <Text style={styles.dotsStyle2}></Text>
        <Text style={styles.dotsStyle2}></Text>
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
    top:90,
  },

  overlay: {
    top:160
  },

  textView: {
    top:340,
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
    top:180,
    backgroundColor:'black',
    borderRadius: 100,
    marginRight:5,
    height:12,
    width:12,
  },

  dotsStyle2: {
    top:180,
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
    bottom:-390
  },

  btnText1: {
    color:'white',
    fontSize:22,
    fontWeight:'bold'
  },

  btn2: {
    bottom:-395,
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
