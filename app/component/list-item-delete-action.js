import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
const ListItemDeleteAction = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons size={35} color="white" name="trash-can" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff5252",
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ListItemDeleteAction;
