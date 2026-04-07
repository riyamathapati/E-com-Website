import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const productSlice = createSlice({
  name: "product", // name
  initialState, // data
  reducers: {
    loadproduct: (state, action) => {
      state.data = action.payload;
      // console.log("from the slice", action);
    },
  }, // action
});

export const { loadproduct } = productSlice.actions;

export default productSlice.reducer; /// slice to connect store
