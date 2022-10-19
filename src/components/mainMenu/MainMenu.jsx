import React, { Fragment, useEffect, useState } from "react";
import styles from "./MainMenu.module.scss";
import { menuItems } from "../../menuItems";
import MenuItem from "./MenuItem";
import UserBar from "./UserBar";
import LangChoice from "./LangChoice";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

function MainMenu() {
  const [showMainMenu, setShowMainMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className={styles["main-menu"]}>
      <Link className={styles["logo"]} to="/">
        <img
          src="https://vykurovanie.enviroportal.sk/img-loga/logo_enviroportal_web-300x100.png"
          alt="enviroportal logo"
        />
      </Link>
      {(showMainMenu || screenWidth >= 1000) && (
        <div className={styles["menus"]}>
          {menuItems.map((menu, index) => {
            return <MenuItem items={menu} key={index} index={index} />;
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
  );
}

export default MainMenu;
