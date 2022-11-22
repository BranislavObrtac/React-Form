import React from "react";
import PageMenu from "../pagecomponents/PageMenu";
import styles from "./PageBlockLeft.module.scss";
import renderHTML from "../../helpers/renderHTML";

const PageBlockLeft = ({ data }) => {
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
          return (
            <PageMenu menuID={data[key].params.menuId} key={"key_" + key} />
          );
        }
        return null;
      })}
    </div>
  );
};

export default PageBlockLeft;
