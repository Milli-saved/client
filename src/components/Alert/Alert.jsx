import React from "react";
import "./alert.css";

export function AlertSuccess(props) {
  return (
    <div className="alert alert-success" role="alert">
      This is the success message.
    </div>
  );
}

export function AlertInfo(props) {
  return (
    <div className="alert alert-info" role="alert">
      This is the info message.
    </div>
  );
}
export function AlertWarning(props) {
  return (
    <div className="alert alert-warning" role="alert">
      This is the warning message.
    </div>
  );
}

export function AlertDanger(props) {
  return (
    <div className="alert alert-danger" role="alert">
      {props.notification}
    </div>
  );
}
