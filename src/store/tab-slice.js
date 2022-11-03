import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* const ARTICLES_URL = "https://api.publicapis.org/entries"; */
const ARTICLES_URL =
  "https://enviroportal-48da8-default-rtdb.europe-west1.firebasedatabase.app/slides.json";

export const getArticles = createAsyncThunk(
  "articleSlice/getArticles",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(ARTICLES_URL);
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
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
  name: "tabs",
  initialState,
  reducers: {},
  extraReducers: {
    [getArticles.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getArticles.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getArticles.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export const tabsData = (state) => state.tabs;
export default tabSlice;
