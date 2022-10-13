import React from "react";
import styles from "./SmallArticle.module.scss";

function SmallArticle({ imgUrl, title, datum, kategoria }) {
  return (
    <div className={styles["small-aricle"]}>
      <img className={styles["small-aricle-img"]} src={imgUrl} alt={title} />
      <div>
        <h2 className={styles["title"]}>{title}</h2>
        <p className={styles["date-category"]}>{datum + "- " + kategoria}</p>
      </div>
    </div>
  );
}

export default SmallArticle;
