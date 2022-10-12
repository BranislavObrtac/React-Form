import React from "react";
import styles from "./HpHeader.module.scss";
import SearchIcon from "@mui/icons-material/Search";

function HpHeader() {
  return (
    <div className={styles["hp-header"]}>
      <h3 className={styles["hp-header-title"]}>Hľadajte na enviroportáli</h3>
      <input type="text" name="search" placeholder="Hladat" />
    </div>
  );
}

export default HpHeader;
