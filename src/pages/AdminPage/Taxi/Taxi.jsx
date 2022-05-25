import { Button, Grid } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React from "react";
import Header from "../../../components/Header/Header";

import "./taxi.css";

export default function Taxi() {
  const columns = [
    { field: "restaurantName", headerName: "Driver Name", width: 250 },
    { field: "location", headerName: "Agent Location", width: 250 },
    { field: "something", headerName: "Some THing", width: 250 },
    { field: "otherSomeThing", headerName: "Other something", width: 250 },
    { field: "isdriverV", headerName: "Is Verified", width: 200 },
  ];

  const AllRest = [
    {
      id: 1,
      restaurantName: "Adona Cafe and Restaurant",
      location: "Bethel, A.A, Ethiopia",
      something: "some thing",
      otherSomeThing: "other Some thing",
      isdriverV: "Verified",
    },
    {
      id: 2,
      restaurantName: "Jakaranda",
      location: "Weyra, A.A, Ethiopia",
      something: "some thing",
      otherSomeThing: "other Some thing",
      isdriverV: "Verified",
    },
    {
      id: 3,
      restaurantName: "Romei Burger",
      location: "Gebriel, A.A, Ethiopia",
      something: "some thing",
      otherSomeThing: "other Some thing",
      isdriverV: "Verified",
    },
    {
      id: 4,
      restaurantName: "Fegegta pastury",
      location: "Mebrat, Adama, Ethiopia",
      something: "some thing",
      otherSomeThing: "other Some thing",
      isdriverV: "Verified",
    },
  ];

  return (
    <div className="taxi">
      <Header
        title="Taxi'ye"
        description="Add new drivers, update and remove current drivers"
      />
      <Grid container style={{ margin: "25px 50px" }}>
        <Grid item xs={4}>
          <Button color="secondary" size="large" variant="outlined">
            Add new Driver
          </Button>
        </Grid>
        <Grid item xs={8}>
          <h1>Add new driver and change other staff members.</h1>
        </Grid>
      </Grid>
      <DataGrid
        autoPageSize="true"
        style={{ margin: "40px", maxHeight: "400px" }}
        rows={AllRest}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        onRowClick={() => console.log("this is click")}
      />
    </div>
  );
}
