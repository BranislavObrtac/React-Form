import React from "react";
import styles from "./AgendyVyberObsahu.module.scss";
import SquareIcon from "@mui/icons-material/Square";

function AgendyVyberObsahu({ title, subTitle, zakon, stav }) {
  return (
    <div className={styles["agendy-vyber-obsahu"]}>
      <p className={styles["agendy-title"]}>
        <SquareIcon className={styles["square"]}></SquareIcon>
        {title}
      </p>
      <div className={styles["agendy-subtitle"]}>
        <a href="#">{subTitle}</a>
      </div>
      <p className={styles["agendy-zakon"]}>
        <b>Zákon:</b> {zakon}
      </p>
      <p className={styles["agendy-stav"]}>
        <b>Stav:</b> {stav}
      </p>
    </div>
  );
}

export default AgendyVyberObsahu;
