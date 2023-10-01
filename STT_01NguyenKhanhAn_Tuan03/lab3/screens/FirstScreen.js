import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "@rneui/themed";
const FirstScreen = () => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={["#00ccf9", "#00ccf9"]}
                style={styles.backgrd}
            />
            <Image
                style={styles.image}
                contentFit="cover"
                source={require("../assets/Ellipse8.png")}
            />
            <Text style={styles.header}>
                grow your business
            </Text>
            <Text style={styles.description}>
                We will help yout to grow your business using online server
            </Text>
            <Button
                type="solid"
                color="#e3c000"
                button="signup"
                containerStyle={styles.rectangleButtonBtn}
                buttonStyle={styles.rectangleButtonBtn1}
            />

            <Button
                type="solid"
                color="#e3c000"
                button="signup"
                containerStyle={[styles.rectangleButtonBtn1]}
                buttonStyle={styles.rectangleButtonBtn}
            />
            <Text style={styles.buttonText1}> LOGIN </Text>

            <Button
                type="solid"
                color="#e3c000"
                button="signup"
                containerStyle={[styles.rectangleButtonBtn2]}
                buttonStyle={styles.rectangleButtonBtn}
            />

            <Text style={styles.buttonText2}> SIGN UP </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },

    backgrd: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
        width: "100%",
    },

    image: {
        width: 140,
        height: 140,
        position: "absolute",
        top: 100,
    },

    header: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 25,
        textAlign: "center",
        width: 300,
    },

    description: {
        width: 350,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15,
        position: "absolute",
        bottom: 200,
    },

    rectangleButtonBtn1: {
        position: "absolute",
        bottom: 100,
        left: 50,
    },

    rectangleButtonBtn2: {
        position: "absolute",
        bottom: 100,
        right: 50,
    },

    rectangleButtonBtn: {
        width: 120,
        height: 50,
        borderRadius: 10,
    },

    buttonText1: {
        position: "absolute",
        bottom: 115,
        left: 75,
        textAlign: "center",
        fontWeight: "700",
        zIndex: 1,
        fontSize: 20,
    },

    buttonText2: {
        position: "absolute",
        bottom: 115,
        right: 65,
        textAlign: "center",
        fontWeight: "700",
        zIndex: 1,
        fontSize: 20,
    },
});

export default FirstScreen;
