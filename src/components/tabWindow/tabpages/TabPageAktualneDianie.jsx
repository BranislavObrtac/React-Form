import { useState } from "react";
import { useSelector } from "react-redux";
import { tabsData } from "../../../store/tab-slice";
import ColNewsBig from "./columns/ColNewsBig";

import styles from "./TabPageAktualneDianie.module.scss";

function AktualneDianie() {
  const [tabData, setTabData] = useState(useSelector(tabsData).data[0].content);

  return (
    <div className={styles["aktualne-dianie"]}>
      {tabData && (
        <div className={styles["aktualne-dianie-content"]}>
          {tabData.map((data, index) => (
            <ColNewsBig key={index} data={data} />
          ))}
        </div>
      )}
    </div>
  );
}

export default AktualneDianie;
