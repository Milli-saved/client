import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducer/userReducer";
import productSlice from "./reducer/productReducer";
import workerSlice from "./reducer/workerReducer";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    product: productSlice.reducer,
    worker: workerSlice.reducer,
  },
});

export default store;
