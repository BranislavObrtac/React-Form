import { configureStore } from "@reduxjs/toolkit";

import navSlice from "./navSlice";
import menuItemsSlice from "./menuSlice";
import searchSlice from "./searchSlice";
import tabSlice from "./tabSlice";

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
