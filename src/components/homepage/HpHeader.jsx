import React from "react";
import styles from "./HpHeader.module.scss";
import HpSearch from "./HpSearch";
import Data from "../../Data.json";

function HpHeader() {
  return (
    <div className={styles["hp-header"]}>
      <h3 className={styles["hp-header-title"]}>Hľadajte na enviroportáli</h3>
      <div className={styles["bg-image"]}>
        <HpSearch placeholder={"Zadajte hľadaný výraz..."} data={Data} />
      </div>
    </div>
  );
}

export default HpHeader;
