import React from "react";
import HpSearch from "./HpSearch";
import styles from "./HpHeader.module.scss";
import { people } from "../../../PeopleData";

function HpHeader() {
  return (
    <header className={styles["hp-header"]}>
      <h1 className={styles["hp-header-title"]}>Hľadajte na enviroportáli</h1>
      <div className={styles["bg-image"]}>
        <HpSearch data={people} />
      </div>
      <p className={styles["preskumat"]}>alebo preskúmajte</p>
    </header>
  );
}

export default HpHeader;
