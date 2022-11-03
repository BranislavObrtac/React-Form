import React from "react";
import DokumentyDoPozornosti from "../../../../articles/DokumentyDoPozornosti";
import Odkazy from "../../../../articles/Odkazy";
import ArticlePromo from "../../../../articles/ArticlePromo";
import ArticleContent from "../../../../articles/ArticleContent";

//styly
import styles from "./TabPageDokumenty.module.scss";

function Dokumenty() {
  return (
    <div className={styles["dokumenty"]}>
      {/* <div className={styles["dokumenty-content"]}>
        <div className={styles["dokumenty-col"]}>
          <div className={styles["dokumenty-headers"]}>
            <h2>Prehľad oblasti</h2>
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
        <div className={styles["dokumenty-col"]}>
          <div className={styles["dokumenty-headers"]}>
            <h2>Výber obsahu</h2>
          </div>
          <div className={styles["dokumenty-article"]}>
            <AgendyVyberObsahu
              title={"Medzinárodné dohovory"}
              subTitle={
                "Protokol k Dohovoru o diaľkovom znečisťovaní ovzdušia prechádzajúcom hranicami štátov z roku 1979, o dlhodobom financovaní Programu spolupráce pre monitorovanie a vyhodnocovanie diaľkového šírenia látok znečisťujúcich ovzdušie v Európe (EMEP)"
              }
            />
            <AgendyVyberObsahu
              title={"Medzinárodné dohovory"}
              subTitle={
                "Dohovor o prístupe k informáciám, účasti verejnosti na rozhodovacom procese a prístupe k spravodlivosti v záležitostiach životného prostredia"
              }
            />
            <AgendyVyberObsahu
              title={"Strategické dokumenty"}
              subTitle={
                "Stratégia environmentálnej politiky Slovenskej republiky do roku 2030 (Envirostratégia 2030)"
              }
            />
          </div>
        </div>
        <div className={styles["dokumenty-col"]}>
          <div className={styles["dokumenty-headers"]}>
            <h2>Do pozornosti</h2>
          </div>
          <div className={styles["dokumenty-article"]}>
            <DokumentyDoPozornosti
              title={"INFORMAČNÝ SYSTÉM ENVIRONMENTÁLNYCH CIEĽOV (ISEC)"}
              content={
                "ISEC predstavuje jednotnú platformu pre správu a odpočtovanie relevantných environmentálnych cieľov platných pre SR vychádzajúcich z príslušných národných, či medzinárodných politík."
              }
            />
            <AgendyDoPozornosti
              title={"PRIPRAVUJEME KONFERENCIU O ZNEČISTENÝCH ÚZEMIACH"}
              imgUrl={
                "https://cdn.pixabay.com/photo/2020/08/09/14/25/business-5475660__340.jpg"
              }
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Dokumenty;
