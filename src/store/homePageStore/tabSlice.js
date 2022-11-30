import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const TAB_URL = "http://enviroportal.deviant.sazp.sk/api/homepages/main";

export const getArticles = createAsyncThunk(
  "articleSlice/getArticles",
  async () => {
    try {
      const response = await axios.get(TAB_URL);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  data: [],
  message: "",
  isSuccess: false,
  loading: false,
};

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {},
  extraReducers: {
    [getArticles.pending]: (state) => {
      state.loading = true;
    },
    [getArticles.fulfilled]: (state, { payload }) => {
      state.loading = false;
      //state.data = payload;
      state.data = payload.content.slider.slides;
      state.isSuccess = true;
    },
    [getArticles.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export const tabsData = (state) => state.tab;
export const tabDataIsSuccess = (state) => state.tab.isSuccess;

export default tabSlice;
