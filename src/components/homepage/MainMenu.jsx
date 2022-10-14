import React, { Fragment } from "react";
import { Menu } from "@headlessui/react";
import styles from "./MainMenu.module.scss";
import { menuItems } from "../../menuItems";
import MenuItem from "./MenuItem";

function MainMenu() {
  return (
    <div className={styles["main-menu"]}>
      {menuItems.map((menu, index) => {
        return <MenuItem items={menu} key={index} index={index} />;
      })}
    </div>
  );
}

export default MainMenu;
