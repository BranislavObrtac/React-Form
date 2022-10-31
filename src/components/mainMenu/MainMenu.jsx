import React, { Fragment, useEffect, useState } from "react";
import styles from "./MainMenu.module.scss";
import MenuItem from "./MenuItem";
import UserBar from "./UserBar";
import LangChoice from "./LangChoice";
import { Link, Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import HpSearch from "../pages/homepage/HpSearch";

import { useSelector } from "react-redux";
//data
import { allMenuItems } from "../../store/menuItems-slice";
import { allSearchData } from "../../store/search-slice";

function MainMenu() {
  const [showMainMenu, setShowMainMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const menuItems = useSelector(allMenuItems);
  const searchData = useSelector(allSearchData);

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
            {menuItems.map((menu, index) => {
              return (
                <MenuItem
                  hideMenu={hideMenu}
                  items={menu}
                  key={index}
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
      <Outlet />
    </>
  );
}

export default MainMenu;
