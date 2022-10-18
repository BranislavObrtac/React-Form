import React, { useState } from "react";
import styles from "./LangChoice.module.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
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
              <ArrowDropDownIcon />
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
