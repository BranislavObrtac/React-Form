import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import styles from "./MenuItem.module.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function MenuItem({ items, index }) {
  const [activeBtn, setActiveBtn] = useState(false);

  return (
    <Menu as={"div"} className={styles["menu"]}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`${
              open ? styles["menu-button-active"] : styles["menu-button"]
            }`}
          >
            {items.title}
            <ArrowDropDownIcon />
          </Menu.Button>

          <Menu.Items as="div" key={index} className={styles["menu-items"]}>
            {items.submenu.map((submenu) => (
              <Menu.Item
                as={"a"}
                key={submenu + "_" + submenu.title}
                href={submenu.url}
                className={styles["menu-item"]}
              >
                {({ active }) => (
                  <div
                    className={`${active && styles["menu-item-link-active"]}`}
                  >
                    {submenu.title}
                  </div>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}

export default MenuItem;
