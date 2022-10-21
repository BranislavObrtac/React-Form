import React from "react";
import DokumentyDoPozornosti from "../../articles/DokumentyDoPozornosti";
import StavZpArticle from "../../articles/StavZpArticle";
import Odkazy from "../../articles/Odkazy";

//styly
import styles from "./Dokumenty.module.scss";
import AgendyDoPozornosti from "../../articles/AgendyDoPozornosti";

function Dokumenty() {
  return (
    <div className={styles["dokumenty"]}>
      <div className={styles["dokumenty-content"]}>
        <div className={styles["dokumenty-col"]}>
          <div className={styles["dokumenty-headers"]}>
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
        <div className={styles["dokumenty-col"]}>
          <div className={styles["dokumenty-headers"]}>
            <h1>Výber obsahu</h1>
          </div>
          <div className={styles["dokumenty-article"]}>
            <StavZpArticle
              title={"Medzinárodné dohovory"}
              subTitle={
                "Protokol k Dohovoru o diaľkovom znečisťovaní ovzdušia prechádzajúcom hranicami štátov z roku 1979, o dlhodobom financovaní Programu spolupráce pre monitorovanie a vyhodnocovanie diaľkového šírenia látok znečisťujúcich ovzdušie v Európe (EMEP)"
              }
            />
            <StavZpArticle
              title={"Medzinárodné dohovory"}
              subTitle={
                "Dohovor o prístupe k informáciám, účasti verejnosti na rozhodovacom procese a prístupe k spravodlivosti v záležitostiach životného prostredia"
              }
            />
            <StavZpArticle
              title={"Strategické dokumenty"}
              subTitle={
                "Stratégia environmentálnej politiky Slovenskej republiky do roku 2030 (Envirostratégia 2030)"
              }
            />
          </div>
        </div>
        <div className={styles["dokumenty-col"]}>
          <div className={styles["dokumenty-headers"]}>
            <h1>Do pozornosti</h1>
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
      </div>
    </div>
  );
}

export default Dokumenty;
