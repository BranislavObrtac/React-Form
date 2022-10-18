import React, { Fragment } from "react";
import styles from "./MainMenu.module.scss";
import { menuItems } from "../../menuItems";
import MenuItem from "./MenuItem";
import UserBar from "./UserBar";
import LangChoice from "./LangChoice";
import { Link } from "react-router-dom";

function MainMenu() {
  return (
    <div className={styles["main-menu"]}>
      <Link className={styles["logo"]} to="/">
        <img
          src="https://vykurovanie.enviroportal.sk/img-loga/logo_enviroportal_web-300x100.png"
          alt="enviroportal logo"
        />
      </Link>
      <nav className={styles["menus"]}>
        {menuItems.map((menu, index) => {
          return <MenuItem items={menu} key={index} index={index} />;
        })}
      </nav>
      <div className={styles["nav-right"]}>
        <UserBar />
        <span className={styles["lang-choice"]}>
          <LangChoice />
        </span>
      </div>
    </div>
  );
}

export default MainMenu;
