import React from "react";
import {
    StyleSheet,
    View,
    Pressable,
    Image,
 
} from "react-native";
const Footer = () => { 
    return(<View style={styles.footer}>
        <Pressable>
            <Image style={styles.ellipsis} source={require('../assets/ellipsis.svg')} />
        </Pressable>
        <Pressable >
            <Image style={styles.home} source={require('../assets/home.svg')} />
        </Pressable>
        <Pressable>
            <Image style={styles.back2} source={require('../assets/back2.svg')} />
        </Pressable>
    </View>)
}
const styles = StyleSheet.create({
    footer : {
        backgroundColor: '#1BA9FF', 
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: 42,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        zIndex: 1,
    },
    ellipsis : {
        width: 23, 
        height: 13.85, 

    },
    home: { 
        width: 24,
        height: 24, 
        
    }, 
    back2: { 
        width: 25, 
        height: 25, 
    }, 
})

export default Footer; 