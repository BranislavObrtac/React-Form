import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PAGE_URL = "http://enviroportal.deviant.sazp.sk/api/pages?seoId=";

export const getPage = createAsyncThunk("pageSlice/getPage", async (seoID) => {
  try {
    const response = await axios.get(PAGE_URL + seoID);
    return response.data["hydra:member"][0];
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  data: {},
  isSuccess: false, //fetchovanie dát prebehlo úspešne
  loading: false, //načítava sa
  error: "", //chybova hláška ak nasta chyba pri fetchovaní dát z API
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {},
  extraReducers: {
    [getPage.pending]: (state) => {
      state.loading = true;
    },
    [getPage.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getPage.rejected]: (state, { payload }) => {
      console.log(payload);
      state.error = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export const pageData = (state) => state.page.data;
export const pageDataIsSuccess = (state) => state.page.isSuccess;
export const pageDataError = (state) => state.page.error;

export const pageActions = pageSlice.actions;

export default pageSlice;
