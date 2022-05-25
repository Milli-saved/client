import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";


const useStyle = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
  Label: {
    textTransform: "none",
  },
}));

export default function ButtonControl(props) {
  const { text, size, color, variant, onClick, ...other } = props;
  const classes = useStyle();

  return (
    <MuiButton
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      onClick={onClick}
      {...other}
      classes={{ root: classes.root, label: classes.Label }}
    >
      {text}
    </MuiButton>
  );
}
