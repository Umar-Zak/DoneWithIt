import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import ListingEditScreen from "./app/assets/screens/listing-edit-screen";
import Screen from "./app/component/screen";
import colors from "./app/config/colors";
import ImageInput from "./app/component/input-components/image-input";
import ImageList from "./app/component/input-components/image-list";

export default function App() {
  return <ListingEditScreen />;
}
