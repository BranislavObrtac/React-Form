import React from "react";
import HpSearch from "../homepage/HpSearch";
import styles from "./Search.module.scss";
import Checkbox from "../../ui/Checkbox";

const vysledky = [
  { title: "Posudzovanie vplyvov na životné prostredie", id: 1, results: 1 },
  {
    title: "Integrovaná prevencia kontroly znečistenia",
    id: 2,
    results: 28,
  },
  { title: "Spravodajstvo", id: 3, results: 45 },
  { title: "Správy o životnom prostredí", id: 4, results: 0 },
  {
    title: "Informačný systém Environmentálne záťaže",
    id: 5,
    results: 0,
  },
  {
    title: "Informačný systém nakladania s ťažobným odpadom",
    id: 6,
    results: 1,
  },
  {
    title: "Register lokalít s možným výskytom POPs látok",
    id: 7,
    results: 1,
  },
];

const Search = () => {
  return (
    <div className={styles["search-page"]}>
      <header className={styles["search-input"]}>
        <HpSearch />
      </header>
      <div className={styles["content"]}>
        <aside className={styles["aside"]}>
          <h2>Filtrácia Výsledkov vyhľadávania</h2>
          <ul>
            {Object.keys(vysledky).map((key, index) => {
              return (
                <li className={styles["result-list-item"]} key={index}>
                  <Checkbox data={vysledky[key]} key={key} />
                </li>
              );
            })}
          </ul>
        </aside>
        <main className={styles["main"]}>
          <h2>výsledky vyhľadávania</h2>
        </main>
      </div>
    </div>
  );
};

export default Search;
