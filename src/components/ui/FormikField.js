import React from "react";
import { ErrorMessage, Field, FastField } from "formik";
import TextField from "@material-ui/core/TextField";

function FormikField({
  label,
  name,
  type = "text",
  required = false,
  fullWidth = true,
  useFastField = true,
}) {
  return (
    <React.Fragment>
      {useFastField ? (
        <FastField
          required={required}
          as={TextField}
          label={label}
          name={name}
          type={type}
          fullWidth={fullWidth}
          helperText={<ErrorMessage name={name} />}
        ></FastField>
      ) : (
        <Field
          required={required}
          as={TextField}
          label={label}
          name={name}
          type={type}
          fullWidth={fullWidth}
          helperText={<ErrorMessage name={name} />}
        ></Field>
      )}
    </React.Fragment>
  );
}

export default FormikField;
