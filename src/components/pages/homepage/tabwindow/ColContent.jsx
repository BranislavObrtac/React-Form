import React from "react";
import AtricleSimpleContent from "../../../articles/AtricleSimpleContent";
import AtricleSmall from "../../../articles/ArticleSmall";
import styles from "./ColContent.module.scss";

function ColContent({ data }) {
  return (
    <>
      {data.type === "content-selection" ? (
        <div className={styles["col-content-col"]}>
          <div className={styles["col-content-headers"]}>
            <h2>{data.title}</h2>
          </div>
          <div className={styles["col-content-article"]}>
            {data.items.map((item, index) => {
              if (item.type === "simple-content") {
                return (
                  <AtricleSimpleContent
                    key={index}
                    title={item.title}
                    subTitle={item.subtitle}
                    labels={item.labels}
                  />
                );
              }
              if (item.type === "content-selection") {
                return <AtricleSmall data={item} />;
              }
              return null;
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default ColContent;
