import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./NotFound.module.scss";
import { pageDataError } from "../../../store/pageSlice";

function NotFound() {
  const error = useSelector(pageDataError);

  return (
    <div className={styles["not-found"]}>
      <p className={styles["not-found-404"]}>404</p>
      <div>{error}</div>
    </div>
  );
}

export default NotFound;
