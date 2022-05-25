import React, { useEffect, useReducer, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import Header from "../../../components/Header/Header";
import "./verifyitems.css";
import { PlaylistAdd } from "@material-ui/icons";
import ActionButton from "../../../components/controls/actionButtons";
import Popup from "../../../components/Popup/Popup";
import VerifyItemPopup from "../../../components/verifyItemPopup/VerifyItemPopup";
import { getAllProducts } from "../../../store/reducer/productReducer";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader/Loader";
import { AlertDanger } from "../../../components/Alert/Alert";

export default function VerifyItems() {
  const dispatch = useDispatch();

  const [removeId, setRemoveId] = useState(null);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const { products, fetchProductError, unverified } = useSelector(
    (state) => state.product
  );

  const [isPopup, setIsPopup] = useState(false);
  const [row, setRow] = useState({
    currentRow: null,
  });
  const [unverifiedNumber, setUnverifiedNumber] = useState(unverified);

  if (removeId) {
    console.log("second time fetching data.", removeId);
    dispatch(getAllProducts());
    setRemoveId(null);
  }
  let filterUnverified = [];
  if (products !== null) {
    let productArray = Object.values(products);

    const checkverified = (product) => {
      if (product.verify === false) {
        return product;
      }
    };
    filterUnverified = productArray.filter(checkverified);
  }
  setTimeout(console.log("thsi is awaiting", filterUnverified), 3000);
  // setUnverifiedNumber(filterUnverified.length);

  const checkButtonHandler = (row) => {
    setIsPopup(true);
    setRow({
      ...row,
      currentRow: row,
    });
  };

  return (
    <div className="verifyItems">
      <Header
        title="Verify Items"
        description="Here you can Verify products before they are released to the customers of the application.
        Any product that is not verified will not be available on Zembil."
      />
      <div style={{ margin: "50px" }}>
        {fetchProductError !== null && (
          <AlertDanger notification={fetchProductError} />
        )}
        <TableContainer component={Paper}>
          <Table sx={{ midWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  {" "}
                  <h4>Product Name</h4>
                </TableCell>
                <TableCell align="right">
                  <h4>Price</h4>
                </TableCell>
                <TableCell align="right">
                  <h4>Product Brand</h4>
                </TableCell>
                <TableCell align="right">
                  <h4>Product Color</h4>
                </TableCell>
                <TableCell align="right">
                  <h4>Product Category</h4>
                </TableCell>
                <TableCell align="center">
                  <h4>Actions</h4>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products === null ? (
                <Loader />
              ) : filterUnverified !== null ? (
                filterUnverified.map((row) => (
                  <TableRow
                    key={row.productId}
                    sx={{ "&:last-child td, &:last-child th": { border: 5 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.productTitle}
                    </TableCell>
                    <TableCell align="right">{row.orignalPrice}</TableCell>
                    <TableCell align="right">{row.productBrand}</TableCell>
                    <TableCell align="right">{row.productColor}</TableCell>
                    <TableCell align="right">{row.productCategory}</TableCell>
                    <TableCell align="center">
                      <ActionButton
                        color="primary"
                        onClick={() => checkButtonHandler(row)}
                        size="small"
                      >
                        <PlaylistAdd />
                      </ActionButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell component="th" scope="row">
                    No element to show
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Popup title="Veirfy Item" openPopup={isPopup} setopenPopup={setIsPopup}>
        <VerifyItemPopup
          currentRow={row.currentRow}
          close={setIsPopup}
          elementId={setRemoveId}
        />
      </Popup>
    </div>
  );
}
