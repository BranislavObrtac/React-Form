import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    activeMenu: {},
    activeSubmenu: {},
  },
  reducers: {
    getLocation(state, action) {
      const menu = action.payload.btn;
      const submenu = action.payload.submenu;
      console.log(menu);
      console.log(submenu);
      state.activeMenu = action.payload.btn;
      state.activeSubmenu = action.payload.submenu;
    },
  },
});

export const navActions = navSlice.actions;

export default navSlice;
