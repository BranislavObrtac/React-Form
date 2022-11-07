import React from "react";
import styles from "./ArticleContent.module.scss";
import SquareIcon from "@mui/icons-material/Square";
import AgendyDoPozornosti from "./ArticlePromo";

function ArticleContent({ title, subTitle, zakon, stav, imgUrl, link }) {
  return (
    <article className={styles["agendy-vyber-obsahu"]}>
      <p className={styles["agendy-title"]}>
        <SquareIcon className={styles["square"]}></SquareIcon>
        {title}
      </p>
      {imgUrl && <AgendyDoPozornosti imgUrl={imgUrl} />}
      <div className={styles["agendy-subtitle"]}>
        <a href={link}>{subTitle}</a>
      </div>
      {zakon && (
        <p className={styles["agendy-zakon"]}>
          <b>Zákon:</b> {zakon}
        </p>
      )}
      {stav && (
        <p className={styles["agendy-stav"]}>
          <b>Stav:</b> {stav}
        </p>
      )}
    </article>
  );
}

export default ArticleContent;
