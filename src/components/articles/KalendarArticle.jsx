import React from "react";
import styles from "./KalendarArticle.module.scss";

function KalendarArticle({ title, link, date, place, org }) {
  return (
    <article className={styles["kalendar"]}>
      <a href={link}>{title}</a>
      <div className={styles["kalendar-date-place"]}>
        <b>{date} </b> {place}
      </div>
      {org && (
        <div className={styles["kalendar-org"]}>
          <b>Organizátor: </b>
          {org}
        </div>
      )}
    </article>
  );
}

export default KalendarArticle;
