import React from "react";
import { DataGrid } from "@material-ui/data-grid";
// import { tableRow } from "../../service/tableData";

// import { DeleteOutline } from "@material-ui/icons";

import "./datatable.css";

const DataTable = (props) => {
  const { Row, Column } = props;
  return (
    <div className="datatable">
      <DataGrid
        rows={Row}
        columns={Column}
        onPageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};

export default DataTable;
