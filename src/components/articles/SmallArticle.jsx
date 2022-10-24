import React from "react";
import styles from "./SmallArticle.module.scss";

function SmallArticle({ imgUrl, title, datum, kategoria }) {
  return (
    <article className={styles["small-aricle"]}>
      <img className={styles["small-aricle-img"]} src={imgUrl} alt={title} />
      <div className={styles["small-article-info"]}>
        <h2 className={styles["title"]}>
          <a href="#">{title}</a>
        </h2>
        <p className={styles["date-category"]}>{datum + "- " + kategoria}</p>
      </div>
    </article>
  );
}

export default SmallArticle;
