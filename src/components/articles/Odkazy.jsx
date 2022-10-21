import React from "react";
import styles from "./Odkazy.module.scss";

function Odkazy({ title, link }) {
  return (
    <div className={styles["odkazy"]}>
      <a href={link}>{title}</a>
    </div>
  );
}

export default Odkazy;
