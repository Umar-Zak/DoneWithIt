import React from "react";

import { Text, StyleSheet, Platform } from "react-native";
import colors from "../config/colors";

const AppText = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
        color: colors.medium,
      },
      android: {
        fontFamily: "Roboto",
        color: colors.medium,
        textAlign: "center",
      },
    }),
  },
});
export default AppText;
