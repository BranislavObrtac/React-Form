import { configureStore } from "@reduxjs/toolkit";

import searchSlice from "./searchSlice";
import tabSlice from "./homePageStore/tabSlice";
import mainMenuSlice from "./mainMenuSlice";
import odpadySlice from "./temyPageStore/odpadySlice";

const store = configureStore({
  reducer: {
    searchData: searchSlice.reducer,
    tabs: tabSlice.reducer,
    mainMenu: mainMenuSlice.reducer,
    odpady: odpadySlice.reducer,
  },
});
export default store;
