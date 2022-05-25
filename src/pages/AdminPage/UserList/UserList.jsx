import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { tableRow } from "../../../service/tableData";
import "./userlist.css";
import Header from "../../../components/Header/Header";

export default function UserList() {
  const columns = [
    { field: "id", headerName: "ID", width: 130 },
    {
      field: "userName",
      headerName: "User name",
      width: 250,
    },
    { field: "role", headerName: "Role", width: 250 },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
    {
      field: "status",
      headerName: "Status",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 250,
    },
  ];

  const onCellHandle = (e) => {
    console.log("clicked cell", e.row);
  };

  return (
    <div className="userList">
      <Header
        title="User Analytics"
        description="Here you can view all the user's of the system."
      />
      <DataGrid
        autoPageSize="true"
        style={{ margin: "40px", maxHeight: "500px" }}
        rows={tableRow}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        onCellClick={onCellHandle}
      />
    </div>
  );
}
