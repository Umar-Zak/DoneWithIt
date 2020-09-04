import React from "react";
import { View, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import ImageList from "../input-components/image-list";
import ErrorMessage from "../error-message";

const FormImagePicker = ({ name }) => {
  const { values, setFieldValue, errors, touched } = useFormikContext();

  const handleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      values[name].filter((imageUri) => imageUri !== uri)
    );
  };
  return (
    <View style={styles.container}>
      <ImageList
        imageUris={values[name]}
        onRemoveImage={handleRemove}
        onAddImage={handleAdd}
      />
      <View style={styles.error}>
        <ErrorMessage visible={touched[name]} error={errors[name]} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { width: "95%", height: 110 },
  error: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FormImagePicker;
