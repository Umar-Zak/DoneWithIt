import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  Platform,
} from "react-native";
import LoginButton from "../../component/input-components/button";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={8}
      style={styles.image}
      source={require("../../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/logo-red.png")}
        />
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>
      <LoginButton title="Login" />
      <LoginButton color="secondary" title="Sign up" />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : "5%",
    resizeMode: "contain",
  },

  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
export default WelcomeScreen;
