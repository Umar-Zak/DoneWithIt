import React from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";

import Screen from "../../component/screen";
import AppText from "../../component/app-text";
import colors from "../../config/colors";
import Icon from "../../component/icon";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
  },
  listing: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
    paddingLeft: 30,
    height: 100,
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderBottomColor: "grey",
  },
  listingIcon: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 20,
  },
  text: {
    color: "black",
    fontWeight: "900",
    fontSize: 15,
  },
  lightText: {
    fontWeight: "200",
    color: "grey",
  },
  user: {
    flexDirection: "row",
    width: "100%",
    padding: "8%",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 40,
  },
  userText: {
    paddingTop: 10,
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: "8%",
  },
});

const data = [
  {
    id: "1",
    style: [styles.listingIcon, { backgroundColor: colors.primary }],
    name: "format-list-bulleted",
    text: "My Listings",
    color: "white",
    size: 25,
    topStyle: styles.listing,
    textStyle: styles.text,
  },
  {
    id: "2",
    style: [styles.listingIcon, { backgroundColor: colors.secondary }],
    name: "email",
    text: "My Messages",
    color: "white",
    size: 25,
    topStyle: styles.listing,
    textStyle: styles.text,
  },
  {
    id: "3",
    style: [styles.listingIcon, { backgroundColor: colors.secondary }],
    name: "logout",
    text: "Logout",
    color: "white",
    size: 25,
    topStyle: [styles.listing, { marginTop: 20 }],
    textStyle: styles.text,
  },
];

const MyAccountScreen = () => {
  return (
    <Screen style={styles.container}>
      <View style={styles.user}>
        <Image
          style={styles.userImage}
          source={require("../../assets/profile.png")}
        />
        <View style={styles.userText}>
          <AppText style={styles.text}>Umar Zakaria</AppText>
          <AppText style={styles.lightText}>umarabanga78@gmail.com</AppText>
        </View>
      </View>
      {/* <Icon
        style={[styles.listingIcon, { backgroundColor: colors.primary }]}
        name="format-list-bulleted"
        color="white"
        size={25}
        topStyle={styles.listing}
        text="My Listings"
        textStyle={styles.text}
      />
      <Icon
        style={[styles.listingIcon, { backgroundColor: colors.secondary }]}
        name="email"
        color="white"
        size={25}
        topStyle={styles.listing}
        text="My Messages"
        textStyle={styles.text}
      />
      <Icon
        style={[styles.listingIcon, { backgroundColor: colors.secondary }]}
        name="logout"
        color="white"
        size={25}
        topStyle={[styles.listing, { marginTop: 20 }]}
        text="Logout"
        textStyle={styles.text}
      /> */}

      <FlatList
        data={data}
        keyExtractor={(list) => list.id.toString()}
        renderItem={({ item }) => (
          <Icon
            topStyle={item.topStyle}
            size={item.size}
            text={item.text}
            textStyle={item.textStyle}
            color={item.color}
            style={item.style}
            name={item.name}
          />
        )}
      />
    </Screen>
  );
};

export default MyAccountScreen;
