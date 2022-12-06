import React from "react";
import ArticleLinkListItem from "../../../articles/ArticleLinkListItem";
import styles from "./ColLinkList.module.scss";

const ColLinkList = ({ data }) => {
  return data.type === "link-list" ? (
    <div className={styles["link-list"]}>
      {data.items.map((item, index) => {
        return <ArticleLinkListItem data={item} key={index} />;
      })}
    </div>
  ) : null;
};

export default ColLinkList;
