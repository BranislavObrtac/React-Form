import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ArticleSimplePromo.module.scss";

function ArticleSimplePromo({ title, imgUrl, alt, link }) {
  return (
    <article className={styles["article-simple-promo"]}>
      {imgUrl ? <img src={imgUrl} alt={alt ? alt : ""}></img> : null}

      {title ? (
        <NavLink
          to={link ? link : "#"}
          className={styles["article-simple-promo-title"]}
        >
          {title}
        </NavLink>
      ) : null}
    </article>
  );
}

export default ArticleSimplePromo;
