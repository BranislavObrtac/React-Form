import React from "react";
import styles from "./MapyDataArticle.module.scss";

function MapyData({ imgUrl, title, content, link }) {
  return (
    <article className={styles["mapy-data"]}>
      <img src={imgUrl} alt="" />
      <a href={link}>{title}</a>
      <div> {content} </div>
    </article>
  );
}

export default MapyData;
