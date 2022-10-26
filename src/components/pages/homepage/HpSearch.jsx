import { useState } from "react";
import { Combobox } from "@headlessui/react";
import styles from "./HpSearch.module.scss";
import SearchIcon from "@mui/icons-material/Search";

function HpSearch({ data, searchMobileMenu }) {
  const [selectedPerson, setSelectedPerson] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const filteredPeople =
    query === ""
      ? data
      : data.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className={styles["combobox"]}>
      <Combobox value={selectedPerson} onChange={setSelectedPerson}>
        <div className={styles["search-box"]}>
          <Combobox.Input
            autoComplete={"off"}
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(person) => person.name}
            className={`${
              searchMobileMenu
                ? styles[searchMobileMenu]
                : styles["combobox-input"]
            }`}
            placeholder={"Zadajte hľadaný výraz "}
          />
          <div className={styles["search-icon"]}>
            <SearchIcon />
          </div>
        </div>
        {query === "" ? (
          <></>
        ) : (
          <Combobox.Options
            className={`${
              searchMobileMenu
                ? styles["combobox-options-mobile"]
                : styles["combobox-options"]
            }`}
          >
            {filteredPeople.length ? (
              filteredPeople.map((person, index) => (
                <Combobox.Option
                  key={index + "_" + person}
                  value={person}
                  as={"ul"}
                >
                  {({ active, selected }) => (
                    <li
                      className={`${
                        active
                          ? styles["combobox-option-active"]
                          : styles["combobox-option-inactive"]
                      }`}
                    >
                      <a href="#">{person.name}</a>
                    </li>
                  )}
                </Combobox.Option>
              ))
            ) : (
              <li>
                Žiadne výsledky pre: <b style={{ color: "red" }}>{query}</b>
              </li>
              // html markup if no results
            )}
          </Combobox.Options>
        )}
      </Combobox>
    </div>
  );
}

export default HpSearch;
