import React from "react";
import styles from "./ColMenu.module.scss";
import ArticleMenuItem from "../../../articles/ArticleMenuItem";

function ColMenu({ data }) {
  return (
    <>
      {data.type === "menu" && (
        <div className={styles["col-menu-col"]}>
          <div className={styles["col-menu-headers"]}>
            <h2>{data.title}</h2>
          </div>
          <div className={styles["col-menu-odkazy"]}>
            {data.items.map((data, index) => {
              if (data.type === "menu-item") {
                return (
                  <ArticleMenuItem
                    key={index}
                    link={data.link}
                    title={data.title}
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

export default ColMenu;
