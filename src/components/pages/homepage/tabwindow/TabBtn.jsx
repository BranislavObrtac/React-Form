import React from "react";
import { Tab } from "@headlessui/react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Fragment } from "react";
import styles from "./TabBtn.module.scss";

function TabBtn({ name }) {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <button
          className={selected ? styles["button-selected"] : styles["button"]}
        >
          {name}
          {selected && (
            <ArrowDropDownIcon className={styles["arrow"]}></ArrowDropDownIcon>
          )}
        </button>
      )}
    </Tab>
  );
}

export default TabBtn;
