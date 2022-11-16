import { Menu, Tab } from "@headlessui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getMenu, menuData, isFetchMenuSuccess } from "../../store/menuSlice";
import styles from "./PageMenu.module.scss";
import PageMenuItem from "./PageMenuItem";

const PageMenu = ({ menuID }) => {
  const dispatch = useDispatch();
  const isSuccess = useSelector(isFetchMenuSuccess);
  const menu = useSelector(menuData);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMenu(menuID));
  }, [menuID, dispatch]);

  const onEnterPressed = (event, to) => {
    if (event.key === "Enter") {
      navigate(to);
    }
  };

  return (
    <Tab.Group as={"nav"}>
      <Menu as={"div"} className={styles["menu"]}>
        {isSuccess
          ? Object.keys(menu.children).map((menuKey) => {
              const menuChildren = menu.children[menuKey].children;
              const menuNode = menu.children[menuKey].node;
              if (menuChildren) {
                return (
                  <PageMenuItem
                    key={"key_" + menuKey}
                    index={menuKey}
                    menuChildren={menuChildren}
                    menuNode={menuNode}
                  />
                );
              } else {
                return (
                  <Tab
                    as={NavLink}
                    key={menuNode.id + "_" + menuNode.name}
                    onKeyDown={(event) => onEnterPressed(event, menuNode.link)}
                    to={menuNode.link}
                    className={styles["menu-button"]}
                  >
                    {menuNode.name}
                  </Tab>
                );
              }
            })
          : null}
      </Menu>
    </Tab.Group>
  );
};

export default PageMenu;
