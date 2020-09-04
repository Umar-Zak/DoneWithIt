import React from "react";
import AppPicker from "../input-components/app-picker";
import { useFormikContext } from "formik";
import ErrorMessage from "../error-message";

const AppFormPicker = ({
  items,
  name,
  placeholder,
  PickerItemComponent,
  numberOfColumns,
}) => {
  const { values, errors, setFieldValue, touched } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        selectedItem={values[name]}
        PickerItemComponent={PickerItemComponent}
        onSelectedItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        numberOfColumns={numberOfColumns}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
};

export default AppFormPicker;
