import React, { useEffect } from "react";
import styles from "./AtricleSimpleContent.module.scss";
import SquareIcon from "@mui/icons-material/Square";
import ArticleSimplePromo from "./ArticleSimplePromo";
import { useState } from "react";

function AtricleSimpleContent({ data }) {
  const title = data.title;
  const link = data.link;
  const imgUrl = data.img;
  const subTitle = data.subtitle;

  const [stav, setStav] = useState("");
  const [zakon, setZakon] = useState("");

  useEffect(() => {
    data.labels.forEach((item) => {
      if (item.label === "zákon") {
        setZakon(item.text);
      }
      if (item.label === "stav") {
        setStav(item.text);
      }
    });
  }, [data.labels]);

  return (
    <article className={styles["article-simple-content"]}>
      {title ? (
        <p className={styles["article-simple-content-title"]}>
          <SquareIcon className={styles["square"]}></SquareIcon>
          {title}
        </p>
      ) : null}
      {imgUrl ? (
        <ArticleSimplePromo
          imgUrl={imgUrl ? imgUrl : ""}
          link={link ? link : "#"}
        />
      ) : null}
      {subTitle ? (
        <div className={styles["article-simple-content-subtitle"]}>
          <a href={link ? link : "#"}>{subTitle}</a>
        </div>
      ) : null}
      {zakon !== "" ? (
        <p className={styles["article-simple-content-zakon"]}>
          <b>Zákon:</b> {zakon}
        </p>
      ) : null}
      {stav !== "" ? (
        <p className={styles["article-simple-content-stav"]}>
          <b>Stav:</b> {stav}
        </p>
      ) : null}
    </article>
  );
}

export default AtricleSimpleContent;
