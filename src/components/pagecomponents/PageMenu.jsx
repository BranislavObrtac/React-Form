import { Menu } from "@headlessui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getMenu, menuData, isFetchMenuSuccess } from "../../store/menuSlice";
//import icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styles from "./PageMenu.module.scss";

let firstStart = true;

const PageMenu = ({ menuID }) => {
  const dispatch = useDispatch();
  const isSuccess = useSelector(isFetchMenuSuccess);
  const menu = useSelector(menuData);
  const navigate = useNavigate();

  useEffect(() => {
    if (firstStart) {
      dispatch(getMenu(menuID));
      firstStart = false;
    }
  }, [menuID, dispatch]);

  const onEnterPressed = (event, to) => {
    if (event.key === "Enter") {
      navigate(to);
    }
  };

  return (
    <Menu as={"div"} className={styles["menu"]}>
      {({ open }) => (
        <>
          {isSuccess
            ? Object.keys(menu.children).map((menuKey) => {
                const menuChildren = menu.children[menuKey].children;
                const menuNode = menu.children[menuKey].node;
                if (menuChildren) {
                  return (
                    <div key={"key" + menuKey}>
                      <Menu.Button
                        key={menuNode.name}
                        className={`${
                          open
                            ? styles["menu-button"] +
                              " " +
                              styles["menu-button-active"]
                            : styles["menu-button"]
                        }`}
                      >
                        {menuNode.name}
                        {open ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </Menu.Button>
                      <Menu.Items
                        key={menuNode.id}
                        as="div"
                        className={styles["menu-items"]}
                      >
                        {menuChildren
                          ? Object.keys(menuChildren).map((menuChildrenKey) => {
                              if (menuChildren[menuChildrenKey]) {
                                return (
                                  <Menu.Item
                                    as={NavLink}
                                    key={menuChildren[menuChildrenKey].node.id}
                                    to={menuChildren[menuChildrenKey].node.link}
                                    className={styles["menu-item"]}
                                  >
                                    {({ active }) => (
                                      <div
                                        key={menuChildrenKey}
                                        className={`${
                                          active &&
                                          styles["menu-item-link-active"]
                                        }`}
                                      >
                                        {
                                          menuChildren[menuChildrenKey].node
                                            .name
                                        }
                                      </div>
                                    )}
                                  </Menu.Item>
                                );
                              }
                              return null;
                            })
                          : null}
                      </Menu.Items>
                    </div>
                  );
                } else {
                  return (
                    <NavLink
                      key={menuNode.id + "_" + menuNode.name}
                      onKeyDown={(event) =>
                        onEnterPressed(event, menuNode.link)
                      }
                      to={menuNode.link}
                      className={styles["menu-button"]}
                    >
                      {menuNode.name}
                    </NavLink>
                  );
                }
              })
            : null}
        </>
      )}
    </Menu>
  );
};

export default PageMenu;
