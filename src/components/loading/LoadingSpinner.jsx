import React from "react";
import styles from "./LoadingSpinner.module.scss";

function LoadingSpinner() {
  return (
    <div className={styles["lds-roller"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default LoadingSpinner;
