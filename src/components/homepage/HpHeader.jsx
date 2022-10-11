import React from "react";
import styles from "./HpHeader.module.scss";
import SearchIcon from "@mui/icons-material/Search";

function HpHeader() {
  return (
    <div className={styles["hp-header"]}>
      <input type="text" name="search" placeholder="Hladat" />
      <SearchIcon />
    </div>
  );
}

export default HpHeader;
