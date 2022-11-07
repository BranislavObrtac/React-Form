import React from "react";
import ArticleContent from "../../../../../articles/ArticleContent";
import styles from "./ColContent.module.scss";

function ColContent({ data }) {
  return (
    <>
      {data.type === "content" ? (
        <div className={styles["col-content-col"]}>
          <div className={styles["col-content-headers"]}>
            <h2>Výber obsahu</h2>
          </div>
          <div className={styles["col-content-article"]}>
            {data.items.map((data, index) => (
              <ArticleContent
                key={index}
                title={data.title}
                subTitle={data.subtitle}
                labels={data.labels}
              />
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
