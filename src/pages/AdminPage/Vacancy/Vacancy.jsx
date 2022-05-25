import React from "react";
import { Button, Grid } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { PersonAdd } from "@material-ui/icons";
import Header from "../../../components/Header/Header";
import ActionButton from "../../../components/controls/actionButtons";

import "./vacancy.css";

export default function Vacancy() {
  const columns = [
    { field: "id", headerName: "ID", width: 130 },
    { field: "restaurantName", headerName: "Agent Name", width: 250 },
    { field: "location", headerName: "Agent Location", width: 250 },
    { field: "something", headerName: "Some THing", width: 250 },
    { field: "otherSomeThing", headerName: "Other something", width: 250 },
  ];

  const Allagents = [
    {
      id: 1,
      restaurantName: "Adona Cafe and Restaurant",
      location: "Bethel, A.A, Ethiopia",
      something: "some thing",
      otherSomeThing: "other Some thing",
    },
    {
      id: 2,
      restaurantName: "Jakaranda",
      location: "Weyra, A.A, Ethiopia",
      something: "some thing",
      otherSomeThing: "other Some thing",
    },
    {
      id: 3,
      restaurantName: "Romei Burger",
      location: "Gebriel, A.A, Ethiopia",
      something: "some thing",
      otherSomeThing: "other Some thing",
    },
    {
      id: 4,
      restaurantName: "Fegegta pastury",
      location: "Mebrat, Adama, Ethiopia",
      something: "some thing",
      otherSomeThing: "other Some thing",
    },
  ];

  return (
    <div className="hireHelp">
      <Header
        title="Hire Help"
        description="Add, Remove and update Agents of Hire Help."
      />
      <Grid container style={{ margin: "25px 50px" }}>
        <Grid item xs={4}>
          <Button color="primary" size="large" variant="outlined">
            <PersonAdd style={{ marginRight: "15px" }} /> Add new Agent.
          </Button>
        </Grid>
      </Grid>
      <DataGrid
        autoPageSize="true"
        style={{ margin: "40px", maxHeight: "400px" }}
        rows={Allagents}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
