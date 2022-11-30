import React from "react";
import ArticleSimplePromo from "../../../articles/ArticleSimplePromo";
import styles from "./ColPromo.module.scss";

function ColPromo({ data }) {
  console.log(data);
  return (
    <>
      {data.type === "promo" && (
        <div className={styles["col-promo-col"]}>
          <div className={styles["col-promo-headers"]}>
            <h2>{data.title}</h2>
          </div>
          <div className={styles["col-promo-article"]}>
            {data.items.map((data, index) => {
              if (data.type === "simple-promo") {
                return (
                  <ArticleSimplePromo
                    key={index}
                    title={data.title}
                    alt={data.alt}
                    link={data.link}
                    imgUrl={data.img}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default ColPromo;
