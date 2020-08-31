import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../../component/screen";
import AppForm from "../../component/app-form";
import * as Yup from "yup";
import AppFormField from "../../component/app-form-field";
import AppFormPicker from "../../component/app-form-picker";
import SubmitButton from "../../component/submit-button";
import CategoryPicker from "../../component/category-picker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Product Title"),
  price: Yup.number().min(1).max(10000).required().label("Price"),
  categories: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
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
  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{ title: "", categories: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
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
