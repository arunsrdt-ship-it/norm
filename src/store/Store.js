import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/RemoveProduct";
import addSingleData from "./slice/AddProduct";
import reducer from "./slice/RemoveProduct";

const doingSlice = configureStore({
  reducer: {
    product: productReducer,
    addData:addSingleData
  },
});

export default doingSlice;
