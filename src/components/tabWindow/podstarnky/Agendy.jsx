import React from "react";
import AgendyVyberObsahu from "../../articles/AgendyVyberObsahu";
import AgendyDoPozornosti from "../../articles/AgendyDoPozornosti";

//styly
import styles from "./Agendy.module.scss";
import Odkazy from "../../articles/Odkazy";

function Agendy() {
  return (
    <div className={styles["agendy"]}>
      <div className={styles["agendy-content"]}>
        <div className={styles["agendy-col"]}>
          <div className={styles["agendy-headers"]}>
            <h2>Prehľad oblasti</h2>
          </div>
          <div className={styles["odkazy"]}>
            <Odkazy link={"#"} title={"Posudzovanie vplyvov na ŽP (EIA/SEA)"} />
            <Odkazy
              link={"#"}
              title={"IPKZ - integrovaná prevencia a kontrola znečisťovania"}
            />
            <Odkazy link={"#"} title={"Environmentálne záťaže"} />
            <Odkazy
              link={"#"}
              title={"Prevencia závažných priemyselných havárií"}
            />
            <Odkazy link={"#"} title={"Monitorovanie životného prostredia"} />
          </div>
        </div>
        <div className={styles["agendy-col"]}>
          <div className={styles["agendy-headers"]}>
            <h2>Výber obsahu</h2>
          </div>
          <div className={styles["agendy-article"]}>
            <AgendyVyberObsahu
              title={"Posudzovanie vplyvov na životné prostredie"}
              subTitle={
                "Pokračovanie v banskej činnosti podľa plánu otvárky, prípravy a dobývania ložiska,, lokalita Mútnik, Hnúšťa na roky 2024-2053"
              }
              zakon={"24/2006 novela 372/2021 Z.z. časť EIA"}
              stav={"Oznámenie"}
            />
            <AgendyVyberObsahu
              title={"Environmentálne záťaže"}
              subTitle={
                "Pokračovanie v banskej činnosti podľa plánu otvárky, prípravy a dobývania ložiska,, lokalita Mútnik, Hnúšťa na roky 2024-2053"
              }
              zakon={"24/2006 novela 372/2021 Z.z. časť EIA"}
              stav={"Oznámenie"}
            />
            <AgendyVyberObsahu
              title={"Posudzovanie vplyvov na životné prostredie"}
              subTitle={
                "Pokračovanie v banskej činnosti podľa plánu otvárky, prípravy a dobývania ložiska,, lokalita Mútnik, Hnúšťa na roky 2024-2053"
              }
              zakon={"24/2006 novela 372/2021 Z.z. časť EIA"}
              stav={"Oznámenie"}
            />
          </div>
        </div>
        <div className={styles["agendy-col"]}>
          <div className={styles["agendy-headers"]}>
            <h2>Do pozornosti</h2>
          </div>
          <div className={styles["agendy-article"]}>
            <AgendyDoPozornosti
              title={"ODBORNÁ KONFERENCIA ŽIVOTNÉ PROSTREDIE MIEST"}
              imgUrl={
                "https://cdn.pixabay.com/photo/2016/11/22/23/18/roses-1851124_960_720.jpg"
              }
            />
            <AgendyDoPozornosti
              title={"PRIPRAVUJEME KONFERENCIU O ZNEČISTENÝCH ÚZEMIACH"}
              imgUrl={
                "https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_960_720.jpg"
              }
            />
            <AgendyDoPozornosti
              title={"PRIPRAVUJEME KONFERENCIU O ZNEČISTENÝCH ÚZEMIACH"}
              imgUrl={
                "https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_960_720.jpg"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Agendy;
