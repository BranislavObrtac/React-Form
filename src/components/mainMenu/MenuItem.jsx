import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import styles from "./MenuItem.module.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link } from "react-router-dom";

function MenuItem({ items, index, hideMenu }) {
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
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </Menu.Button>

          <Menu.Items as="div" key={index} className={styles["menu-items"]}>
            {items.submenu.map((submenu) => (
              <Menu.Item
                as={Link}
                onClick={hideMenu}
                key={submenu + "_" + submenu.title}
                to={submenu.url}
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
