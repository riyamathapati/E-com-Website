import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const userSlice = createSlice({
  name: "user", // name
  initialState, // data
  reducers: {
    loaduser: (state, action) => {
      state.data = action.payload;
      // console.log("from the slice", action);
    },
  }, // action
});

export const { loaduser } = userSlice.actions;

export default userSlice.reducer; /// slice to connect store
