import React from "react";
import HpSearch from "../homepage/HpSearch";
import styles from "./Odpady.module.scss";
import { Tab } from "@headlessui/react";
import { NavLink, useNavigate } from "react-router-dom";
import SmallArticle from "../../articles/ArticleSmall";
import ArticlePromo from "../../articles/ArticlePromo";
import Breadcrumbs from "../../breadcrumbs/Breadcrumbs";
import PopularnyObsahBtn from "../../articles/PopularnyObsahBtn";
import { useSelector } from "react-redux";
import { allSearchData } from "../../../store/searchSlice";

function Odpady() {
  const searchData = useSelector(allSearchData);
  const navigate = useNavigate();

  const onEnterPressed = (event, state, to) => {
    if (event.key === "Enter") {
      navigate(to, { state: state });
    }
  };

  return (
    <section className={styles["odpady"]}>
      <h1>
        <span className={styles["odpady-nadpis-od"]}>Od</span>pady
      </h1>
      <div className={styles["odpady-bg-image"]}></div>
      <div className={styles["content-wrapper"]}>
        <div className={styles["odpady-content"]}>
          <aside className={styles["odpady-aside"]}>
            <div className={styles["wrapper-aside-search"]}>
              <HpSearch
                searchMobileMenu={"combobox-input-mobile"}
                data={searchData}
              />
            </div>
            <Tab.Group as={"nav"}>
              <Tab.Panels className={styles["tab-list"]}>
                <Tab
                  onKeyDown={(event) =>
                    onEnterPressed(
                      event,
                      "Prúdy odpadov",
                      "/odpady/prudy-odpadov"
                    )
                  }
                  className={styles["tab-list-link"]}
                  as={NavLink}
                  state={"Prúdy odpadov"}
                  to={"/odpady/prudy-odpadov"}
                >
                  Prúdy odpadov
                </Tab>
                <Tab
                  onKeyDown={(event) =>
                    onEnterPressed(
                      event,
                      "Ciele odpadového hospodárstva",
                      "/odpady/ciele-odpadoveho-hospodarstva"
                    )
                  }
                  className={styles["tab-list-link"]}
                  as={NavLink}
                  state={"Ciele odpadového hospodárstva"}
                  to={"/odpady/ciele-odpadoveho-hospodarstva"}
                >
                  Ciele odpadového hospodárstva
                </Tab>
                <Tab
                  onKeyDown={(event) =>
                    onEnterPressed(
                      event,
                      "Rozšírená zodpovednosť výrobcov",
                      "/odpady/rozsirena-zodpevednost-vyrobcov"
                    )
                  }
                  className={styles["tab-list-link"]}
                  as={NavLink}
                  state={"Rozšírená zodpovednosť výrobcov"}
                  to={"/odpady/rozsirena-zodpevednost-vyrobcov"}
                >
                  Rozšírená zodpovednosť výrobcov{" "}
                </Tab>
                <Tab
                  onKeyDown={(event) =>
                    onEnterPressed(
                      event,
                      "Cezhraničný pohyb odpadov",
                      "/odpady/cezhranicny-pohyb-odpadov"
                    )
                  }
                  className={styles["tab-list-link"]}
                  as={NavLink}
                  state={"Cezhraničný pohyb odpadov"}
                  to={"/odpady/cezhranicny-pohyb-odpadov"}
                >
                  Cezhraničný pohyb odpadov{" "}
                </Tab>
                <Tab
                  onKeyDown={(event) =>
                    onEnterPressed(
                      event,
                      "Predchádzanie vzniku odpadov",
                      "/odpady/predchadzanie-vzniku-odpadov"
                    )
                  }
                  className={styles["tab-list-link"]}
                  as={NavLink}
                  state={"Predchádzanie vzniku odpadov"}
                  to={"/odpady/predchadzanie-vzniku-odpadov"}
                >
                  Predchádzanie vzniku odpadov{" "}
                </Tab>
                <Tab
                  onKeyDown={(event) =>
                    onEnterPressed(event, "Dokumenty", "/odpady/dokumenty")
                  }
                  className={styles["tab-list-link"]}
                  as={NavLink}
                  state={"Dokumenty"}
                  to={"/odpady/dokumenty"}
                >
                  Dokumenty{" "}
                </Tab>
                <Tab
                  onKeyDown={(event) =>
                    onEnterPressed(
                      event,
                      "Informačné systémy",
                      "/odpady/informacne-systemy"
                    )
                  }
                  className={styles["tab-list-link"]}
                  as={NavLink}
                  state={"Informačné systémy"}
                  to={"/odpady/informacne-systemy"}
                >
                  Informačné systémy
                </Tab>
                <Tab
                  onKeyDown={(event) =>
                    onEnterPressed(
                      event,
                      "Kontakty/kompetencie",
                      "/odpady/kontanky-kompetencie"
                    )
                  }
                  className={styles["tab-list-link"]}
                  as={NavLink}
                  state={"Kontakty/kompetencie"}
                  to={"/odpady/kontanky-kompetencie"}
                >
                  Kontakty/kompetencie
                </Tab>
              </Tab.Panels>
            </Tab.Group>
          </aside>
          <section className={styles["odpady-right"]}>
            <>
              <Breadcrumbs title={"Odpady"} titleUrl={"/odpady"} />
              <main className={styles["odpady-main"]}>
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
                je najnevhodnejšia: 1. predchádzanie vzniku odpadu, 2. príprava
                na opätovné použitie, 3. recyklácia, 4. iné zhodnocovanie, napr.
                energetické zhodnocovanie, 5. zneškodňovanie. Odkloniť sa od
                spôsobu nakladania s odpadom je možné iba pri určitých prúdoch
                odpadov. Konkrétne podmienky stanovuje zákon o odpadoch.
              </main>
            </>
            <div className={styles["bottom-section"]}>
              <section className={styles["bottom-section-do-pozornosti"]}>
                <h2>Do pozornosti</h2>
                <hr />
                <div
                  className={styles["bottom-section-do-pozornosti-articles"]}
                >
                  <SmallArticle
                    imgUrl={
                      "https://cdn.pixabay.com/photo/2022/03/31/01/05/bird-7102006__340.jpg"
                    }
                    title={
                      "Colníci zaistili 60 pávích pierok, chýbali im doklady potrebné na dovoz"
                    }
                    date={"1.7.2020 "}
                    category={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
                  />
                  <SmallArticle
                    imgUrl={
                      "https://cdn.pixabay.com/photo/2022/03/31/01/05/bird-7102006__340.jpg"
                    }
                    title={
                      "Colníci zaistili 60 pávích pierok, chýbali im doklady potrebné na dovoz"
                    }
                    date={"1.7.2020 "}
                    category={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
                  />
                  <SmallArticle
                    imgUrl={
                      "https://cdn.pixabay.com/photo/2022/03/31/01/05/bird-7102006__340.jpg"
                    }
                    title={
                      "Colníci zaistili 60 pávích pierok, chýbali im doklady potrebné na dovoz"
                    }
                    date={"1.7.2020 "}
                    category={"Rediakcia | Posudzovanie vplyvov na ŽP | Odpady"}
                  />
                  <ArticlePromo
                    title={"PRIPRAVUJEME KONFERENCIU O ZNEČISTENÝCH ÚZEMIACH"}
                    imgUrl={
                      "https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_960_720.jpg"
                    }
                  />
                </div>
              </section>
              <section className={styles["bottom-section-popularny-obsah"]}>
                <h2>Populárny obsah</h2>
                <hr />
                <div className={styles["bottom-section-popularny-obsah-btn"]}>
                  <PopularnyObsahBtn title={"ISOH"} />
                  <PopularnyObsahBtn title={"Vybrané indikátory "} />
                  <PopularnyObsahBtn title={"Zelená linka"} />
                  <PopularnyObsahBtn title={"Ewobox- vzdelávanie "} />
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Odpady;
