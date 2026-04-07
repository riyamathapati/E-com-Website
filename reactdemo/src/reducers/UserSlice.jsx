import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const userSlice = createSlice({
  name: "user", // name
  initialState, // data
  reducers: {
    loaduser: (state, action) => {
      state.data = action.payload;
      // console.log("from the slice", action);
    },
    removeuser: (state, action) => {
      state.data = null;
    },
  }, // sync action here we can not call the api
});

export const { loaduser,removeuser } = userSlice.actions;

export default userSlice.reducer; /// slice to connect store
