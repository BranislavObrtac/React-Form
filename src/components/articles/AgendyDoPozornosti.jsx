import React from "react";
import styles from "./AgendyDoPozornosti.module.scss";

function AgendyDoPozornosti({ title, imgUrl }) {
  return (
    <article className={styles["agendy-do-pozornosti"]}>
      <img src={imgUrl}></img>
      {title && <h2 className={styles["agendy-nadpis"]}>{title}</h2>}
    </article>
  );
}

export default AgendyDoPozornosti;
