import React, { useEffect, useState } from "react";
import styles from "./MainMenu.module.scss";
import MenuItem from "./MainMenuMenuItem";
import UserBar from "./MainMenuUserBar";
import LangChoice from "./MainMenuLangChoice";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import HpSearch from "../pages/homepage/HpSearch";

import { useDispatch, useSelector } from "react-redux";
//data
import { allSearchData } from "../../store/searchSlice";
import {
  getMainMenu,
  mainMenuIsSuccess,
  mainMenuButtons,
  mainMenuActions,
} from "../../store/mainMenuSlice";

function MainMenu() {
  const [showMainMenu, setShowMainMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  let location = useLocation();
  const dispatch = useDispatch();

  const searchData = useSelector(allSearchData);
  const isSuccess = useSelector(mainMenuIsSuccess);
  const menuButtons = useSelector(mainMenuButtons);

  useEffect(() => {
    dispatch(getMainMenu());
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(mainMenuActions.setMenuButtons());
    }
  }, [isSuccess, dispatch]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(mainMenuActions.setActiveMenu(location));
    }
  }, [location, dispatch, isSuccess]);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const hideMenu = () => {
    setShowMainMenu(false);
  };

  return (
    <>
      {isSuccess ? (
        <nav className={styles["main-menu"]}>
          <Link
            className={styles["logo"]}
            to="/"
            onClick={() => setShowMainMenu(false)}
          >
            <img
              src="https://vykurovanie.enviroportal.sk/img-loga/logo_enviroportal_web-300x100.png"
              alt="enviroportal logo"
            />
          </Link>
          {(showMainMenu || screenWidth >= 1000) && (
            <div className={styles["menus"]}>
              <div className={styles["menu-search"]}>
                <HpSearch
                  searchMobileMenu={"combobox-input-mobile"}
                  data={searchData}
                />
              </div>
              {Object.keys(menuButtons).map((key, index) => {
                return (
                  <MenuItem
                    hideMenu={hideMenu}
                    items={menuButtons[key]}
                    key={key}
                    index={index}
                  />
                );
              })}
            </div>
          )}
          {(showMainMenu || screenWidth >= 1000) && (
            <div className={styles["nav-right"]}>
              <UserBar />
              <span className={styles["lang-choice"]}>
                <LangChoice />
              </span>
            </div>
          )}
          <IconButton
            className={styles["hamburger"]}
            onClick={() => {
              setShowMainMenu(!showMainMenu);
            }}
          >
            <MenuIcon />
          </IconButton>
        </nav>
      ) : null}
      {/* <Outlet /> */}
    </>
  );
}

export default MainMenu;
