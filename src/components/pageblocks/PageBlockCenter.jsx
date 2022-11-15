import React from "react";
import renderHTML from "../../helpers/renderHTML";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import PageMenu from "../pagecomponents/PageMenu";
import styles from "./PageBlockCenter.module.scss";
const PageBlockCenter = ({ data }) => {
  return (
    <div className={styles["block"]}>
      <Breadcrumbs />
      <main>
        {data.type === "static" ? renderHTML(data.content) : null}
        {data.type === "menu" ? <PageMenu menuID={data.params.menuId} /> : null}
      </main>
    </div>
  );
};

export default PageBlockCenter;
