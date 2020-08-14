import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "./app-text";

import colors from "../config/colors";
const Card = ({ title, subTitle, image }) => {
  return (
    <View>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subText}>{subTitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subText: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    color: colors.primary,
    fontSize: 18,
  },
  textContainer: {
    padding: 10,
    paddingLeft: 30,
  },
});
export default Card;
