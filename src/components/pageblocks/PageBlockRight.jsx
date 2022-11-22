import React from "react";
import renderHTML from "../../helpers/renderHTML";
import PageMenu from "../pagecomponents/PageMenu";
import styles from "./PageBlockRight.module.scss";

const PageBlockRight = ({ data }) => {
  return (
    <div className={styles["block"]}>
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
    </div>
  );
};

export default PageBlockRight;
