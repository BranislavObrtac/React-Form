import React from "react";
import styles from "./ArticleBig.module.scss";

function ArticleBig({ data }) {
  const title = data.title;
  const imgUrl = data.icon;
  const date = data.date;
  const link = data.link;
  const category = data.category;

  return (
    <article className={styles["big-article"]}>
      <img src={imgUrl ? imgUrl : ""} alt={title ? title : ""} />
      <div className={styles["big-article-info"]}>
        <h2 className={styles["title"]}>
          <a href={link ? link : "#"}>{title ? title : ""}</a>
        </h2>
        <p className={styles["date-category"]}>
          {(date ? date : "") +
            (date && category ? "-" : "") +
            (category ? category : "")}
        </p>
      </div>
    </article>
  );
}

export default ArticleBig;
