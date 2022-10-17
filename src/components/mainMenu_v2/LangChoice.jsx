import React from "react";
import { langItems } from "../../langItems";
import MenuItems from "./MenuItems";
import styles from "./LangChoice.module.scss";

function LangChoice() {
  return (
    <ul className={styles["menus"]}>
      {langItems.map((menu, index) => {
        const depthLevel = 0;
        return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
      })}
    </ul>
  );
}

export default LangChoice;
