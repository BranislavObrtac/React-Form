import { useSelector } from "react-redux";
import { tabsData } from "../../../../../store/tabSlice";
import ColNewsBig from "./columns/ColNewsBig";

import styles from "./TabPageAktualneDianie.module.scss";

function AktualneDianie() {
  const tabData = useSelector(tabsData).data[0].content;

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
