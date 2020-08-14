import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import AppText from "./app-text";

import Swipeable from "react-native-gesture-handler/Swipeable";

const ListItem = ({ image, title, subTitle, onPress, renderRightActions }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor="#f8f4f4" onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View style={styles.textContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: "#6e6969",
  },
  title: {
    color: "#000",
    fontWeight: "500",
    fontSize: 20,
  },

  textContainer: {
    paddingTop: "3%",
  },
});
export default ListItem;
