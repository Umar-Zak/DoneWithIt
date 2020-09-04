import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Screen from "../../component/screen";
import AppForm from "../../component/form/app-form";
import * as Yup from "yup";
import AppFormField from "../../component/form/app-form-field";
import AppFormPicker from "../../component/form/app-form-picker";
import SubmitButton from "../../component/form/submit-button";
import CategoryPicker from "../../component/input-components/category-picker";
import FormImagePicker from "../../component/form/form-image-picker";
import useLocation from "./../../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Product Title"),
  price: Yup.number().min(1).max(10000).required().label("Price"),
  categories: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
  images: Yup.array().min(1, "Select at least one image"),
});
const items = [
  {
    value: 2,
    label: "Meat",
    name: "apps",
    color: "white",
    style: { backgroundColor: "red" },
  },
  {
    value: 1,
    label: "Cosmetics",
    name: "email",
    color: "white",
    style: { backgroundColor: "orange" },
  },
  {
    value: 3,
    label: "Books",
    name: "lock",
    color: "white",
    style: { backgroundColor: "blue" },
  },
];
const ListingEditScreen = () => {
  const location = useLocation();

  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{
          title: "",
          categories: "",
          images: [],
          price: "",
          description: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(location)}
      >
        <FormImagePicker name="images" />
        <AppFormField
          autoCorrect={false}
          autoCapitalize="none"
          name="title"
          placeholder="Title"
          maxLength={255}
        />
        <AppFormField
          autoCorrect={false}
          autoCapitalize="none"
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          maxLength={8}
        />
        <AppFormPicker
          placeholder="Categories"
          items={items}
          name="categories"
          PickerItemComponent={CategoryPicker}
          numberOfColumns={3}
        />
        <AppFormField
          autoCorrect={false}
          autoCapitalize="none"
          name="description"
          placeholder="Description"
          keyboardType="default"
          multiline
          numberOfLines={3}
        />
        <SubmitButton title="Post" />
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
export default ListingEditScreen;
