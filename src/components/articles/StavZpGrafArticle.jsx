import React from "react";
import styles from "./StavZpGrafArticle.module.scss";
import SquareIcon from "@mui/icons-material/Square";

function StavZpGrafArticle({ title, subtitle, graf }) {
  return (
    <div className={styles["stav-zp-graf"]}>
      <p className={styles["stav-zp-title"]}>
        <SquareIcon className={styles["square"]}></SquareIcon>
        {title}
      </p>
      <img src={graf} alt="" />
      <div className={styles["stav-zp-subtitle"]}>
        <a href="#">{subtitle}</a>
      </div>
    </div>
  );
}

export default StavZpGrafArticle;
