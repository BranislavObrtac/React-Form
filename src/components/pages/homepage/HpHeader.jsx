import React from "react";
import HpSearch from "./HpSearch";
import styles from "./HpHeader.module.scss";
import { useSelector } from "react-redux";

import { allSearchData } from "../../../store/search-slice";

function HpHeader() {
  const searchData = useSelector(allSearchData);

  return (
    <header className={styles["hp-header"]}>
      <h1 className={styles["hp-header-title"]}>Hľadajte na enviroportáli</h1>
      <div className={styles["bg-image"]}>
        <HpSearch data={searchData} />
      </div>
      <p className={styles["preskumat"]}>alebo preskúmajte</p>
    </header>
  );
}

export default HpHeader;
