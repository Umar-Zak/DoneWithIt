import React from "react";
import { FlatList } from "react-native";
import Screen from "../../component/screen";
import Card from "../../component/card";
const listings = [
  {
    id: 1,
    title: "Red Jacket",
    price: 34,
    image: require("../../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Neat Couch",
    price: 94,
    image: require("../../assets/couch.jpg"),
  },
];
const ListingsScreen = () => {
  return (
    <Screen>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;
