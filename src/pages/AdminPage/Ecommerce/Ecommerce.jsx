import React from "react";
import Header from "../../../components/Header/Header";
import InaBox from "../../../components/InaBox/InaBox";
import DataTable from "../../../components/DataTable/DataTable";
// import tableRow from "../../../service/tableData";
// import { DataGrid } from "@material-ui/data-grid";

import "./ecommerce.css";
import { DataGrid } from "@material-ui/data-grid";

const Row = [
  {
    id: 1,
    userName: "Fanuel Haftu",
    role: "Admin",
    email: "fanuelhaftu@gmail.com",
    status: "active",
  },
  {
    id: 2,
    userName: "Million Tenkir",
    role: "Admin",
    email: "milliontenkir@gmail.com",
    status: "active",
  },
  {
    id: 3,
    userName: "Kedir Bashir",
    role: "sells",
    email: "kedirbashir@gmail.com",
    status: "active",
  },
  {
    id: 4,
    userName: "Amanuel Abera",
    role: "delivery",
    email: "amanuelabera@gmail.com",
    status: "active",
  },
  {
    id: 5,
    userName: "Belay Sisay",
    role: "client",
    email: "belaysisay@gmail.com",
    status: "negative",
  },
];

const column = [
  // { field: "id", headerName: "ID", width: 130 },
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
    sortable: false,
    width: 200,
  },
];

export default function Ecommerce() {
  return (
    <div className="ecommerce">
      <Header
        title="Ecommerce"
        description="this is more description about ecommerce."
      />
      <InaBox />
      {/* <DataGrid
        rows={Row}
        columns={columns}
        onPageSize={5}
        rowsPerPageOptions={[5]}
      /> */}
      {/* <DataTable Row={Row} Columns={Column} /> */}
      <DataGrid
        style={{ margin: "40px", maxHeight: "400px" }}
        autoPageSize="false"
        //onSelectionModelChange={(row) => console.log(row)}
        rows={Row}
        columns={column}
        pageSize={5}
        rowsPerPageOptions={[5]}
        onRowClick={() => console.log(params.rows)}
      />
    </div>
  );
}
