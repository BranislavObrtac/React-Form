import React from "react";
//import styles
import styles from "./MainMenuMenuItem.module.scss";
//import icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { Menu } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { mainMenuActiveMenuID } from "../../store/mainMenuSlice";
import { useSelector } from "react-redux";

function MenuItem({ items, index, hideMenu }) {
  const activeMenuId = useSelector(mainMenuActiveMenuID);

  return (
    <Menu as={"div"} className={styles["menu"]}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`
                ${activeMenuId === items.node.id ? styles["btn-active"] : ""}
                ${open ? styles["menu-button-active"] : styles["menu-button"]}
                `}
          >
            {items.node.name ? items.node.name : ""}
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </Menu.Button>

          <Menu.Items as="div" key={index} className={styles["menu-items"]}>
            {items.children
              ? Object.keys(items.children).map((key) => {
                  if (items.children[key]) {
                    let submenu = items.children[key].node;
                    return (
                      <Menu.Item
                        as={NavLink}
                        onClick={hideMenu}
                        key={submenu.name + "_" + submenu.parentID}
                        to={submenu.link}
                        className={styles["menu-item"]}
                      >
                        {({ active }) => (
                          <div
                            className={`${
                              active && styles["menu-item-link-active"]
                            }`}
                          >
                            {submenu.name}
                          </div>
                        )}
                      </Menu.Item>
                    );
                  }
                  return null;
                })
              : null}
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}

export default MenuItem;

/*   useEffect(() => {
    setBtnActive(false);
    let insideOfUrl;
    items.submenu.map((submenu) => {
      insideOfUrl = window.location.href
        .toLowerCase()
        .includes(submenu.url.toLowerCase());
      if (insideOfUrl === true) {
        setBtnActive(true);
        return dispatch(
          navActions.activeMenus({ btn: items, submenu: submenu })
        );
      }
    });
  }, [location, dispatch, items]); */
