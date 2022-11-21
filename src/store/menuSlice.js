import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { enviroportalUrl } from "../common/config";

const SIDE_MENU_URL = enviroportalUrl + "/menus/";

export const getMenu = createAsyncThunk("menuSlice/getMenu", async (menuId) => {
  try {
    const response = await axios.get(SIDE_MENU_URL + menuId);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  data: {},
  menuLoading: false,
  isFetchMenuSuccess: false,
  menuMessageError: "",
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setSideMenu(state) {
      console.log(state.sideMenuId);
    },
  },
  extraReducers: {
    [getMenu.pending]: (state) => {
      state.menuLoading = true;
    },
    [getMenu.fulfilled]: (state, { payload }) => {
      state.menuLoading = false;
      state.data = payload;
      state.isFetchMenuSuccess = true;
    },
    [getMenu.rejected]: (state, { payload }) => {
      state.menuMessageError = payload;
      state.menuLoading = false;
      state.isFetchMenuSuccess = false;
    },
  },
});

export const menuData = (state) => state.menu.data;
export const menuLoading = (state) => state.menu.menuLoading;
export const isFetchMenuSuccess = (state) => state.menu.isFetchMenuSuccess;
export const menuMessageError = (state) => state.menu.menuMessageError;

export const menuActions = menuSlice.actions;

export default menuSlice;
