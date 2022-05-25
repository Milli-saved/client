import React from "react";

import "./header.css";

export default function Header(props) {
  const { title, description } = props;
  return (
    <div className="header">
      <h1 className="headerName">{title}</h1>
      <div>
        <div style={{ display: "block" }}>{description}</div>
      </div>
    </div>
  );
}
