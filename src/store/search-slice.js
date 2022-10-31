import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
  { id: 6, name: "Témy Stav ŽP" },
];

const searchSlice = createSlice({
  name: "searchData",
  initialState,
  reducers: {},
});

export const allSearchData = (state) => state.searchData;

export default searchSlice;
