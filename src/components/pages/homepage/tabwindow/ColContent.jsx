import React from "react";
import AtricleSimpleContent from "../../../articles/AtricleSimpleContent";
import styles from "./ColContent.module.scss";
import ArticleBig from "../../../articles/ArticleBig";
import ArticleSmall from "../../../articles/ArticleSmall";

function ColContent({ data }) {
  return (
    <>
      {data.type === "content-selection" ? (
        <div className={styles["col-content-col"]}>
          <div className={styles["col-content-headers"]}>
            <h2>{data.title}</h2>
          </div>
          <div className={styles["col-content-article"]}>
            {data.items.map((item, index) => (
              <div key={index}>
                {item.type === "big-article" ? (
                  <ArticleBig data={item} key={index} />
                ) : null}
                {item.type === "simple-content" ? (
                  <AtricleSimpleContent data={item} key={index} />
                ) : null}
                {item.type === "small-article" ? (
                  <ArticleSmall data={item} key={index} />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default ColContent;
