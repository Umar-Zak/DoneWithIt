import React from "react";
import { useFormikContext } from "formik";
import AppTextInput from "./app-text-input";
import ErrorMessage from "./error-message";
const AppFormField = ({ name, ...otherFields }) => {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherFields}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
};

export default AppFormField;
