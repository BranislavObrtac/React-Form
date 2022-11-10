import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

const MAIN_MENU_URL = "http://enviroportal.deviant.sazp.sk/api/menus/1";

export const getMainMenu = createAsyncThunk(
  "mainMenuSlice/getMainMenu",
  async () => {
    try {
      const response = await axios.get(MAIN_MENU_URL);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  data: {}, //hlavne menu z API http://enviroportal.deviant.sazp.sk/api/menus/1
  menu: [], //hlavne menu Buttony + ich Submenu
  activeMenuID: 0, //hlavne menu button ID ak som na stránke témy ID=639
  activeSubmenuID: 0, //submenu ak som na stránke temy/odpady ID=644
  menuObject: {}, //Ak som v odpadoch tak: info o Temach => {@type: 'Menu', id: 639, name: 'Témy', link: '/odpady', parentId: 1, …}
  submenuObject: {}, //Ak som v odpadoch tak: ifo o Odpadoch => {@type: 'Menu', id: 644, name: 'Odpady', link: 'odpady', parentId: 639, …}
  isSuccess: false, //fetchovanie dát prebehlo úspešne
  loading: false, //načítava sa
  error: "",
};

const mainMenuSlice = createSlice({
  name: "mainMenu",
  initialState,
  reducers: {
    setMenuButtons(state) {
      if (state.isSuccess) {
        let menu = current(state.data.children);
        Object.keys(menu).forEach((key) => {
          if (menu[key]) {
            state.menu = [...state.menu, menu[key]];
          }
        });
      }
    },
    setActiveMenu(state, { payload }) {
      if (state.menu) {
        state.menu.forEach((menuButton) => {
          if (menuButton.children) {
            let submenu = current(menuButton.children);
            Object.keys(submenu).forEach((key) => {
              // mapping menu items
              if (submenu[key].node) {
                let link = submenu[key].node.link; //getting link of each menu item
                let isLinkEqual = payload.pathname //compering links
                  .toLowerCase()
                  .includes(link.toLowerCase());
                if (isLinkEqual) {
                  state.activeMenuID = submenu[key].node.parentId;
                  state.activeSubmenuID = submenu[key].node.id;
                }
                if (payload.pathname === "/") {
                  state.activeMenuID = 0;
                  state.activeSubmenuID = 0;
                }
              }
            });
          }
        });
      }
    },
    setMenu(state, { payload }) {
      if (state.isSuccess) {
        let menuChildren = current(state.data.children); //getting all children from menu API
        Object.keys(menuChildren).forEach((key) => {
          if (menuChildren[key].node) {
            let menu = menuChildren[key].node;
            if (menu.id === payload) {
              state.menuObject = menu;
            }
          }
        });
      }
    },
    setSubmenu(state, { payload }) {
      if (state.isSuccess) {
        let menuChildren = current(state.data.children);
        Object.keys(menuChildren).forEach((key) => {
          if (menuChildren[key]) {
            let menuId = menuChildren[key].node.id; // getting menu IDs from API
            if (menuId === payload.menuId) {
              let excatMenuChildren = menuChildren[key].children; // getting manu children acording to menu id

              Object.keys(excatMenuChildren).forEach((key) => {
                //mapping all children
                let excatMenuChildrenObject = excatMenuChildren[key].node;
                if (excatMenuChildrenObject.id === payload.submenuId) {
                  //getting exact submenu copering children ID with parameter submenu id
                  state.submenuObject = excatMenuChildrenObject;
                }
              });
            }
          }
        });
      }
    },
  },
  extraReducers: {
    [getMainMenu.pending]: (state) => {
      state.loading = true;
    },
    [getMainMenu.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getMainMenu.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export const mainMenuData = (state) => state.mainMenu.data;
export const mainMenuMessage = (state) => state.mainMenu.message;
export const mainMenuIsSuccess = (state) => state.mainMenu.isSuccess;
export const mainMenuLoading = (state) => state.mainMenu.loading;
export const mainMenuButtons = (state) => state.mainMenu.menu;
export const mainMenuActiveMenuID = (state) => state.mainMenu.activeMenuID;
export const mainMenuActiveSubmenuID = (state) =>
  state.mainMenu.activeSubmenuID;
export const mainMenuMenuObject = (state) => state.mainMenu.menuObject;
export const mainMenuSubmenuObject = (state) => state.mainMenu.submenuObject;

export const mainMenuActions = mainMenuSlice.actions;

export default mainMenuSlice;
