import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Formik } from "formik";
import { StyleSheet } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LoginScreen from "./app/assets/screens/LoginScreen";
import RegisterScreen from "./app/assets/screens/register-screen";
import AppFormPicker from "./app/component/app-form-picker";
import ListingEditScreen from "./app/assets/screens/listing-edit-screen";
import MessagesScreen from "./app/assets/screens/MessagesScreen";

export default function App() {
  return <ListingEditScreen />;
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
