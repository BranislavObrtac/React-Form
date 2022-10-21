import React from "react";
import styles from "./DokumentyDoPozornosti.module.scss";

function DokumentyDoPozornosti({ title, content }) {
  return (
    <article className={styles["dokumenty-do-pozornosti"]}>
      <h1 className={styles["dokumenty-do-pozornosti-title"]}>{title}</h1>
      <div className={styles["dokumenty-do-pozornosti-content"]}>{content}</div>
    </article>
  );
}

export default DokumentyDoPozornosti;
