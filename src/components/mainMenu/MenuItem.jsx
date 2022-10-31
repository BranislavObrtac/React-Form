import React, { useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import styles from "./MenuItem.module.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { NavLink, useLocation } from "react-router-dom";

//redux
import { useDispatch } from "react-redux";
import { navActions } from "../../store/nav-slice";

function MenuItem({ items, index, hideMenu }) {
  const [btnActive, setBtnActive] = useState(false);
  let location = useLocation();
  const dispatch = useDispatch();

  const testRedux = () => {
    dispatch(navActions.toggle());
  };

  useEffect(() => {
    setBtnActive(false);
    let insideOfUrl;
    items.submenu.map((submenu) => {
      insideOfUrl = window.location.href
        .toLowerCase()
        .includes(submenu.url.toLowerCase());
      if (insideOfUrl === true) {
        setBtnActive(true);
      }
    });
  }, [location]);

  return (
    <Menu as={"div"} className={styles["menu"]}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`
            ${btnActive === true ? styles["btn-active"] : ""}
            ${open ? styles["menu-button-active"] : styles["menu-button"]}
            `}
            onClick={testRedux}
          >
            {items.title}
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </Menu.Button>

          <Menu.Items as="div" key={index} className={styles["menu-items"]}>
            {items.submenu.map((submenu) => (
              <Menu.Item
                as={NavLink}
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
