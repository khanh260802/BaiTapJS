import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const XMEye = () => {
    return (
       // add left to style below
        <View style={[styles.xmeye, {left: 12}]}>
            <View style={[styles.eyeball3097971, styles.iconPosition]}>
                <Image
                    style={styles.groupIcon}
                    contentFit="cover"
                    source={require("../assets/eye2.png")}
                />
            </View>
            <View style={[styles.xmeyeChild, styles.xmeyeChildLayout1]} />
            <Text style={styles.login}>LOGIN</Text>
            <Text style={[styles.register, styles.registerTypo]}>Register</Text>
            <Text style={[styles.pleaseInputUser, styles.pleaseTypo]}>
                Please input user name
            </Text>
            <Text style={[styles.pleaseInputPassword, styles.pleaseTypo]}>
                Please input password
            </Text>
            <Text style={[styles.forgotPassword, styles.registerTypo]}>
                Forgot Password
            </Text>
            <View style={[styles.xmeyeItem, styles.xmeyeLayout]} />
            <View style={[styles.xmeyeInner, styles.xmeyeLayout]} />
            <Image
                style={[styles.xmeyeChild1, styles.xmeyeChildLayout]}
                contentFit="cover"
                source={require("../assets/avatar_user2.png")}
            />
            <Image
                style={[styles.xmeyeChild2, styles.xmeyeChildLayout]}
                contentFit="cover"
                source={require("../assets/lock2.png")}
            />
            <View
                style={[
                    styles.otherLoginMethodsParent,
                    styles.xmeyeChildLayout1,
                ]}
            >
                <Text style={[styles.otherLoginMethods, styles.registerTypo]}>
                    Other Login Methods
                </Text>
                <View style={[styles.groupChild, styles.groupLayout]} />
                <View style={[styles.groupItem, styles.groupLayout]} />
            </View>
            <Image
                style={[styles.xmeyeChild3, styles.rectangleLayout]}
                contentFit="cover"
                source={require("../assets/addFriend.png")}
            />
            <View style={[styles.rectangleView, styles.rectangleLayout]} />
            <View style={[styles.rectangleParent, styles.rectangleLayout]}>
                <View style={[styles.groupInner, styles.rectangleLayout]} />
                <Image
                    style={[styles.wifiIcon, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/wifi.png")}
                />
            </View>
            <Image
                style={[styles.brandicofacebookIcon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/facebook2.png")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    iconPosition: {
        position: "absolute",
        overflow: "hidden",
    },
    xmeyeChildLayout1: {
        width: 300,
        position: "absolute",
    },
    registerTypo: {
        color: Color.colorBlack,
        textAlign: "center",
        fontFamily: FontFamily.robotoRegular,
        fontSize: FontSize.size_lg,
        position: "absolute",
    },
    pleaseTypo: {
        color: Color.colorSilver_100,
        left: 75,
        textAlign: "center",
        fontFamily: FontFamily.robotoRegular,
        fontSize: FontSize.size_lg,
        position: "absolute",
    },
    xmeyeLayout: {
        height: 1,
        width: 301,
        borderTopWidth: 1,
        borderColor: Color.colorSilver_100,
        borderStyle: "solid",
        left: 30,
        position: "absolute",
    },
    xmeyeChildLayout: {
        height: 30,
        width: 30,
        left: 30,
        position: "absolute",
    },
    groupLayout: {
        width: 63,
        borderColor: Color.colorBlue,
        top: 11,
        height: 1,
        borderTopWidth: 1,
        borderStyle: "solid",
        position: "absolute",
    },
    rectangleLayout: {
        height: 74,
        width: 74,
        position: "absolute",
    },
    groupIcon: {
        width: 112,
        height: 107,
    },
    eyeball3097971: {
        top: 33,
        left: 110,
        alignItems: "center",
        paddingHorizontal: 14,
        paddingVertical: 17,
    },
    xmeyeChild: {
        top: 361,
        backgroundColor: "#386ffc",
        height: 48,
        borderRadius: Border.br_3xs,
        left: 30,
        width: 300,
    },
    login: {
        top: 375,
        left: 154,
        color: Color.colorWhite,
        textAlign: "center",
        fontFamily: FontFamily.robotoRegular,
        fontSize: FontSize.size_lg,
        position: "absolute",
    },
    register: {
        top: 429,
        left: 31,
    },
    pleaseInputUser: {
        top: 204,
    },
    pleaseInputPassword: {
        top: 277,
    },
    forgotPassword: {
        top: 433,
        left: 194,
    },
    xmeyeItem: {
        top: 232,
    },
    xmeyeInner: {
        top: 311,
    },
    xmeyeChild1: {
        top: 195,
    },
    xmeyeChild2: {
        top: 268,
    },
    otherLoginMethods: {
        left: 66,
        top: 0,
    },
    groupChild: {
        left: 0,
    },
    groupItem: {
        left: 238,
    },
    otherLoginMethodsParent: {
        top: 488,
        left: 35,
        height: 21,
    },
    xmeyeChild3: {
        top: 538,
        width: 74,
        left: 31,
    },
    rectangleView: {
        left: 263,
        backgroundColor: "#3a579c",
        top: 538,
        width: 74,
        borderRadius: Border.br_3xs,
    },
    groupInner: {
        backgroundColor: "#f4aa47",
        left: 0,
        top: 0,
        borderRadius: Border.br_3xs,
    },
    wifiIcon: {
        height: "63.51%",
        width: "75.68%",
        top: "17.57%",
        right: "12.16%",
        bottom: "18.92%",
        left: "12.16%",
        maxWidth: "100%",
        maxHeight: "100%",
    },
    rectangleParent: {
        left: 148,
        top: 538,
        width: 74,
    },
    brandicofacebookIcon: {
        top: 552,
        left: 284,
        width: 32,
        height: 45,
    },
    xmeye: {
        backgroundColor: Color.colorWhite,
        flex: 1,
        width: "100%",
        height: 640,
        overflow: "hidden",
    },
});

export default XMEye;
