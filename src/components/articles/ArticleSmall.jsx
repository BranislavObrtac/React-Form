import React from "react";
import { Link } from "react-router-dom";
import styles from "./ArticleSmall.module.scss";

function ArticleSmall({ data }) {
  return data.type === "small-article" ? (
    <article className={styles["small-aricle"]}>
      <img
        className={styles["small-aricle-img"]}
        src={data.img ? data.img : ""}
        alt={data.title ? data.title : "Obrazok"}
      />
      <div className={styles["small-article-info"]}>
        <h2 className={styles["title"]}>
          <a href={data.link ? data.link : "#"}>
            {data.title ? data.title : ""}
          </a>
        </h2>
        <p className={styles["date-category"]}>
          {(data.date ? data.date : "") +
            (data.author ? " -- " + data.author : "")}
          {data.tags
            ? data.tags.map((tag, index) => {
                return (
                  <Link
                    className={styles["date-category"]}
                    to={tag.link}
                    key={index}
                  >
                    {" | " + tag.name}
                  </Link>
                );
              })
            : ""}
        </p>
      </div>
    </article>
  ) : null;
}

export default ArticleSmall;
