import { configureStore } from "@reduxjs/toolkit";

import navSlice from "./nav-slice";
import menuItemsSlice from "./menuItems-slice";
import searchSlice from "./search-slice";

const store = configureStore({
  reducer: {
    nav: navSlice.reducer,
    menuItems: menuItemsSlice.reducer,
    searchData: searchSlice.reducer,
  },
});

export default store;
