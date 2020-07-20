import React from "react";
import { ErrorMessage, Field } from "formik";
import TextField from "@material-ui/core/TextField";

function FormikField({
  label,
  name,
  type = "text",
  required = false,
  fullWidth = false
}) {
  return (
    <Field
      required={required}
      autoComplete="off"
      as={TextField}
      label={label}
      name={name}
      type={type}
      fullWidth={fullWidth}
      InputLabelProps={{
        shrink: true
      }}
      helperText={<ErrorMessage name={name} />}
    ></Field>
  );
}

export default FormikField;
