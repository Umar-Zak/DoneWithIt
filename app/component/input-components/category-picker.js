import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "./icon";
import AppText from "./app-text";
const CategoryPicker = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <Icon style={item.style} name={item.name} color={item.color} size={60} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
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
