import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeContainer}>
        <MaterialCommunityIcons name="close" size={35} color="white" />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color="white"
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../assets/chair.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  closeContainer: {
    position: "absolute",
    top: 30,
    left: 30,
  },
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  deleteIcon: {
    position: "absolute",
    top: 30,
    right: 30,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
