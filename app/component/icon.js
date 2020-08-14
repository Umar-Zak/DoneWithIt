import React from "react";
import { View, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./app-text";
const Icon = ({ name, size, color, style, topStyle, text, textStyle }) => {
  return (
    <TouchableHighlight
      underlayColor="grey"
      onPress={() => console.log("pressed")}
    >
      <View style={topStyle}>
        <View style={style}>
          <MaterialCommunityIcons name={name} color={color} size={size} />
        </View>
        <AppText style={textStyle}>{text}</AppText>
      </View>
    </TouchableHighlight>
  );
};

export default Icon;
