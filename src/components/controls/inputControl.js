import React from "react";
import { TextField } from "@material-ui/core";

export default function InputControl(props) {
  const { name, label, value, onChange, ...other } = props;
  return (
    <TextField
      variant="outlined"
      value={value}
      name={name}
      label={label}
      onChange={onChange}
      {...other}
    />
  );
}
