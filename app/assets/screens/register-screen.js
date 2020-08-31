import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import Screen from "../../component/screen";
import AppFormField from "../../component/app-form-field";
import AppForm from "../../component/app-form";
import SubmitButton from "./../../component/submit-button";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("User Name"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().min(8).required().label("Password"),
});

const RegisterScreen = () => {
  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="name"
          icon="email"
          placeholder="User Name"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <AppFormField
          name="email"
          icon="email"
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
          keyBoardType="emailAddress"
        />
        <AppFormField
          name="password"
          icon="lock"
          placeholder="Password"
          autoCorrect={false}
          autoCapitalize="none"
          keyBoardType="password"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
};
const styles = StyleSheet.create({
  screen: {
    marginVertical: 70,
    alignItems: "center",
  },
});

export default RegisterScreen;
