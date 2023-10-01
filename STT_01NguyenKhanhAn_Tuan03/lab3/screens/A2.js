import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const A2 = () => {
    return (
        <View style={styles.a}>
            <LinearGradient
                style={styles.aChild}
                locations={[0, 1]}
                colors={["#fbcb00", "#bf9a00"]}
            />
            <View style={{left:13}}>
                <View style={[styles.edtpassword, styles.edtpasswordLayout]} />
                <View style={[styles.edtpassword1, styles.edtpasswordLayout]} />
                <Text style={[styles.txtpassword, styles.txtpasswordTypo]}>
                    Password
                </Text>
                <Text style={[styles.txtpassword1, styles.txtpasswordTypo]}>
                    Name
                </Text>
                <Image
                    style={styles.eye1Icon}
                    contentFit="cover"
                    source={require("../assets/eye.png")}
                />
                <Image
                    style={[styles.lock1528791Icon, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/lock.png")}
                />
                <Image
                    style={[styles.avatarUser1Icon, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/avatar_user.png")}
                />
                <Text style={styles.txtregister}>LOGIN</Text>
                <View style={styles.btnregister} />
                <Text style={[styles.login, styles.loginTypo]}>LOGIN</Text>
                <Text style={[styles.createAccount, styles.loginTypo]}>
                    CREATE ACCOUNT
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    edtpasswordLayout: {
        height: 54,
        borderWidth: 1,
        borderColor: Color.colorWhitesmoke,
        borderStyle: "solid",
        backgroundColor: Color.colorSilver_300,
        width: 330,
        left: 15,
        position: "absolute",
    },
    txtpasswordTypo: {
        textAlign: "center",
        fontFamily: FontFamily.robotoRegular,
        fontSize: FontSize.size_lg,
        color: Color.colorBlack,
        position: "absolute",
    },
    iconPosition: {
        left: 24,
        height: 32,
        width: 32,
        position: "absolute",
        overflow: "hidden",
    },
    loginTypo: {
        height: 27,
        fontSize: FontSize.size_xl,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        textAlign: "center",
        position: "absolute",
    },
    aChild: {
        top: 0,
        backgroundColor: "transparent",
        position: "absolute",
        height: '100%',
        width: '100%',
    },
    edtpassword: {
        top: 266,
    },
    edtpassword1: {
        top: 192,
    },
    txtpassword: {
        top: 283,
        left: 73,
    },
    txtpassword1: {
        top: 208,
        left: 77,
    },
    eye1Icon: {
        left: 280,
        height: 32,
        width: 32,
        top: 275,
        position: "absolute",
        overflow: "hidden",
    },
    lock1528791Icon: {
        top: 275,
        left: 24,
    },
    avatarUser1Icon: {
        top: 201,
    },
    txtregister: {
        top: 82,
        left: 30,
        fontSize: 30,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
    },
    btnregister: {
        top: 379,
        borderRadius: Border.br_11xs,
        backgroundColor: "#060000",
        height: 45,
        width: 330,
        left: 15,
        position: "absolute",
    },
    login: {
        top: 388,
        left: 113,
        color: Color.colorWhite,
        width: 147,
    },
    createAccount: {
        top: 469,
        left: 61,
        width: 239,
        color: Color.colorBlack,
        height: 27,
        fontSize: FontSize.size_xl,
    },
    a: {
        backgroundColor: Color.colorWhite,
        overflow: "hidden",
        height: '100%',
        width: '100%',
    },
});

export default A2;
