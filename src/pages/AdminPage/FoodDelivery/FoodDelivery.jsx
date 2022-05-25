import {
  Button,
  Grid,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  TableRow,
  TableBody,
  Table,
} from "@material-ui/core";
import { Restaurant, Settings } from "@material-ui/icons";

import React, { useState } from "react";
import ActionButton from "../../../components/controls/actionButtons";
import Header from "../../../components/Header/Header";
import AddNewRestaurant from "../../../components/AddNewRestaurant/AddNewRestaurant";
import Popup from "../../../components/Popup/Popup";
import Popup1 from "../../../components/Popup/Popup";

import "./fooddelivery.css";
import { DataGrid } from "@material-ui/data-grid";

export default function FoodDelivery() {
  const [isPopup, setIsPopup] = useState(false);
  const [openPopupAR, setOpenPopupAR] = useState(false);
  const [currentRest, setCurrentRest] = useState({
    currentRestaurant: null,
  });

  const columns = [
    { field: "restaurantName", headerName: "Agent Name", width: 250 },
    { field: "location", headerName: "Agent Location", width: 250 },
    { field: "something", headerName: "Some THing", width: 250 },
    { field: "otherSomeThing", headerName: "Other something", width: 250 },
  ];

  const AllRest = [
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

  const actionHandler = (row) => {
    console.log(row);
    setIsPopup(true);
    setCurrentRest({
      ...currentRest,
      currentRestaurant: row,
    });
  };

  const openInPopupAR = () => {
    setOpenPopupAR(true);
  };

  return (
    <div className="fooddelivery">
      <Header
        title="Food Delivery"
        description="Here you can add, remove or update any restaurant."
      />
      <Grid container style={{ margin: "25px 50px" }}>
        <Grid item xs={4}>
          <Button
            onClick={openInPopupAR}
            color="primary"
            size="large"
            variant="outlined"
          >
            <Restaurant style={{ marginRight: "15px" }} /> Add new Restaurant.
          </Button>
        </Grid>
      </Grid>
      {/* <div style={{ margin: "50px" }}> */}
      {/* <TableCont        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <h4>Restaurant Name</h4>
                </TableCell>
                <TableCell align="center">
                  <h4>Location</h4>
                </TableCell>
                <TableCell align="center">
                  <h4>something</h4>
                </TableCell>
                <TableCell align="center">
                  <h4>Other something</h4>
                </TableCell>
                <TableCell align="center">
                  <h4>Actions</h4>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {AllRest.map((row) => (
                <TableRow
                  key={row.restaurantName}
                  sx={{ "&:last-child td, &:last-child th": { border: 15 } }}
                >
                  <TableCell>{row.restaurantName}</TableCell>
                  <TableCell align="center">{row.location}</TableCell>
                  <TableCell algin="center">{row.something}</TableCell>
                  <TableCell align="center">{row.otherSomeThing}</TableCell>
                  <TableCell align="center">
                    <ActionButton
                      onClick={() => actionHandler(row)}
                      color="primary"
                      size="small"
                    >
                      <Settings />
                    </ActionButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>ainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <h4>Restaurant Name</h4>
                </TableCell>
                <TableCell align="center">
                  <h4>Location</h4>
                </TableCell>
                <TableCell align="center">
                  <h4>something</h4>
                </TableCell>
                <TableCell align="center">
                  <h4>Other something</h4>
                </TableCell>
                <TableCell align="center">
                  <h4>Actions</h4>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {AllRest.map((row) => (
                <TableRow
                  key={row.restaurantName}
                  sx={{ "&:last-child td, &:last-child th": { border: 15 } }}
                >
                  <TableCell>{row.restaurantName}</TableCell>
                  <TableCell align="center">{row.location}</TableCell>
                  <TableCell algin="center">{row.something}</TableCell>
                  <TableCell align="center">{row.otherSomeThing}</TableCell>
                  <TableCell align="center">
                    <ActionButton
                      onClick={() => actionHandler(row)}
                      color="primary"
                      size="small"
                    >
                      <Settings />
                    </ActionButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> */}
      {/* </div> */}
      <DataGrid
        autoPageSize="true"
        style={{ margin: "40px", maxHeight: "400px" }}
        rows={AllRest}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // onCellClick={() => actionHandler()}
        onRowClick={() => console.log("this is click")}
      />
      <Popup
        title="Make Changes to Restaurant."
        openPopup={isPopup}
        setopenPopup={setIsPopup}
      >
        <h1>this is the popup in res</h1>
      </Popup>
      <Popup1
        title="Add new Restaurant."
        openPopup={openPopupAR}
        setopenPopup={setOpenPopupAR}
      >
        <AddNewRestaurant />
      </Popup1>
    </div>
  );
}
