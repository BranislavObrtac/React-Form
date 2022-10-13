import React from "react";
import styles from "./SmallArticle.module.scss";

function SmallArticle({ imgUrl, title, datum, kategoria }) {
  return (
    <div className={styles["small-aricle"]}>
      <img src={imgUrl} alt={title} />
      <div>
        <title>{title}</title>
        <p>{datum + " " + kategoria}</p>
      </div>
    </div>
  );
}

export default SmallArticle;
