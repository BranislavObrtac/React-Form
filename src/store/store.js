import { configureStore } from "@reduxjs/toolkit";

import searchSlice from "./searchSlice";
import tabSlice from "./homePageStore/tabSlice";
import mainMenuSlice from "./mainMenuSlice";
import menuSlice from "./menuSlice";
import pageSlice from "./pageSlice";

const store = configureStore({
  reducer: {
    searchData: searchSlice.reducer,
    tab: tabSlice.reducer,
    mainMenu: mainMenuSlice.reducer,
    menu: menuSlice.reducer,
    page: pageSlice.reducer,
  },
});
export default store;
