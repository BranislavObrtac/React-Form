import React from "react";
import styles from "./AtricleSimpleContent.module.scss";
import SquareIcon from "@mui/icons-material/Square";
import AgendyDoPozornosti from "./ArticlePromo";

function AtricleSimpleContent({ title, subTitle, zakon, stav, imgUrl, link }) {
  return (
    <article className={styles["article-simple-content"]}>
      {title ? (
        <p className={styles["article-simple-content-title"]}>
          <SquareIcon className={styles["square"]}></SquareIcon>
          {title}
        </p>
      ) : null}

      {imgUrl && link ? (
        <AgendyDoPozornosti imgUrl={imgUrl} link={link} />
      ) : null}

      {subTitle ? (
        <div className={styles["article-simple-content-subtitle"]}>
          <a href={link}>{subTitle}</a>
        </div>
      ) : null}

      {zakon ? (
        <p className={styles["article-simple-content-zakon"]}>
          <b>Zákon:</b> {zakon}
        </p>
      ) : null}

      {stav ? (
        <p className={styles["article-simple-content-stav"]}>
          <b>Stav:</b> {stav}
        </p>
      ) : null}
    </article>
  );
}

export default AtricleSimpleContent;
