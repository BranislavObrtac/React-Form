import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { tabsData } from "../../../../../store/homePageStore/tabSlice";
import ColMenu from "./columns/ColMenu";
import ColPromo from "./columns/ColPromo";
import ColContent from "./columns/ColContent";

//styly
import styles from "./TabPageAgendy.module.scss";

function Agendy() {
  const tabData = useSelector(tabsData).data[1].content;

  return (
    <div className={styles["agendy"]}>
      {tabData && (
        <div className={styles["agendy-content"]}>
          {tabData.map((data, index) => (
            <Fragment key={index}>
              {data.type === "menu" && <ColMenu data={data} />}
              {data.type === "content" && <ColContent data={data} />}
              {data.type === "promo" && <ColPromo data={data} />}
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
export default Agendy;
