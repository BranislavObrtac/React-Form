import React from "react";
import KalendarArticle from "../../articles/KalendarArticle";
//styly
import styles from "./Kalendar.module.scss";

function Kalendar() {
  return (
    <div className={styles["kalendar"]}>
      <div className={styles["kalendar-content"]}>
        <div className={styles["kalendar-col"]}>
          <div className={styles["kalendar-headers"]}>
            <h2>Najbližšie udalosti</h2>
          </div>
          <div className={styles["kalendar-articles"]}>
            <KalendarArticle
              title={"Next (Green) Generation EU"}
              link={"#"}
              date={"13.10.2022 - 13.10.2022"}
              place={"Einpark, Bratislava"}
              org={"EURACTIV"}
            />
            <KalendarArticle
              title={"Next (Green) Generation EU"}
              link={"#"}
              date={"13.10.2022 - 13.10.2022"}
              place={"Einpark, Bratislava"}
              org={"EURACTIV"}
            />
            <KalendarArticle
              title={"EIA/SEA 2022"}
              link={"#"}
              date={"11.10.2022 - 12.10.2022"}
              place={"Hotel Senec, Senec"}
              org={"Slovenská agentúra životného prostredia"}
            />
            <KalendarArticle
              title={"EIA/SEA 2022"}
              link={"#"}
              date={"11.10.2022 - 12.10.2022"}
              place={"Hotel Senec, Senec"}
              org={"Slovenská agentúra životného prostredia"}
            />
          </div>
        </div>
        <div className={styles["kalendar-col"]}>
          <div className={styles["kalendar-headers"]}>
            <h2>Environmentálne významné dni</h2>
          </div>
          <div className={styles["kalendar-articles"]}>
            <KalendarArticle
              title={"Svetový deň divej prírody"}
              link={"#"}
              date={"13.10.2022"}
            />
            <KalendarArticle
              title={"Svetový deň divej prírody"}
              link={"#"}
              date={"13.10.2022"}
            />
            <KalendarArticle
              title={"Svetový deň divej prírody"}
              link={"#"}
              date={"13.10.2022"}
            />
            <KalendarArticle
              title={"Svetový deň divej prírody"}
              link={"#"}
              date={"13.10.2022"}
            />
            <KalendarArticle
              title={"Svetový deň divej prírody"}
              link={"#"}
              date={"13.10.2022"}
            />
          </div>
        </div>
        <div className={styles["kalendar-col"]}>
          <div className={styles["kalendar-articles-right"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            luctus tempus nisl, sed hendrerit nulla vestibulum et. Sed eget odio
            eu nulla varius convallis. Nunc id m
            <div className={styles["kalendar-articles-right-btn"]}>
              <button>Pridať akciu</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kalendar;
