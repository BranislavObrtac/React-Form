import { useSelector } from "react-redux";
import { tabsData } from "../../../../../store/homePageStore/tabSlice";
import ColNewsBig from "./columns/ColNewsBig";

import styles from "./TabPageAktualneDianie.module.scss";

function AktualneDianie() {
  const tabData = useSelector(tabsData).data[0].content;

  return (
    <div
      className={styles["aktualne-dianie"]}
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_960_720.jpg")`,
      }}
    >
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
