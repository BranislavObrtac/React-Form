import React from "react";
import styles from "./AtricleSimpleContent.module.scss";
import SquareIcon from "@mui/icons-material/Square";
import ArticleSimplePromo from "./ArticleSimplePromo";

function AtricleSimpleContent({ data }) {
  return (
    <article className={styles["article-simple-content"]}>
      {data.title ? (
        <p className={styles["article-simple-content-title"]}>
          <SquareIcon className={styles["square"]}></SquareIcon>
          {data.title}
        </p>
      ) : null}
      {data.img ? (
        <ArticleSimplePromo
          imgUrl={data.img ? data.img : ""}
          link={data.link ? data.link : "#"}
        />
      ) : null}
      {data.subtitle ? (
        <div className={styles["article-simple-content-subtitle"]}>
          <a href={data.link ? data.link : "#"}>{data.subtitle}</a>
        </div>
      ) : null}

      {data.labels.map((item, index) => {
        return (
          <p className={styles["article-simple-content-label"]} key={index}>
            <b>{item.label ? item.label : ""}</b>{" "}
            {item.text ? ": " + item.text : ""}
          </p>
        );
      })}
    </article>
  );
}

export default AtricleSimpleContent;
