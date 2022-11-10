import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PAGE_URL = "http://enviroportal.deviant.sazp.sk/api/pages/";

export const getPage = createAsyncThunk(
  "odpadySlice/getPage",
  async (pageId) => {
    try {
      const response = await axios.get(PAGE_URL + pageId);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  data: {},
  loading: false,
  isSuccess: false,
  error: "",
};

const odpadySlice = createSlice({
  name: "odpady",
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
      state.error = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export const odpadyPageData = (state) => state.odpady.data;
export const odpadyIsSuccess = (state) => state.odpady.isSuccess;

export const odpadyActions = odpadySlice.actions;

export default odpadySlice;
