import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchData: [
    { id: 1, name: "Durward Reynolds" },
    { id: 2, name: "Kenton Towne" },
    { id: 3, name: "Therese Wunsch" },
    { id: 4, name: "Benedict Kessler" },
    { id: 5, name: "Katelyn Rohan" },
    { id: 6, name: "Témy Stav ŽP" },
  ],
  resultData: [],
  query: "",
};

const searchSlice = createSlice({
  name: "searchData",
  initialState,
  reducers: {
    getResultData(state, action) {
      const query = action.payload;
      const data = state.searchData;
      let results = [];
      if (query === "") {
      } else {
        results = data.filter((searchData) => {
          return searchData.name.toLowerCase().includes(query.toLowerCase());
        });
      }
      state.resultData = [...results];
    },
  },
});

export const searchQuery = (state) => state.searchData.query;
export const allSearchData = (state) => state.searchData.searchData;
export const resultData = (state) => state.searchData.resultData;

export const { getResultData } = searchSlice.actions;

export default searchSlice;
