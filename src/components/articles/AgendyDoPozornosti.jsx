import React from "react";
import styles from "./AgendyDoPozornosti.module.scss";

function AgendyDoPozornosti({ title, imgUrl }) {
  return (
    <div className={styles["agendy-do-pozornosti"]}>
      <img src={imgUrl}></img>
      <h2 className={styles["agendy-nadpis"]}>{title}</h2>
    </div>
  );
}

export default AgendyDoPozornosti;
