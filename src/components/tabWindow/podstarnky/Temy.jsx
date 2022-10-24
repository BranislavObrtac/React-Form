import React from "react";
import SmallArticle from "../../articles/SmallArticle";
import AgendyDoPozornosti from "../../articles/AgendyDoPozornosti";

import Odkazy from "../../articles/Odkazy";
//styly
import styles from "./Temy.module.scss";

function Temy() {
  return (
    <div className={styles["temy"]}>
      <div className={styles["temy-content"]}>
        <div className={styles["temy-col"]}>
          <div className={styles["temy-headers"]}>
            <h2>Prehľad oblasti</h2>
          </div>
          <div className={styles["odkazy"]}>
            <Odkazy link={"#"} title={"Ochrana prírody"} />
            <Odkazy link={"#"} title={"Voda"} />
            <Odkazy link={"#"} title={"Odpady"} />
            <Odkazy link={"#"} title={"Poda"} />
            <Odkazy link={"#"} title={"Zmena klimy"} />
            <Odkazy link={"#"} title={"Udržatelný rozvoj"} />
            <Odkazy
              link={"#"}
              title={"Environmentalna vychova, vzdelavanie a osveta"}
            />
          </div>
        </div>
        <div className={styles["temy-col"]}>
          <div className={styles["temy-headers"]}>
            <h2>Do pozornosti</h2>
          </div>
          <div className={styles["temy-article"]}>
            <SmallArticle
              imgUrl={
                "https://cdn.pixabay.com/photo/2017/03/02/16/54/iceland-2111810__340.jpg"
              }
              title={
                "Colníci zaistili 60 pávích pierok, chýbali im doklady potrebné na dovoz"
              }
              datum={"1.7.2020 "}
              kategoria={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
            />
            <SmallArticle
              imgUrl={
                "https://cdn.pixabay.com/photo/2016/11/25/15/14/landscape-1858602__340.jpg"
              }
              title={
                "Colníci zaistili 60 pávích pierok, chýbali im doklady potrebné na dovoz"
              }
              datum={"1.7.2020 "}
              kategoria={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
            />
            <SmallArticle
              imgUrl={
                "https://cdn.pixabay.com/photo/2022/03/31/01/05/bird-7102006__340.jpg"
              }
              title={
                "Colníci zaistili 60 pávích pierok, chýbali im doklady potrebné na dovoz"
              }
              datum={"1.7.2020 "}
              kategoria={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
            />
          </div>
        </div>
        <div className={styles["temy-col"]}>
          <div className={styles["temy-headers"]}>
            <h2>Zaujímavosti</h2>
          </div>
          <div className={styles["temy-article"]}>
            <AgendyDoPozornosti
              title={"ODBORNÁ KONFERENCIA ŽIVOTNÉ PROSTREDIE MIEST"}
              imgUrl={
                "https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816__340.jpg"
              }
            />
            <AgendyDoPozornosti
              title={"PRIPRAVUJEME KONFERENCIU O ZNEČISTENÝCH ÚZEMIACH"}
              imgUrl={
                "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Temy;
