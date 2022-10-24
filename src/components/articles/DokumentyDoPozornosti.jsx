import React from "react";
import styles from "./DokumentyDoPozornosti.module.scss";

function DokumentyDoPozornosti({ title, content }) {
  return (
    <article className={styles["dokumenty-do-pozornosti"]}>
      <h2 className={styles["dokumenty-do-pozornosti-title"]}>{title}</h2>
      <div className={styles["dokumenty-do-pozornosti-content"]}>{content}</div>
    </article>
  );
}

export default DokumentyDoPozornosti;
