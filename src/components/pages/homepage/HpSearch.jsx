import { useState, useEffect } from "react";
import { Combobox } from "@headlessui/react";
import styles from "./HpSearch.module.scss";
import SearchIcon from "@mui/icons-material/Search";

import { useDispatch, useSelector } from "react-redux";
import { getResultData, resultData } from "../../../store/search-slice";

function HpSearch({ searchMobileMenu }) {
  const dispatch = useDispatch();
  const searchResultData = useSelector(resultData);

  const [selectedPerson, setSelectedPerson] = useState("");
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    const timer = setTimeout(() => {
      dispatch(getResultData(query));
      setIsSearching(false);
    }, 250);
    return () => {
      clearTimeout(timer);
      setIsSearching(true);
    };
  }, [query, dispatch]);

  return (
    <div className={styles["combobox"]}>
      <Combobox value={selectedPerson} onChange={setSelectedPerson}>
        <div className={styles["search-box"]}>
          <Combobox.Input
            autoComplete={"off"}
            onChange={(e) => setQuery(e.target.value)}
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
        {query === "" || isSearching ? (
          <></>
        ) : (
          <Combobox.Options
            className={`${
              searchMobileMenu
                ? styles["combobox-options-mobile"]
                : styles["combobox-options"]
            }`}
          >
            {searchResultData.length ? (
              searchResultData.map((person, index) => (
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
                      <a href="/">{person.name}</a>
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
