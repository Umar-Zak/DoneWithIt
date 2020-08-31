import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Constants from "expo-constants";
import ListItem from "./../../component/list-item";
import Screen from "../../component/screen";
import ListItemSeparator from "./../../component/list-item-separator";
import ListItemDeleteAction from "./../../component/list-item-delete-action";
const initialMessages = [
  {
    id: 1,
    title: "Umar Zak",
    description: "Hey dude, can we have chat about your desk posted?",
    image: require("../../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Mark",
    description: "That's a nice couch right there. Any discount available?",
    image: require("../../assets/mosh.jpg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [resfreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
            showChevron={true}
            onPress={() => console.log("pressed", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={false}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "f1",
              description: "f2",
              image: require("../../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default MessagesScreen;
