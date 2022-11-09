import React from "react";
import styles from "./ArticleBig.module.scss";

function ArticleBig({ imgUrl, title, date, category, link }) {
  return (
    <article className={styles["big-article"]}>
      {imgUrl && title ? <img src={imgUrl} alt={title} /> : null}
      <div className={styles["big-article-info"]}>
        {link && title ? (
          <h2 className={styles["title"]}>
            <a href={link}>{title}</a>
          </h2>
        ) : null}
        {date && category ? (
          <p className={styles["date-category"]}>{date + "- " + category}</p>
        ) : null}
      </div>
    </article>
  );
}

export default ArticleBig;
