import React from "react";
import styles from "./ArticleSmall.module.scss";

function ArticleSmall({ imgUrl, title, date, category }) {
  return (
    <article className={styles["small-aricle"]}>
      <img className={styles["small-aricle-img"]} src={imgUrl} alt={title} />
      <div className={styles["small-article-info"]}>
        <h2 className={styles["title"]}>
          <a href="#">{title}</a>
        </h2>
        <p className={styles["date-category"]}>{date + "- " + category}</p>
      </div>
    </article>
  );
}

export default ArticleSmall;
