import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { enviroportalUrlApi } from "../common/config";

const PAGE_URL = enviroportalUrlApi + "/pages?seoId=";

export const getPage = createAsyncThunk("pageSlice/getPage", async (seoID) => {
  try {
    const response = await axios.get(PAGE_URL + seoID);
    if (response.data["hydra:totalItems"] === 0) {
      window.location.href = "/404";
    }
    return response.data["hydra:member"][0];
  } catch (error) {
    console.log("ERROR page slice get Page");
    console.log(error);
  }
});

const initialState = {
  data: {},
  isSuccess: false, //fetchovanie dát prebehlo úspešne
  loading: false, //načítava sa
  error: "", //chybova hláška ak nasta chyba pri fetchovaní dát z API
  pageName: "",
  pageLeftData: [],
  pageCenterData: [],
  pageRightData: [],
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {},
  extraReducers: {
    [getPage.pending]: (state) => {
      state.loading = true;
      state.isSuccess = false;
    },
    [getPage.fulfilled]: (state, { payload }) => {
      state.pageLeftData = [];
      state.pageCenterData = [];
      state.pageRightData = [];

      state.loading = false;
      state.data = payload;
      state.pageName = payload.name;
      state.isSuccess = true;

      Object.keys(payload.block).forEach((index) => {
        if (payload.block[index].place === "left") {
          state.pageLeftData = [...state.pageLeftData, payload.block[index]];
        }
        if (payload.block[index].place === "center") {
          state.pageCenterData = [
            ...state.pageCenterData,
            payload.block[index],
          ];
        }
        if (payload.block[index].place === "right") {
          state.pageRightData = [...state.pageRightData, payload.block[index]];
        }
      });
    },
    [getPage.rejected]: (state, { payload }) => {
      console.log("ERROR pageSlice Extra reducer REJECTED");
      state.error = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export const pageData = (state) => state.page.data;
export const pageName = (state) => state.page.pageName;
export const pageDataIsSuccess = (state) => state.page.isSuccess;
export const pageDataError = (state) => state.page.error;
export const pageLeftData = (state) => state.page.pageLeftData;
export const pageCenterData = (state) => state.page.pageCenterData;
export const pageRightData = (state) => state.page.pageRightData;

export const pageActions = pageSlice.actions;

export default pageSlice;
