import React from "react";
import styles from "./PopularnyObsahBtn.module.scss";

function PopularnyObsahBtn({ title }) {
  return <button className={styles["popularny-obsah-btn"]}>{title}</button>;
}

export default PopularnyObsahBtn;
