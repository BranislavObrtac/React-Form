import { Tab } from "@headlessui/react";
import Agendy from "./podstarnky/Agendy";
import Eia from "../../routes/Eia";
import Sea from "../../routes/Sea";
import styles from "./TabNav.module.scss";
import { Fragment } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function TabNav() {
  return (
    <Tab.Group>
      <Tab.List className={styles["tab-list"]}>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected ? styles["button-selected"] : styles["button"]
              }
            >
              Agendy
              {selected && (
                <ArrowDropDownIcon
                  className={styles["arrow"]}
                ></ArrowDropDownIcon>
              )}
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected ? styles["button-selected"] : styles["button"]
              }
            >
              Eia
              {selected && (
                <ArrowDropDownIcon
                  className={styles["arrow"]}
                ></ArrowDropDownIcon>
              )}
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected ? styles["button-selected"] : styles["button"]
              }
            >
              Sea
              {selected && (
                <ArrowDropDownIcon
                  className={styles["arrow"]}
                ></ArrowDropDownIcon>
              )}
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <Agendy />
        </Tab.Panel>
        <Tab.Panel>
          <Eia />
        </Tab.Panel>
        <Tab.Panel>
          <Sea />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
