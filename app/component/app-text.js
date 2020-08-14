import React from "react";

import { Text, StyleSheet, Platform } from "react-native";

const AppText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
        color: "dodgerblue",
      },
      android: {
        fontFamily: "Roboto",
        color: "tomato",
        textAlign: "center",
      },
    }),
  },
});
export default AppText;
