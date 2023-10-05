import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const B = () => {
    return (
        <View style={styles.b}>
            <LinearGradient
                style={[styles.a, styles.aPosition]}
                locations={[0, 0.3, 0.85, 1]}
                colors={["#c7f4f6", "#d1f4f6", "#e5f4f5", "#00ccf9"]}
            >
                <View style={styles.aPosition}>
                    <Text
                        style={[styles.forgetPassword, styles.nextTypo]}
                    >{`FORGET 
PASSWORD`}</Text>
                    <Text
                        style={[styles.provideYourAccounts, styles.emailTypo]}
                    >
                        Provide your account’s email for which you want to reset
                        your password
                    </Text>
                    <View style={styles.login} />
                    <Text style={[styles.next, styles.nextTypo]}>NEXT</Text>
                    <Image
                        style={styles.lock1528791Icon}
                        contentFit="cover"
                        source={require("../assets/lock.png")}
                    />
                    <View
                        style={[styles.frameChild, styles.frameChildPosition]}
                    />
                    <Text style={[styles.email, styles.emailTypo]}>Email</Text>
                    <Image
                        style={[
                            styles.mail29353651Icon,
                            styles.frameChildPosition,
                        ]}
                        contentFit="cover"
                        source={require("../assets/mail.png")}
                    />
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    aPosition: {
        // left: 0,
        // top: 0,
        // overflow: "hidden",
        // position: "absolute",
        height: 640,
        width: 360,
        height: '100%',
        width: '100%',
    },
    nextTypo: {
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        position: "absolute",
    },
    emailTypo: {
        fontSize: FontSize.size_mini,
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
    },
    frameChildPosition: {
        top: 383,
        height: 45,
        left: 30,
        position: "absolute",
    },
    forgetPassword: {
        top: 230,
        left: 113,
        fontSize: FontSize.size_6xl,
    },
    provideYourAccounts: {
        top: 320,
        width: 302,
        height: 53,
        left: 30,
        fontSize: FontSize.size_mini,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
    },
    login: {
        top: 471,
        backgroundColor: Color.colorGold,
        height: 45,
        width: 305,
        left: 30,
        position: "absolute",
    },
    next: {
        top: 483,
        left: 160,
        fontSize: FontSize.size_lg,
    },
    lock1528791Icon: {
        top: 76,
        left: 128,
        width: 105,
        height: 117,
        position: "absolute",
        overflow: "hidden",
    },
    frameChild: {
        backgroundColor: Color.colorSilver_100,
        width: 305,
        top: 383,
    },
    email: {
        top: 396,
        left: 78,
        fontFamily: FontFamily.robotoRegular,
    },
    mail29353651Icon: {
        width: 48,
        overflow: "hidden",
    },
    a: {
        backgroundColor: "transparent",
        
    },
    b: {
        backgroundColor: Color.colorWhite,
        overflow: "hidden",
        height: "100%",
        width: "100%",
    },
});

export default B;
