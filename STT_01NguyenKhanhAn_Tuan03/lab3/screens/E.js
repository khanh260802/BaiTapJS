import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const E = () => {
    return (
        <View style={[styles.e, styles.eBg]}>
            {/* <Text> Test</Text> */}
            <View style={[styles.d, styles.dPosition]}>
                <View style={[styles.edtname, styles.edtnameLayout]} />
                <View style={[styles.edtemail, styles.edtnameLayout]} />
                <View style={[styles.edtngaysinh, styles.edtphoneLayout]} />
                <View style={[styles.edtphone, styles.edtphoneLayout]} />
                <View style={[styles.edtpassword, styles.edtnameLayout]} />
                <Text style={[styles.txtname, styles.txtnameTypo]}>Name</Text>
                <Text style={[styles.txtphone, styles.txtnameTypo]}>Phone</Text>
                <Text style={[styles.txtemail, styles.txtnameTypo]}>Email</Text>
                <Text style={[styles.txtbirthday, styles.txtnameTypo]}>
                    Birthday
                </Text>
                <View style={styles.btnregister} />
                <Text style={[styles.txtpassword, styles.txtnameTypo]}>
                    Password
                </Text>
                <Text style={[styles.txtmale, styles.txtmaleTypo]}>Male</Text>
                <Text style={[styles.txtfemale, styles.txtmaleTypo]}>
                    Female
                </Text>
                <Text style={[styles.txtregister, styles.txtregisterTypo]}>
                    REGISTER
                </Text>
                <Text style={[styles.txtregister1, styles.txtregisterTypo]}>
                    REGISTER
                </Text>
                <Image
                    style={styles.eye1Icon}
                    contentFit="cover"
                    source={require("../assets/eye.png")}
                />
                <View style={[styles.background, styles.dPosition]} />
                <Image
                    style={[styles.rdbmaleIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/circleGender.png")}
                />
                <Image
                    style={[styles.rdbfemaleIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/circleGender.png")}
                />
                <Text style={[styles.whenYouAgree, styles.txtnameTypo]}>
                    When you agree to terms and conditions
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    eBg: {
        overflow: "hidden",
        backgroundColor: Color.colorWhite,
    },
    dPosition: {
        height: '100%',
        width: '100%',
    },
    edtnameLayout: {
        height: 54,
        borderWidth: 1,
        borderColor: Color.colorWhitesmoke,
        borderStyle: "solid",
        backgroundColor: Color.colorSilver_300,
        left: 13+16,
        width: 330,
        position: "absolute",
    },
    edtphoneLayout: {
        left: 13+17,
        height: 54,
        width: 330,
        borderWidth: 1,
        borderColor: Color.colorWhitesmoke,
        borderStyle: "solid",
        backgroundColor: Color.colorSilver_300,
        position: "absolute",
    },
    txtnameTypo: {
        textAlign: "center",
        fontFamily: FontFamily.robotoRegular,
        color: Color.colorBlack,
        position: "absolute",
    },
    txtmaleTypo: {
        top: 455,
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoRegular,
        fontSize: FontSize.size_lg,
        position: "absolute",
    },
    txtregisterTypo: {
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        textAlign: "center",
        position: "absolute",
    },
    iconLayout: {
        height: 23,
        width: 23,
        position: "absolute",
    },
    edtname: {
        top: 97,
    },
    edtemail: {
        top: 237,
    },
    edtngaysinh: {
        top: 377,
    },
    edtphone: {
        top: 167,
    },
    edtpassword: {
        top: 307,
    },
    txtname: {
        top: 111,
        fontSize: FontSize.size_lg,
        left: 13+26,
        textAlign: "center",
        fontFamily: FontFamily.robotoRegular,
    },
    txtphone: {
        top: 184,
        fontSize: FontSize.size_lg,
        left: 13+26,
        textAlign: "center",
        fontFamily: FontFamily.robotoRegular,
    },
    txtemail: {
        top: 247,
        fontSize: FontSize.size_lg,
        left: 13+26,
        textAlign: "center",
        fontFamily: FontFamily.robotoRegular,
    },
    txtbirthday: {
        top: 391,
        fontSize: FontSize.size_lg,
        left: 13+26,
        textAlign: "center",
        fontFamily: FontFamily.robotoRegular,
    },
    btnregister: {
        top: 502,
        left: 13+15,
        borderRadius: Border.br_11xs,
        backgroundColor: Color.colorCrimson,
        height: 45,
        width: 330,
        position: "absolute",
    },
    txtpassword: {
        top: 320,
        fontSize: FontSize.size_lg,
        left: 13+26,
        textAlign: "center",
        fontFamily: FontFamily.robotoRegular,
    },
    txtmale: {
        left: 13+73,
    },
    txtfemale: {
        left: 13+182,
    },
    txtregister: {
        top: 40,
        left: 13+123,
        fontSize: FontSize.size_6xl,
        color: Color.colorBlack,
        fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
    },
    txtregister1: {
        top: 513,
        left: 13+133,
        fontSize: FontSize.size_xl,
        color: Color.colorWhite,
    },
    eye1Icon: {
        top: 314,
        left: 13+285,
        width: 38,
        height: 36,
        position: "absolute",
        overflow: "hidden",
    },
    background: {
        backgroundColor: Color.colorMediumseagreen,
    },
    rdbmaleIcon: {
        top: 453,
        left: 13+36,
    },
    rdbfemaleIcon: {
        top: 454,
        left: 13+143,
    },
    whenYouAgree: {
        top: 561,
        left: 13+50,
        fontSize: FontSize.size_sm,
        width: 260,
        height: 20,
    },
    d: {
        overflow: "hidden",
        backgroundColor: Color.colorWhite,
        
    },
    e: {
        height: '100%',
        width: '100%',
        overflow: "hidden",
        backgroundColor: Color.colorWhite,
    },
});

export default E;
