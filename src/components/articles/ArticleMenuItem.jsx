import React from "react";
import styles from "./ArticleMenuItem.module.scss";

function ArticleMenuItem({ title, link }) {
  return (
    <div className={styles["odkazy"]}>
      <a href={link}>{title}</a>
    </div>
  );
}

export default ArticleMenuItem;
