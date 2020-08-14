import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "./../../component/app-text";
import colors from "../../config/colors";
import ListItem from "../../component/list-item";
const ListDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../../assets/jacket.jpg")} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>Red Jacket</AppText>
        <AppText style={styles.price}>$200</AppText>
      </View>
      <View style={styles.ownerContainer}>
        <ListItem
          subTitle="10 Listings"
          title="Umar Zak"
          image={require("../../assets/mosh.jpg")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  ownerContainer: {
    marginVertical: 30,
  },
  textContainer: {
    padding: 20,
  },
  title: {
    color: "#000",
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    marginTop: 5,
  },
});
export default ListDetailsScreen;
