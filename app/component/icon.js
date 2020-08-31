import React from "react";
import { View, TouchableHighlight, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./app-text";
const Icon = ({ name, size, color, style, topStyle, text, textStyle }) => {
  return (
    <TouchableHighlight
      underlayColor="grey"
      onPress={() => console.log("pressed")}
    >
      <View
        style={[
          styles.container,
          { width: size, height: size, borderRadius: size / 2 },
          ,
          style,
        ]}
      >
        <MaterialCommunityIcons
          style={styles.icon}
          name={name}
          color={color}
          size={size / 2}
        />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  icon: {
    padding: "20%",
  },
});
export default Icon;
