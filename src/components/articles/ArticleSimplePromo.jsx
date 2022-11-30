import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ArticleSimplePromo.module.scss";

function ArticleSimplePromo({ title, imgUrl, alt, link }) {
  return (
    <article className={styles["article-do-pozornosti"]}>
      {imgUrl && alt ? <img src={imgUrl} alt={alt}></img> : null}

      {title && link ? (
        <NavLink to={link} className={styles["article-nadpis"]}>
          {title}
        </NavLink>
      ) : null}
    </article>
  );
}

export default ArticleSimplePromo;
