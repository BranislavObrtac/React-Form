import React, { useEffect } from "react";
import { Menu, Tab } from "@headlessui/react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styles from "./PageMenuItem.module.scss";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const PageMenuItem = ({ menuChildren, menuNode, index }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [url, setUrl] = useState("");
  const location = useLocation();

  useEffect(() => {
    const urlWithoutSlash = location.pathname.substring(1);
    setUrl(urlWithoutSlash);
    setShowMenu(false);
    Object.keys(menuChildren).forEach((key) => {
      let childrenLink = menuChildren[key].node.link;
      if (urlWithoutSlash === childrenLink) {
        setShowMenu(true);
      }
    });
  }, [location, menuChildren]);

  const onMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const onMenuKeyDown = (event) => {
    if (event.key === "Escape") {
      return setShowMenu(false);
    }
    if (event.key === "Enter") {
      return setShowMenu(!showMenu);
    }
  };
  return (
    <div key={"PageMenuItem_" + index}>
      <Tab
        as={Menu.Button}
        onClick={onMenuClick}
        onKeyDown={onMenuKeyDown}
        key={menuNode.name}
        className={`${
          showMenu
            ? styles["menu-button"] + " " + styles["menu-button-active"]
            : styles["menu-button"]
        }`}
      >
        {menuNode.name}
        {showMenu ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </Tab>
      {showMenu ? (
        <Menu.Items
          as="ul"
          static
          key={menuNode.id}
          className={styles["menu-items"]}
        >
          {menuChildren
            ? Object.keys(menuChildren).map((menuChildrenKey) => {
                if (menuChildren[menuChildrenKey]) {
                  return (
                    <li key={menuChildren[menuChildrenKey].node.id}>
                      <Menu.Item
                        as={NavLink}
                        to={menuChildren[menuChildrenKey].node.link}
                        className={styles["menu-item"]}
                      >
                        {({ active }) => (
                          <div
                            key={menuChildrenKey}
                            className={`
                            ${active && styles["menu-item-link-active"]}
                            ${
                              url === menuChildren[menuChildrenKey].node.link &&
                              styles["menu-item-link-active"]
                            }
                            `}
                          >
                            {menuChildren[menuChildrenKey].node.name}
                          </div>
                        )}
                      </Menu.Item>
                    </li>
                  );
                }
                return null;
              })
            : null}
        </Menu.Items>
      ) : null}
    </div>
  );
};
export default PageMenuItem;
