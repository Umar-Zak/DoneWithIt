import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../../component/screen";
import AppFormField from "./../../component/app-form-field";
import SubmitButton from "./../../component/submit-button";
import AppForm from "../../component/app-form";
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/logo-red.png")}
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          keyBoardType="emailAddress"
          autoCapitalize="none"
          icon="email"
          placeholder="Email"
          name="email"
        />
        <AppFormField
          autoCorrect={false}
          secureTextEntry
          keyBoardType="password"
          autoCapitalize="none"
          icon="lock"
          placeholder="Password"
          name="password"
        />
        <SubmitButton style={styles.button} title="Login" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 70,
    marginBottom: 30,
  },
  button: {
    marginVertical: 70,
  },
  container: {
    alignContent: "center",
    alignItems: "center",
  },
});
export default LoginScreen;
