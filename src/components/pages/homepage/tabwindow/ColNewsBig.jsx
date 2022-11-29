import React from "react";
import ArticleBig from "../../../articles/ArticleBig";
import ArticleSmall from "../../../articles/ArticleSmall";
import styles from "./ColNewsBig.module.scss";

function ColNewsBig({ data }) {
  return (
    <>
      {data.type === "col-news-big" && (
        <div className={styles["cbn-col"]}>
          <div className={styles["cbn-headers"]}>
            <h2>{data.title}</h2>
          </div>
          <div className={styles["cbn-articles"]}>
            {data.items.map((item, index) => (
              <div key={index}>
                {item.type === "big-article" && (
                  <ArticleBig
                    imgUrl={item.icon}
                    title={item.title}
                    date={item.date}
                    category={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
                  />
                )}
                {item.type === "small-article" && (
                  <ArticleSmall
                    imgUrl={item.icon}
                    title={item.title}
                    date={item.date}
                    category={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ColNewsBig;
