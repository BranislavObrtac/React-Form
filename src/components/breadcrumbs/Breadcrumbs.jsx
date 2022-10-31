import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "./Breadcrumbs.module.scss";

import { useSelector } from "react-redux";

function Breadcrumbs() {
  let location = useLocation();
  const activeMenu = useSelector((state) => state.nav.activeMenu);
  const activeSubmenu = useSelector((state) => state.nav.activeSubmenu);

  return (
    <div className={styles["breadcrumbs"]}>
      <NavLink to={"/"}>
        <HomeIcon className={styles["breadcrumbs-home-icon"]} />
      </NavLink>
      <KeyboardArrowRightIcon className={styles["breadcrumbs-arrow-icon"]} />

      <p className={styles["breadcrumbs-title"]}>{activeMenu.title}</p>
      <KeyboardArrowRightIcon className={styles["breadcrumbs-arrow-icon"]} />

      <NavLink className={styles["breadcrumbs-title"]} to={activeSubmenu.url}>
        {activeSubmenu.title}
      </NavLink>
      <KeyboardArrowRightIcon className={styles["breadcrumbs-arrow-icon"]} />

      <p className={styles["breadcrumbs-active-title"]}>{location.state}</p>
    </div>
  );
}

export default Breadcrumbs;
