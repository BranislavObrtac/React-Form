import React from "react";
import HpSearch from "../homepage/HpSearch";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={styles["search-page"]}>
      <div className={styles["search-input"]}>
        <HpSearch />
      </div>
    </div>
  );
};

export default Search;
