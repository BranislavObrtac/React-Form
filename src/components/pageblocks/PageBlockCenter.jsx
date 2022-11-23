import React from "react";
import renderHTML from "../../helpers/renderHTML";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import PageMenu from "../pagecomponents/PageMenu";
import styles from "./PageBlockCenter.module.scss";

const PageBlockCenter = ({ data }) => {
  return data.length !== 0 ? (
    <div className={styles["block"]}>
      <Breadcrumbs />
      <main className={styles["block-main"]}>
        {Object.keys(data).map((key) => {
          if (data[key].type === "static") {
            return renderHTML(data[key].content, key);
          }
          if (data[key].type === "pageContent") {
            return renderHTML(data[key].content, key);
          }
          if (data[key].type === "menu") {
            return <PageMenu menuID={data[key].params.menuId} key={key} />;
          }
          return null;
        })}
      </main>
    </div>
  ) : null;
};

export default PageBlockCenter;
