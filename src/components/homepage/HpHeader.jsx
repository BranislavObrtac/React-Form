import React from "react";
import HpSearch from "./HpSearch";
import styles from "./HpHeader.module.scss";
import { people } from "../../PeopleData";

function HpHeader() {
  return (
    <div className={styles["hp-header"]}>
      <h3 className={styles["hp-header-title"]}>Hľadajte na enviroportáli</h3>
      <div className={styles["bg-image"]}>
        <HpSearch data={people} />
      </div>
      <p className={styles["preskumat"]}>alebo preskúmajte</p>
    </div>
  );
}

export default HpHeader;
