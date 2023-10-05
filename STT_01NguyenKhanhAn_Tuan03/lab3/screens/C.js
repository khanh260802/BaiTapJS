import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const C = () => {
  return (
    <View style={styles.c}>
      <View style={[styles.b, styles.bPosition]}>
        <LinearGradient
          style={[styles.a, styles.bPosition]}
          locations={[0, 0.3, 0.85, 1]}
          colors={["#c7f4f6", "#d1f4f6", "#e5f4f5", "#00ccf9"]}
        >
          <View style={styles.bPosition}>
            <Text style={[styles.forgetPassword, styles.nextTypo]}>CODE</Text>
            <Text style={[styles.verification, styles.verificationTypo]}>
              VERIFICATION
            </Text>
            <View style={styles.login} />
            <Text style={[styles.next, styles.nextTypo]}>VERIFY CODE</Text>
            <Text
              style={[styles.enterOntimePassword, styles.verificationTypo]}
            >{`Enter ontime password sent on
++849092605798`}</Text>
            <View style={[styles.frameChild, styles.frameChildShadowBox]} />
            <View style={[styles.frameItem, styles.frameChildShadowBox]} />
            <View style={[styles.frameInner, styles.frameChildShadowBox]} />
            <View style={[styles.rectangleView, styles.frameChildShadowBox]} />
            <View style={[styles.frameChild1, styles.frameChildShadowBox]} />
            <View style={[styles.frameChild2, styles.frameChildShadowBox]} />
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bPosition: {
    overflow: "hidden",
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
  verificationTypo: {
    height: 53,
    width: 302,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  frameChildShadowBox: {
    width: 50,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorSilver_200,
    top: 387,
    height: 50,
    position: "absolute",
  },
  forgetPassword: {
    top: 113,
    left: 102,
    fontSize: 60,
  },
  verification: {
    top: 245,
    left: 28,
    fontSize: FontSize.size_xl,
  },
  login: {
    top: 471,
    left: 10,
    backgroundColor: Color.colorGold,
    width: 339,
    height: 50,
    position: "absolute",
  },
  next: {
    top: 486,
    left: 124,
    fontSize: FontSize.size_lg,
  },
  enterOntimePassword: {
    top: 320,
    left: 29,
    fontSize: FontSize.size_mini,
  },
  frameChild: {
    left: 32,
  },
  frameItem: {
    left: 132,
  },
  frameInner: {
    left: 282,
  },
  rectangleView: {
    left: 82,
  },
  frameChild1: {
    left: 232,
  },
  frameChild2: {
    left: 182,
  },
  a: {
    backgroundColor: "transparent",
  },
  b: {
    backgroundColor: Color.colorWhite,
  },
  c: {
    overflow: "hidden",
    height: '100%',
    width: '100%',
    backgroundColor: Color.colorWhite,
  },
});

export default C;
