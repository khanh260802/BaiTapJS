import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";

const TongHaiSo = () => {
    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const [sum, setSum] = useState("");

    const MyButton = ({ onPress, title }) => {
        return (
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        );
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.inputContaier}>
                <Text> Enter first value: </Text>
                <TextInput
                    style={styles.input}
                    value={inputValue1}
                    onChangeText={(text) => setInputValue1(text)}
                />
            </View>

            <View style={styles.inputContaier}>
                <Text> Enter second value: </Text>
                <TextInput
                    style={styles.input}
                    value={inputValue2}
                    onChangeText={(text) => setInputValue2(text)}
                />
            </View>

            <View style={styles.inputContaier}>
                <Text> result: </Text>
                <Text style={styles.input}> {sum} </Text>
            </View>

            <MyButton
                onPress={() =>
                    setSum(parseInt(inputValue1) + parseInt(inputValue2))
                }
                title={"Tong hai so"}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
        margin: 10,
        width: "80%",
    },

    inputContaier: {},

    button: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
});
export default TongHaiSo;
