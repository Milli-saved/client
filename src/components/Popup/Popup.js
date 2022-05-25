import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { CloseOutlined } from "@material-ui/icons";
import ActionButton from "../controls/actionButtons";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
  dialogTitle: {
    paddingRight: "0px",
  },
}));

export default function Popup(props) {
  const classes = useStyles();

  const { title, children, openPopup, setopenPopup } = props;
  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex" }}>
          <Typography variant="h5" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <ActionButton
            color="seconary"
            onClick={() => {
              setopenPopup(false);
            }}
          >
            <CloseOutlined />{" "}
          </ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
