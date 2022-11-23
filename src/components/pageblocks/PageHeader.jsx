import React from "react";
import HpSearch from "../pages/homepage/HpSearch";
import styles from "./PageHeader.module.scss";

const PageHeader = ({ title }) => {
  return (
    <header className={styles["page-header"]}>
      <h1 className={styles["page-header-title"]}>{title}</h1>
      <div className={styles["page-header-search"]}>
        <HpSearch />
      </div>
    </header>
  );
};

export default PageHeader;
