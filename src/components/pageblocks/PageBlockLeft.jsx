import React from "react";
import PageMenu from "../pagecomponents/PageMenu";
import styles from "./PageBlockLeft.module.scss";
import renderHTML from "../../helpers/renderHTML";

const PageBlockLeft = ({ data }) => {
  return (
    <aside className={styles["block"]}>
      {data.type === "static" ? renderHTML(data.content) : null}
      {data.type === "menu" ? (
        <PageMenu key={data.params.menuId} menuID={data.params.menuId} />
      ) : null}
    </aside>
  );
};

export default PageBlockLeft;
