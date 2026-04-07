import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const cartSlice = createSlice({
  name: "cart", // name
  initialState, // data
  reducers: {
    loadcart: (state, action) => {
      state.data = action.payload;
      // console.log("from the slice", action);
    },
  }, // action
});

export const { loadcart } = cartSlice.actions;

export default cartSlice.reducer; /// slice to connect store
