import React, { useState } from "react";
import styles from "./LangChoice.module.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";

/* import { langItems } from "../../langItems";
import MenuItems from "./MenuItems";
import styles from "./LangChoice.module.scss"; */

function LangChoice() {
  const [lang, setLang] = useState("Slovenčina");

  return (
    <div className={styles["lang"]}>
      <Menu as={"div"} className={styles["menu"]}>
        {({ open }) => (
          <>
            <Menu.Button
              className={`${
                open ? styles["menu-button-active"] : styles["menu-button"]
              }`}
            >
              {lang}
              {open ? <ArrowDropUpIcon /> : <KeyboardArrowDownIcon />}
            </Menu.Button>

            <Menu.Items as="div" className={styles["menu-items"]}>
              <Menu.Item as={Link} to={"/en"} className={styles["menu-item"]}>
                {({ active }) => (
                  <div
                    className={`${active && styles["menu-item-link-active"]}`}
                  >
                    Angličtina
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
}

export default LangChoice;
