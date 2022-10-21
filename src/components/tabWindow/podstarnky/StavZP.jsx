import React from "react";
import SmallArticle from "../../articles/SmallArticle";
import AgendyDoPozornosti from "../../articles/AgendyDoPozornosti";

//styly
import styles from "./StavZP.module.scss";
import StavZpGrafArticle from "../../articles/StavZpGrafArticle";
import StavZpArticle from "../../articles/StavZpArticle";
import Odkazy from "../../articles/Odkazy";

function StavZP() {
  return (
    <div className={styles["stav-zp"]}>
      <div className={styles["stav-zp-content"]}>
        <div className={styles["stav-zp-col"]}>
          <div className={styles["stav-zp-headers"]}>
            <h1>Prehľad oblasti</h1>
          </div>
          <div className={styles["odkazy"]}>
            <Odkazy link={"#"} title={"Správy o stave životného prostredia"} />
            <Odkazy link={"#"} title={"Envidat"} />
            <Odkazy link={"#"} title={"Sektorové správy"} />
            <Odkazy link={"#"} title={"Kvalita vody"} />
            <Odkazy link={"#"} title={"Kvalita ovzdušia"} />
            <Odkazy link={"#"} title={"Indikátory životného prostredia"} />
          </div>
        </div>
        <div className={styles["stav-zp-col"]}>
          <div className={styles["stav-zp-headers"]}>
            <h1>Výber obsahu</h1>
          </div>
          <div className={styles["stav-zp-article"]}>
            <StavZpGrafArticle
              title={"Envidat"}
              subtitle={
                "Výmera poľnohospodárskej pôdy v ekologickej poľnohospodárskej výrobe"
              }
              graf={
                "https://www.open.edu/openlearn/pluginfile.php/1361832/mod_oucontent/oucontent/69747/99744364/1b3bb1d7/wk8_fig20.tif.jpg"
              }
            />
            <StavZpArticle
              subTitle={
                "Správa o stave životného prostredia Slovenskej republiky v roku 2020"
              }
              title={"ODBORNÁ KONFERENCIA ŽIVOTNÉ PROSTREDIE MIEST"}
            />
            <StavZpArticle
              subTitle={
                "Správa o stave životného prostredia Slovenskej republiky v roku 2020"
              }
              title={"PRIPRAVUJEME KONFERENCIU O ZNEČISTENÝCH ÚZEMIACH"}
            />
          </div>
        </div>
        <div className={styles["stav-zp-col"]}>
          <div className={styles["stav-zp-headers"]}>
            <h1>Do pozornosti</h1>
          </div>
          <div className={styles["stav-zp-article"]}>
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
export default StavZP;
