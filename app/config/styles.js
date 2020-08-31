import { Platform } from "react-native";
import colors from "./colors";

export default {
  text: {
    fontSize: 18,
    color: colors.medium,
    width: "80%",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
