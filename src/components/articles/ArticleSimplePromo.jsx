import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ArticleSimplePromo.module.scss";

function ArticleSimplePromo({ data }) {
  return data.type === "simple-promo" ? (
    <article className={styles["article-simple-promo"]}>
      {data.img ? (
        <img src={data.img} alt={data.alt ? data.alt : ""}></img>
      ) : null}

      {data.title ? (
        <NavLink
          to={data.link ? data.link : "#"}
          className={styles["article-simple-promo-title"]}
        >
          {data.title}
        </NavLink>
      ) : null}
    </article>
  ) : null;
}

export default ArticleSimplePromo;
