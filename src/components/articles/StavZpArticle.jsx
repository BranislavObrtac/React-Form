import React from "react";
import styles from "./StavZpArticle.module.scss";
import SquareIcon from "@mui/icons-material/Square";

function StavZpArticle({ title, subTitle }) {
  return (
    <div className={styles["stav-zp-vyber-obsahu"]}>
      <p className={styles["stav-zp-title"]}>
        <SquareIcon className={styles["square"]}></SquareIcon>
        {title}
      </p>
      <div className={styles["stav-zp-subtitle"]}>
        <a href="#">{subTitle}</a>
      </div>
    </div>
  );
}

export default StavZpArticle;
