import React from "react";
import renderHTML from "../../helpers/renderHTML";
import PageMenu from "../pagecomponents/PageMenu";
import styles from "./PageBlockRight.module.scss";

const PageBlockRight = ({ data }) => {
  return (
    <aside className={styles["block"]}>
      {data.type === "static" ? renderHTML(data.content) : null}
      {data.type === "menu" ? <PageMenu menuID={data.params.menuId} /> : null}
    </aside>
  );
};

export default PageBlockRight;
