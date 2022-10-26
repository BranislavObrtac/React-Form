import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "./Breadcrumbs.module.scss";

function Breadcrumbs({ title, titleUrl }) {
  let location = useLocation();
  const { id } = useParams();

  return (
    <div className={styles["breadcrumbs"]}>
      <NavLink to={"/"}>
        <HomeIcon className={styles["breadcrumbs-home-icon"]} />
      </NavLink>
      <KeyboardArrowRightIcon className={styles["breadcrumbs-arrow-icon"]} />
      <NavLink className={styles["breadcrumbs-title"]} to={titleUrl}>
        {title}
      </NavLink>
      <KeyboardArrowRightIcon className={styles["breadcrumbs-arrow-icon"]} />
      <NavLink className={styles["breadcrumbs-active-title"]} to={titleUrl}>
        {location.state}
        {id}
      </NavLink>
    </div>
  );
}

export default Breadcrumbs;
