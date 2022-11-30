import React from "react";
import AtricleSimpleContent from "../../../articles/AtricleSimpleContent";
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
            {data.items.map((data, index) => {
              if (data.type === "simple-content") {
                return (
                  <AtricleSimpleContent
                    key={index}
                    title={data.title}
                    subTitle={data.subtitle}
                    labels={data.labels}
                  />
                );
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
