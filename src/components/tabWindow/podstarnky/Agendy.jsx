import React from "react";
import AgendyVyberObsahu from "../../articles/AgendyVyberObsahu";
import AgendyDoPozornosti from "../../articles/AgendyDoPozornosti";

//styly
import styles from "./Agendy.module.scss";

function Agendy() {
  return (
    <div className={styles["agendy"]}>
      <div className={styles["agendy-content"]}>
        <div className={styles["agendy-left"]}>
          <div className={styles["agendy-headers"]}>
            <h1>Prehľad oblasti</h1>
          </div>
          <div className={styles["odkazy"]}>
            <a href="#">Posudzovanie vplyvov na ŽP (EIA/SEA)</a>
            <a href="#">
              IPKZ - integrovaná prevencia a kontrola znečisťovania
            </a>
            <a href="#">Environmentálne záťaže</a>
            <a href="#">Prevencia závažných priemyselných havárií</a>
            <a href="#">Monitorovanie životného prostredia</a>
            <a href="#">Krajine planovanie</a>
          </div>
        </div>
        <div className={styles["agendy-middle"]}>
          <div className={styles["agendy-headers"]}>
            <h1>Výber obsahu</h1>
          </div>
          <div className={styles["agendy-middle-articles"]}>
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
        <div className={styles["agendy-right"]}>
          <div className={styles["agendy-headers"]}>
            <h1>Do pozornosti</h1>
          </div>
          <div className={styles["agendy-right-articles"]}>
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
          </div>
        </div>
      </div>
    </div>
  );
}
export default Agendy;
