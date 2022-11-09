import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "./Breadcrumbs.module.scss";

import {
  mainMenuActiveMenuID,
  mainMenuActiveSubmenuID,
  mainMenuActions,
  mainMenuMenuObject,
  mainMenuSubmenuObject,
} from "../../store/mainMenuSlice";
import { useSelector, useDispatch } from "react-redux";

let fisrtStart = true;

function Breadcrumbs() {
  const dispatch = useDispatch();

  const activeMenuId = useSelector(mainMenuActiveMenuID);
  const activeSubmenuId = useSelector(mainMenuActiveSubmenuID);
  const menuObject = useSelector(mainMenuMenuObject);
  const submenuObject = useSelector(mainMenuSubmenuObject);

  useEffect(() => {
    if (fisrtStart) {
      fisrtStart = false;
      return;
    }
    if (activeMenuId === 0) {
      return;
    }
    dispatch(mainMenuActions.getMenu(activeMenuId));
    dispatch(
      mainMenuActions.getSubmenu({
        menuId: activeMenuId,
        submenuId: activeSubmenuId,
      })
    );
  }, [activeMenuId, activeSubmenuId, dispatch]);

  return (
    <div className={styles["breadcrumbs"]}>
      <NavLink to={"/"}>
        <HomeIcon className={styles["breadcrumbs-home-icon"]} />
      </NavLink>
      <KeyboardArrowRightIcon className={styles["breadcrumbs-arrow-icon"]} />

      {menuObject ? (
        <>
          <p className={styles["breadcrumbs-title"]}>{menuObject.name}</p>
          <KeyboardArrowRightIcon
            className={styles["breadcrumbs-arrow-icon"]}
          />
        </>
      ) : null}

      {submenuObject ? (
        <>
          <NavLink
            className={styles["breadcrumbs-title"]}
            to={submenuObject.link}
          >
            {submenuObject.name}
          </NavLink>
          <KeyboardArrowRightIcon
            className={styles["breadcrumbs-arrow-icon"]}
          />
        </>
      ) : null}

      <p className={styles["breadcrumbs-active-title"]}>{}</p>
    </div>
  );
}

export default Breadcrumbs;
