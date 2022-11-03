import React from "react";
import styles from "./ColMenu.module.scss";
import Odkazy from "../../../../../articles/Odkazy";

function ColMenu({ data }) {
  return (
    <>
      {data && (
        <div className={styles["col-menu-col"]}>
          <div className={styles["col-menu-headers"]}>
            <h2>{data.title}</h2>
          </div>
          <div className={styles["col-menu-odkazy"]}>
            {data.items.map((data, index) => (
              <Odkazy key={index} link={data.link} title={data.name} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ColMenu;
