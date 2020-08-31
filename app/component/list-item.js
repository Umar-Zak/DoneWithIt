import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import AppText from "./app-text";

import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
const ListItem = ({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  showChevron,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor="#f8f4f4" onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View style={styles.textContainer}>
            <AppText numberOfLines={1} style={styles.title}>
              {title}
            </AppText>
            <AppText numberOfLines={2} style={styles.subTitle}>
              {subTitle}
            </AppText>
          </View>
          {showChevron && (
            <MaterialCommunityIcons
              name="chevron-right"
              size={25}
              color={colors.medium}
              style={styles.icon}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
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
    fontSize: 14,
  },
  title: {
    color: colors.medium,
    fontWeight: "600",
    fontSize: 20,
  },

  textContainer: {
    paddingTop: "3%",
    flex: 1,
  },
});
export default ListItem;
