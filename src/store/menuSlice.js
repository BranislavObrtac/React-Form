import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const MENU_URL = "http://enviroportal.deviant.sazp.sk/api/menus";

const initialState = [
  {
    title: "Agendy",
    url: "/",
    submenu: [
      {
        title: "1",
        url: "/1",
      },
      {
        title: "2",
        url: "/2",
      },
    ],
  },
  {
    title: "Témy",
    url: "#",
    submenu: [
      {
        title: "Ochrana prírody",
        url: "/ochrana-prirody",
      },
      {
        title: "Voda",
        url: "/voda",
      },
      {
        title: "Odpady",
        url: "/odpady",
      },
      {
        title: "Ovzdušie",
        url: "/ovzdusie",
      },
      {
        title: "Pôda",
        url: "/poda",
      },
      {
        title: "Zmena klimy",
        url: "/zmena-klimy",
      },
      {
        title: "Udržatelný rozvoj",
        url: "/udrzatelny-rozvoj",
      },
      {
        title: "Environmentálna výchova, vzdelavanie a osveta",
        url: "/enviromentalna-vychovy-vzdelanie-osveta",
      },
    ],
  },
  {
    title: "Stav ŽP",
    url: "/stav-zp",
    submenu: [
      {
        title: "Správy o stave životného prostredia",
        url: "/spravy-o-stave-zivotneho-prostredia",
      },
      {
        title: "Envidat",
        url: "/envidat",
      },
      {
        title: "Sektorové správy",
        url: "/sektorove-spravy",
      },
      {
        title: "Kvalita vody  ",
        url: "/kvalita-vody",
      },
      {
        title: "Kvalita ovzdušia",
        url: "/kvalita-ovzdusia",
      },
    ],
  },
  {
    title: "Dokumenty",
    url: "/dokumenty",
    submenu: [
      {
        title: "Medzinárodné dohovory",
        url: "/medzinarodne-dohovory",
      },
      {
        title: "Legislatíva",
        url: "/legislativa",
      },
      {
        title: "Formuláre a tlačivá",
        url: "/formulare-a-tlaciva",
      },
      {
        title: "Strategické dokumenty",
        url: "/strategicke-dokumenty",
      },
      {
        title: "Metodiky, príručky a iné dokumenty",
        url: "/metodika-prirucky-dokumenty",
      },
    ],
  },
  {
    title: "Mapy a dáta",
    url: "/mapy-a-data",
    submenu: [
      {
        title: "Atlas krajiny Slovenskej republiky",
        url: "/atlas-krajiny-slovenskej-republiky",
      },
      {
        title: "Enviromentálne záťaže",
        url: "/enviromentalne-zataze",
      },
      {
        title: "Národné parky",
        url: "/narodne-parky",
      },
      {
        title: "Eia",
        url: "/eia",
      },
      {
        title: "Degradované územia",
        url: "/degradovane-uzemia",
      },
      {
        title: "Seveso",
        url: "/seveso",
      },
      {
        title: "POPS",
        url: "/pops",
      },
    ],
  },
];

export const getMenu = createAsyncThunk(
  "articleSlice/getArticles",
  async () => {
    try {
      const response = await axios.get(MENU_URL, {
        params: {
          page: "1",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
);

const menuItemsSlice = createSlice({
  name: "menuItems",
  initialState,
  reducers: {},
});

export const allMenuItems = (state) => state.menuItems;

export default menuItemsSlice;
