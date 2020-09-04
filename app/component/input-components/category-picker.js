import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "../icon";
import AppText from "../app-text";
const CategoryPicker = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Icon
          style={item.style}
          name={item.name}
          color={item.color}
          size={60}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: "33%",
    alignItems: "center",
  },
  label: {
    textAlign: "center",
  },
});
export default CategoryPicker;
