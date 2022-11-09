import React from "react";
import styles from "./ArticleSmall.module.scss";

function ArticleSmall({ imgUrl, title, date, category, link }) {
  return (
    <article className={styles["small-aricle"]}>
      {imgUrl && title ? (
        <img className={styles["small-aricle-img"]} src={imgUrl} alt={title} />
      ) : null}
      <div className={styles["small-article-info"]}>
        {title && link ? (
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

export default ArticleSmall;
