import React from "react";
import HpSearch from "./HpSearch";
import styles from "./HpHeader.module.scss";

function HpHeader() {
  return (
    <header className={styles["hp-header"]}>
      <h1 className={styles["hp-header-title"]}>Hľadajte na enviroportáli</h1>
      <div className={styles["bg-image"]}>
        <HpSearch />
      </div>
      <p className={styles["preskumat"]}>alebo preskúmajte</p>
    </header>
  );
}

export default HpHeader;
