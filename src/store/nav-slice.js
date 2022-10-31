import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: { activeNavBtn: false },
  reducers: {
    toggle(state) {
      console.log("It is working yeeee ! :)");
    },
  },
});

export const navActions = navSlice.actions;

export default navSlice;
