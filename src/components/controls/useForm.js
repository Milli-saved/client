import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(2),
    },
  },
}));
export function Form(props) {
  const { children, ...other } = props;
  const classes = useStyle();
  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {children}
    </form>
  );
}
