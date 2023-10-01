import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/routers";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const D = () => {
    return (
        <Pressable style={[styles.d, styles.dLayout]}>
            <View
              style={{
                position: "absolute",
                left: 13,
              }}
            >
                <View style={[styles.dChild, styles.dItemLayout]} />
                <View style={[styles.dItem, styles.dItemLayout]} />
                <Text style={[styles.email, styles.emailTypo]}>Email</Text>
                <View style={styles.btnlogin} />
                <Text style={[styles.password, styles.emailTypo]}>
                    Password
                </Text>
                <Text style={styles.login}>LOGIN</Text>
                <View style={[styles.dInner, styles.dInnerLayout]}>
                    <View
                        style={[
                            styles.rectangleParent,
                            styles.backgroundPosition,
                        ]}
                    >
                        <View style={[styles.groupChild, styles.groupLayout]} />
                        <View style={[styles.groupItem, styles.groupLayout]} />
                        <View style={[styles.groupInner, styles.groupLayout]} />
                    </View>
                </View>
                <Text style={[styles.login1, styles.login1Typo]}>LOGIN</Text>
                <Image
                    style={styles.icofacebook19245101Icon}
                    contentFit="cover"
                    source={require("../assets/facebook.png")}
                />
                <Image
                    style={styles.icogoogle1Icon}
                    contentFit="cover"
                    source={require("../assets/google.png")}
                />
                <Image
                    style={styles.eye1Icon}
                    contentFit="cover"
                    source={require("../assets/eye.png")}
                />
                <Text style={[styles.icozalo, styles.login1Typo]}>z</Text>
                <View style={[styles.background, styles.backgroundPosition]} />
                <Text style={[styles.whenYouAgree, styles.forGotYourTypo]}>
                    When you agree to terms and conditions
                </Text>
                <Text style={[styles.orLoginWith, styles.forGotYourTypo]}>
                    Or login with
                </Text>
                <Text style={[styles.forGotYour, styles.forGotYourTypo]}>
                    Forgot your password?
                </Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    dLayout: {
        height: "100%",
        width: "100%",
    },
    dItemLayout: {
        height: 54,
        width: 330,
        borderColor: Color.colorWhitesmoke,
        backgroundColor: Color.colorSilver_300,
        left: 15,
        borderWidth: 1,
        borderStyle: "solid",
        position: "absolute",
    },
    emailTypo: {
        textAlign: "center",
        fontFamily: FontFamily.robotoRegular,
        fontSize: FontSize.size_lg,
        color: Color.colorBlack,
        position: "absolute",
    },
    dInnerLayout: {
        width: 328,
        height: 45,
    },
    backgroundPosition: {
        top: 0,
        position: "absolute",
    },
    groupLayout: {
        width: 110,
        top: 0,
        height: 45,
        borderRadius: Border.br_11xs,
        position: "absolute",
    },
    login1Typo: {
        color: Color.colorWhite,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        textAlign: "center",
        position: "absolute",
    },
    forGotYourTypo: {
        height: 20,
        width: 260,
        fontSize: FontSize.size_sm,
        textAlign: "center",
        fontFamily: FontFamily.robotoRegular,
        position: "absolute",
    },
    dChild: {
        top: 131,
    },
    dItem: {
        top: 218,
    },
    email: {
        top: 147,
        left: 35,
    },
    btnlogin: {
        top: 334,
        backgroundColor: Color.colorCrimson,
        height: 45,
        borderRadius: Border.br_11xs,
        width: 330,
        left: 15,
        position: "absolute",
    },
    password: {
        top: 234,
        left: 32,
    },
    login: {
        top: 40,
        left: 145,
        fontSize: FontSize.size_6xl,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
    },
    groupChild: {
        backgroundColor: "#25479b",
    },
    groupItem: {
        left: 108,
        backgroundColor: "#0f8ee0",
    },
    groupInner: {
        left: 218,
        borderColor: "#0680f1",
        borderWidth: 1,
        borderStyle: "solid",
        width: 110,
        backgroundColor: Color.colorWhite,
    },
    rectangleParent: {
        width: 328,
        height: 45,
    },
    dInner: {
        top: 524,
        left: 19,
        position: "absolute",
    },
    login1: {
        top: 345,
        left: 151,
        fontSize: FontSize.size_xl,
    },
    icofacebook19245101Icon: {
        top: 528,
        width: 30,
        height: 30,
        left: 50,
        position: "absolute",
        overflow: "hidden",
    },
    icogoogle1Icon: {
        top: 529,
        left: 270,
        width: 35,
        height: 35,
        position: "absolute",
        overflow: "hidden",
    },
    eye1Icon: {
        top: 227,
        left: 286,
        width: 38,
        height: 36,
        position: "absolute",
        overflow: "hidden",
    },
    icozalo: {
        top: 514,
        left: 144,
        fontSize: 50,
        width: 69,
        height: 31,
    },
    background: {
        backgroundColor: Color.colorMediumseagreen,
        height: "100%",
        width: "100%",
    },
    whenYouAgree: {
        top: 397,
        left: 36,
        color: Color.colorBlack,
        width: 260,
        fontSize: FontSize.size_sm,
    },
    orLoginWith: {
        top: 464,
        left: 45,
        color: Color.colorBlack,
        width: 260,
        fontSize: FontSize.size_sm,
    },
    forGotYour: {
        top: 430,
        color: "#5d25fa",
        left: 50,
    },
    d: {
        overflow: "hidden",
        backgroundColor: Color.colorWhite,
        height: "100%",
        width: "100%",
    },
});

export default D;
