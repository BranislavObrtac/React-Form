import { Menu, Tab } from "@headlessui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
  getMenu,
  isFetchMenuSuccess,
  menuDataArray,
} from "../../store/menuSlice";
import { mainMenuUrlWithoutSlash } from "../../store/mainMenuSlice";
import styles from "./PageMenu.module.scss";
import PageMenuItem from "./PageMenuItem";
import { useState } from "react";

const PageMenu = ({ menuID }) => {
  const [menu, setMenu] = useState({});
  const [fetchedData, setFetchedData] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isSuccess = useSelector(isFetchMenuSuccess);
  const menuArray = useSelector(menuDataArray);
  const urlWithoutSlash = useSelector(mainMenuUrlWithoutSlash);

  useEffect(() => {
    dispatch(getMenu(menuID));
  }, [menuID, dispatch]);

  useEffect(() => {
    if (isSuccess) {
      Object.keys(menuArray).forEach((key) => {
        if (menuArray[key].id === menuID) {
          setFetchedData(true);
          setMenu(menuArray[key]);
        }
      });
    }
    return () => {
      setFetchedData(false);
    };
  }, [isSuccess, menuArray, menuID]);

  const onEnterPressed = (event, to) => {
    if (event.key === "Enter") {
      navigate(to);
    }
  };

  return (
    <Tab.Group as={"nav"}>
      <Menu as={"div"} className={styles["menu"]}>
        {isSuccess && fetchedData ? (
          <>
            {Object.keys(menu.children).map((menuKey) => {
              const menuChildren = menu.children[menuKey].children;
              const menuNode = menu.children[menuKey].node;
              if (menuChildren) {
                return (
                  <PageMenuItem
                    key={"PageMenuItem" + menuKey}
                    index={menuKey}
                    menuChildren={menuChildren}
                    menuNode={menuNode}
                    urlWithoutSlash={urlWithoutSlash}
                  />
                );
              } else {
                let setActiveLink = menuNode.link === urlWithoutSlash;

                return (
                  <Tab
                    as={NavLink}
                    key={"NavLink" + menuKey}
                    onKeyDown={(event) => onEnterPressed(event, menuNode.link)}
                    to={menuNode.link}
                    className={
                      setActiveLink
                        ? styles["menu-button"] +
                          " " +
                          styles["menu-button-active"]
                        : styles["menu-button"]
                    }
                  >
                    {menuNode.name}
                  </Tab>
                );
              }
            })}
          </>
        ) : null}
      </Menu>
    </Tab.Group>
  );
};

export default PageMenu;
