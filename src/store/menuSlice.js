import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { enviroportalUrl } from "../common/config";

const SIDE_MENU_URL = enviroportalUrl + "/menus/";

export const getMenu = createAsyncThunk(
  "menuSlice/getMenu",
  async (menuId, { getState }) => {
    const menuDataArray = getState().menu.dataArray;
    let isEqual = false;

    if (menuDataArray.length === 0) {
      try {
        const response = await axios.get(SIDE_MENU_URL + menuId);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    } else {
      Object.keys(menuDataArray).forEach((key) => {
        if (menuDataArray[key].id === menuId) {
          isEqual = true;
          return;
        }
      });
    }

    if (isEqual === false) {
      try {
        const response = await axios.get(SIDE_MENU_URL + menuId);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
);

const initialState = {
  dataArray: [],
  menuLoading: false,
  isFetchMenuSuccess: false,
  menuMessageError: "",
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: {
    [getMenu.pending]: (state) => {
      state.menuLoading = true;
    },
    [getMenu.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.menuLoading = false;
        state.isFetchMenuSuccess = true;
        state.dataArray = [...state.dataArray, payload];
      }
    },
    [getMenu.rejected]: (state, { payload }) => {
      state.menuMessageError = payload;
      state.menuLoading = false;
      state.isFetchMenuSuccess = false;
    },
  },
});

export const menuDataArray = (state) => state.menu.dataArray;
export const menuLoading = (state) => state.menu.menuLoading;
export const isFetchMenuSuccess = (state) => state.menu.isFetchMenuSuccess;
export const menuMessageError = (state) => state.menu.menuMessageError;

export const menuActions = menuSlice.actions;

export default menuSlice;
