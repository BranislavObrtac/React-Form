import React from "react";
import styles from "./ArticleBig.module.scss";

function ArticleBig({ imgUrl, title, date, category }) {
  return (
    <article className={styles["big-article"]}>
      <img src={imgUrl} alt={title} />
      <div className={styles["big-article-info"]}>
        <h2 className={styles["title"]}>
          <a href="#">{title}</a>
        </h2>
        <p className={styles["date-category"]}>{date + "- " + category}</p>
      </div>
    </article>
  );
}

export default ArticleBig;
