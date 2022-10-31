import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    activeMenu: {},
    activeSubmenu: {},
  },
  reducers: {
    activeMenus(state, action) {
      state.activeMenu = action.payload.btn;
      state.activeSubmenu = action.payload.submenu;
    },
  },
});

export const navActions = navSlice.actions;

export default navSlice;
