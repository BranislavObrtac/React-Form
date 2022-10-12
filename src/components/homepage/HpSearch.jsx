import React, { useState } from "react";
import styles from "./HpSearch.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

function HpSearch({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className={styles["search"]}>
      <div className={styles["searchInputs"]}>
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleFilter}
          value={wordEntered}
        />
        <div className={styles["searchIcon"]}>
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <IconButton color="inherit" onClick={clearInput}>
              <CloseIcon />
            </IconButton>
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className={styles["dataResult"]}>
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a
                key={key}
                href={data.link}
                target="_blank"
                className={styles["dataItem"]}
              >
                <p>{value.title}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default HpSearch;
