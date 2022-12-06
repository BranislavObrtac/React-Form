import React from "react";
import { Link } from "react-router-dom";
import styles from "./ArticleLinkListItem.module.scss";

const ArticleLinkListItem = ({ data }) => {
  return (
    <article className={styles["article"]}>
      <h2>{data.title}</h2>
      <ul className={styles["list"]}>
        {data.links
          ? data.links.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.link}>{item.title}</Link>
                </li>
              );
            })
          : null}
      </ul>
    </article>
  );
};

export default ArticleLinkListItem;
