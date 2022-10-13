import React from "react";
import styles from "./BigArticle.module.scss";

function BigArticle({ imgUrl, title, datum, kategoria }) {
  return (
    <div className={styles["big-article"]}>
      <img src={imgUrl} alt={title} />
      <h2 className={styles["title"]}>
        <a href="#">{title}</a>
      </h2>
      <p className={styles["date-category"]}>{datum + "- " + kategoria}</p>
    </div>
  );
}

export default BigArticle;
