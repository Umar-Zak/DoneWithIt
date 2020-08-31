import React from "react";
import { View, TextInput, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import style from "../config/styles";

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          color="#6e6969"
          size={25}
          name={icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        style={style.text}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    flexDirection: "row",
    padding: 20,
    marginVertical: 10,
    borderRadius: 17,
    backgroundColor: colors.light,
    alignSelf: "center",
  },
  icon: {
    marginRight: 15,
  },
});

export default AppTextInput;
