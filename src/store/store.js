import { configureStore } from "@reduxjs/toolkit";

import searchSlice from "./searchSlice";
import tabSlice from "./tabSlice";
import mainMenuSlice from "./mainMenuSlice";

const store = configureStore({
  reducer: {
    searchData: searchSlice.reducer,
    tabs: tabSlice.reducer,
    mainMenu: mainMenuSlice.reducer,
  },
});
export default store;
