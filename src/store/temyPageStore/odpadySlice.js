import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PAGE_URL = "http://enviroportal.deviant.sazp.sk/api/pages/";
const SIDE_MENU_URL = "http://enviroportal.deviant.sazp.sk/api/menus/";

export const getPage = createAsyncThunk(
  "odpadySlice/getPage",
  async (pageId) => {
    try {
      const response = await axios.get(PAGE_URL + pageId);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getSideMenu = createAsyncThunk(
  "odpadySlice/getSideMenu",
  async (menuId) => {
    try {
      const response = await axios.get(SIDE_MENU_URL + menuId);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  //page data
  data: {},
  loading: false,
  isSuccess: false,
  error: "",
  //side menu data
  sideMenu: {},
  sideMenuId: null,
  isSideMenuLoading: false,
  isSideMenuSuccess: false,
  sideMenuErrorMessage: "",
};

const odpadySlice = createSlice({
  name: "odpady",
  initialState,
  reducers: {
    setSideMenu(state) {
      console.log(state.sideMenuId);
    },
  },
  extraReducers: {
    [getPage.pending]: (state) => {
      state.loading = true;
    },
    [getPage.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;

      let blocks = state.data.block;
      Object.keys(blocks).forEach((key) => {
        if (blocks[key].type === "menu") {
          let menuIdObject = blocks[key].params.menuId; //Getting menu ID prom API
          state.sideMenuId = menuIdObject;
        }
      });
    },
    [getPage.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      state.isSuccess = false;
    },
    //sidemenu
    [getSideMenu.pending]: (state) => {
      state.sideMenuLoading = true;
    },
    [getSideMenu.fulfilled]: (state, { payload }) => {
      state.sideMenuLoading = false;
      state.sideMenu = payload;
      state.isSideMenuSuccess = true;
    },
    [getSideMenu.rejected]: (state, { payload }) => {
      state.sideMenuErrorMessage = payload;
      state.sideMenuLoading = false;
      state.isSideMenuSuccess = false;
    },
  },
});

export const odpadyPageData = (state) => state.odpady.data;
export const odpadyIsSuccess = (state) => state.odpady.isSuccess;
export const odpadySideMenuId = (state) => state.odpady.sideMenuId;
export const odpadyIsSideMenuSuccess = (state) =>
  state.odpady.isSideMenuSuccess;
export const odpadySideMenu = (state) => state.odpady.sideMenu;

export const odpadyActions = odpadySlice.actions;

export default odpadySlice;
