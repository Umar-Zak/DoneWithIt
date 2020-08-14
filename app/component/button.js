import React from "react";
import { Text, StyleSheet, TouchableOpacity, Platform } from "react-native";
import colors from "../config/colors";
const LoginButton = ({ title, onPress, color = "primary" }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "white",
    textTransform: "capitalize",
    textAlign: "center",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  container: {
    width: "90%",
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginBottom: 20,
  },
});

export default LoginButton;
