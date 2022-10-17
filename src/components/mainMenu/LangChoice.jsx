import React from "react";
import styles from "./LangChoice.module.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

/* import { langItems } from "../../langItems";
import MenuItems from "./MenuItems";
import styles from "./LangChoice.module.scss"; */

function LangChoice() {
  return (
    <div className={styles["lang"]}>
      Slovenčina <ArrowDropDownIcon />
    </div>
    /* <ul className={styles["menus"]}>
      {langItems.map((menu, index) => {
        const depthLevel = 0;
        return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
      })}
    </ul> */
  );
}

export default LangChoice;
