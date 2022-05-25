import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async () => {
    const response = await axios.get(
      "http://localhost:4000/api/product/getallproducts"
    );
    console.log("this is the get all product response", response);
    return response;
  }
);

export const getOneProduct = createAsyncThunk(
  "product/getOneProduct",
  async ({ id }) => {
    const response = await axios.get(
      `http://localhost:4000/api/product/find/${id}`
    );
    return response;
  }
);

export const verifyProduct = createAsyncThunk(
  "product/verifyProduct",
  async ({ id }) => {
    const response = await axios.put(
      `http://localhost:4000/api/product/find/${id}`,
      { verify: true }
    );
    return response;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: {},
    products: null,
    productLoading: false,
    fetchProductError: null,
    updateLoading: false,
    updatedProduct: false,
    unverified: 0,
  },
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.productLoading = true;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      let product = action.payload.data;
      console.log("this is the fullfilled product func.", action);
      state.products = product.data;
      state.productLoading = false;
      // state.unverified = product.data.keys(obj).length;
    },
    [getAllProducts.rejected]: (state, action) => {
      console.log("this is the rejected func in product", action);
      state.fetchProductError = action.error.message;
      state.productLoading = false;
    },
    [getOneProduct.pendeing]: (state) => {
      state.productLoading = true;
    },
    [getOneProduct.fulfilled]: (state, action) => {
      console.log("this is the fullfilled in get one product", action);
    },
    [getOneProduct.rejected]: (state, action) => {
      console.log("this is the rejected func. in get one product", action);
      state.fetchProductError = action.error.message;
    },
    [verifyProduct.pending]: (state) => {
      state.updateLoading = true;
    },
    [verifyProduct.fulfilled]: (state, action) => {
      console.log("this is the fullfilled in the verify product", action);
      state.updatedProduct = true;
      state.product = action.payload.data.data;
    },
    [verifyProduct.rejected]: (state, action) => {
      console.log("this is the rejected fun. in the verify product", action);
    },
  },
});

export default productSlice;
