import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  Text,
  Image,
  Alert,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./app/component/app-text";
import LoginButton from "./app/component/button";
import WelcomeScreen from "./app/assets/screens/WelcomScreen";
import Card from "./app/component/card";
import ListDetailsScreen from "./app/assets/screens/ListDetailsScreen";
import ViewImageScreen from "./app/assets/screens/ViewImageScreen";
import MessagesScreen from "./app/assets/screens/MessagesScreen";
import MyAccountScreen from "./app/assets/screens/MyAccountScreen";

export default function App() {
  const onPress = () => {
    Alert.alert("Button pressed");
  };
  const { landscape } = useDeviceOrientation();
  return <MyAccountScreen />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    margin: 20,
    marginTop: 100,
    borderRadius: 20,
    overflow: "hidden",
  },
  button: {
    color: "white",
    borderRadius: 10,
    width: 100,
    height: 100,
    left: 100,
  },
});
