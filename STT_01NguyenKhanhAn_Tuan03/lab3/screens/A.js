import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const A = () => {
  return (
    <LinearGradient
      style={styles.a}
      locations={[0, 0.3, 0.85, 1]}
      colors={["#c7f4f6", "#d1f4f6", "#e5f4f5", "#00ccf9"]}
    >
      <View style={styles.ellipseParent}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/Ellipse8.png")}
        />
        <Text style={[styles.growYourBusiness, styles.weWillHelpTypo]}>{`GROW
YOUR BUSINESS`}</Text>
        <Text
          style={[styles.weWillHelp, styles.weWillHelpTypo]}
        >{`We will help you to grow your business using
online server`}</Text>
        <View style={[styles.login, styles.loginLayout]} />
        <View style={[styles.signup, styles.loginLayout]} />
        <Text style={[styles.login1, styles.login1Typo]}>LOGIN</Text>
        <Text style={[styles.signUp, styles.login1Typo]}>SIGN UP</Text>
        <Text style={[styles.howWeWork, styles.login1Typo]}>HOW WE WORK?</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  weWillHelpTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  loginLayout: {
    height: 45,
    width: 125,
    backgroundColor: Color.colorGold,
    top: 471,
    position: "absolute",
  },
  login1Typo: {
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  frameChild: {
    top: 69,
    left: 109,
    width: 142,
    height: 142,
    position: "absolute",
  },
  growYourBusiness: {
    top: 277,
    left: 85,
    fontSize: FontSize.size_6xl,
  },
  weWillHelp: {
    top: 385,
    left: 29,
    fontSize: FontSize.size_mini,
  },
  login: {
    left: 30,
  },
  signup: {
    left: 209,
  },
  login1: {
    left: 65,
    top: 483,
    fontSize: FontSize.size_lg,
  },
  signUp: {
    left: 237,
    top: 483,
    fontSize: FontSize.size_lg,
  },
  howWeWork: {
    top: 537,
    width: 302,
    height: 53,
    left: 30,
  },
  ellipseParent: {
    width: 360,
    height: '100vh',
    overflow: "hidden",
  },
  a: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    overflow: "hidden",
    width: '100vw',
  },
});

export default A;
