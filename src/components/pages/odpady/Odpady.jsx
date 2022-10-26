import React from "react";
import { people } from "../../../PeopleData";
import HpSearch from "../homepage/HpSearch";
import styles from "./Odpady.module.scss";
import { Tab } from "@headlessui/react";

function Odpady() {
  return (
    <section className={styles["odpady"]}>
      <h1>
        <span className={styles["odpady-nadpis-od"]}>Od</span>pady
      </h1>
      <div className={styles["odpady-bg-image"]}></div>
      <div className={styles["odpady-content"]}>
        <Tab.Group vertical>
          <aside className={styles["odpady-aside"]}>
            <div className={styles["wrapper-aside-search"]}>
              <HpSearch
                searchMobileMenu={"combobox-input-mobile"}
                data={people}
              />
            </div>
            <nav>
              <Tab.List>
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 3</Tab>
              </Tab.List>
            </nav>
          </aside>
          <main className={styles["odpady-main"]}>
            <Tab.Panels>
              <Tab.Panel>
                Problematiku odpadov upravuje zákon č. 79/2015 Z. z. o odpadoch.
                Zákon vymedzuje kľúčové pojmy, stanovuje základné požiadavky pre
                odpadové hospodárstvo a povinnosti prevádzkovateľov zariadení,
                ktoré vykonávajú činnosti nakladania s odpadom. Definuje tiež
                súbor činností zameraných na predchádzanie a obmedzovanie vzniku
                odpadov, na nakladanie s odpadmi a znižovanie ich nebezpečnosti
                pre životné prostredie. Zákon určuje aj hierarchiu odpadového
                hospodárstva, ktorej cieľom je minimalizovať nepriaznivé vplyvy
                odpadov na životné prostredie a zefektívniť zdroje odpadového
                hospodárstva. Hierarchia odpadového hospodárstva stanovuje 5
                možných spôsobov nakladania s odpadmi, pričom posledná možnosť
                je najnevhodnejšia: ,<br></br>
                <br></br>
                1. predchádzanie vzniku odpadu,,<br></br>
                2. príprava na opätovné použitie, ,<br></br>
                3. recyklácia, ,<br></br>
                4. iné zhodnocovanie,, napr. energetické zhodnocovanie,{" "}
                <br></br>
                5. zneškodňovanie.<br></br>
                <br></br>
                Odkloniť sa od, spôsobu nakladania s odpadom je možné iba pri
                určitých prúdoch odpadov. Konkrétne podmienky stanovuje zákon o
                odpadoch.
              </Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
          </main>
        </Tab.Group>
      </div>
    </section>
  );
}

export default Odpady;
