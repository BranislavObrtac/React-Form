import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ArticlePromo.module.scss";

function ArticlePromo({ title, imgUrl, alt, link }) {
  return (
    <article className={styles["agendy-do-pozornosti"]}>
      <img src={imgUrl} alt={alt}></img>
      {title && (
        <NavLink to={link} className={styles["agendy-nadpis"]}>
          {title}
        </NavLink>
      )}
    </article>
  );
}

export default ArticlePromo;
