import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable} from 'react-native';

export default function Items(props) {
    const [active, setActive] = useState(false)
  
    const toggleActive = () => {
        setActive(!active)
    }
return (
    <View>
        {!active ? 
        <Pressable style={styles.itemContainerNormal}>
            <Text style={styles.normalText} onPress={toggleActive}>{props.interest}</Text>
        </Pressable> : 
        <Pressable style={styles.itemContainerActive}>
            <Text style={styles.activeText} onPress={toggleActive}>{props.interest}</Text>
        </Pressable>
        } 
    </View>
  );
}

const styles = StyleSheet.create({
    itemContainerNormal:{
        borderWidth:2,
        borderColor:'#00cdbdb3',
        borderRadius:20,
        paddingBottom:15,
        paddingTop:15,
        paddingRight:20,
        paddingLeft:20,
        marginRight:20,
        marginBottom:15
    },

    normalText: {
        color:'black',
        fontSize:17,
        fontWeight:'bold'
    },

    itemContainerActive:{
        backgroundColor:'#00CDBD',
        borderRadius:20,
        paddingBottom:15,
        paddingTop:15,
        paddingRight:20,
        paddingLeft:20,
        marginRight:24,
        marginBottom:15
    },

    activeText: {
        color:'white',
        fontSize:17,
        fontWeight:'bold'
    },
});
