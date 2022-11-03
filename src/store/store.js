import { configureStore } from "@reduxjs/toolkit";

import navSlice from "./nav-slice";
import menuItemsSlice from "./menuItems-slice";
import searchSlice from "./search-slice";
import tabSlice from "./tab-slice";

const store = configureStore({
  reducer: {
    nav: navSlice.reducer,
    menuItems: menuItemsSlice.reducer,
    searchData: searchSlice.reducer,
    tabs: tabSlice.reducer,
  },
});
export const navActions = navSlice.actions;
export default store;
