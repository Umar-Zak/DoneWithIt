import React from "react";
import { useFormikContext } from "formik";

import LoginButton from "../input-components/button";
const SubmitButton = ({ title, style }) => {
  const { handleSubmit } = useFormikContext();
  return <LoginButton style={style} title={title} onPress={handleSubmit} />;
};

export default SubmitButton;
