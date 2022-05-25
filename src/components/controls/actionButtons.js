import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    minWidth: 0,
    margin: theme.spacing(0.5),
  },
  secondary: {
    backgroundColor: "#bdb08e",
    "& .MuiButton-label": {
      color: theme.palette.secondary.main,
    },
  },
  primary: {
    backgroundColor: "#bdb08e",
    "& .MuiButton-label": {
      color: theme.palette.primary.main,
    },
  },
}));

export default function ActionButton(props) {
  const classes = useStyle();
  const { size, color, children, onClick } = props;
  return (
    <Button
      size={size}
      className={`${classes.root} ${classes[color]}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
