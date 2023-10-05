import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { useState } from "react";
import { FontSize } from "../GlobalStyles";
const C = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> password generator </Text>
            <TextInput style={styles.input} />
            <View style={styles.wrap_part}>
                <Text style={styles.label}> Password length </Text>
                <TextInput style={styles.pass_lenght}></TextInput>
            </View>
            <View style={styles.wrap_part}>
                <Text style={styles.label}> Include lower case letters </Text>
                <CheckBox style={styles.checkbox} />
            </View>
            <View style={styles.wrap_part}>
                <Text style={styles.label}> Include upcase letters </Text>
                <CheckBox style={styles.checkbox} />
            </View>
            <View style={styles.wrap_part}>
                <Text style={styles.label}> Include number </Text>
                <CheckBox style={styles.checkbox} />
            </View>
            <View style={styles.wrap_part}>
                <Text style={styles.label}> Include special symbol </Text>
                <CheckBox style={styles.checkbox} />
            </View>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btn_text}> Generate password </Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#23235b",
        display: "fixed",
        width: "100%",
        height: "100%",
    },

    title : {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
        paddingBottom: 10,
        textTransform: 'uppercase',
    },
    input : {
        backgroundColor: '#fff',
        width: '80%',
        height: 40,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    wrap_part : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 10,
    },
    label : {
        color: '#fff',
        fontSize: 16,
    },
    
    pass_lenght: {
        color: "#000",
        fontSize: 16,
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 5,
        marginTop: 10,
        width: 100,
    },

    btn : {
        backgroundColor: '#3b3b98',
        width: '80%',
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    btn_text : {
        color: '#fff',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 600,
    },
});
export default C;
