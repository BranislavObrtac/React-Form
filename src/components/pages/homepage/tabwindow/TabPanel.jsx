import React from "react";
import { Tab } from "@headlessui/react";
import styles from "./TabPanel.module.scss";

function TabPanel({ podstranka }) {
  return <Tab.Panel className={styles["tab-panel"]}>{podstranka}</Tab.Panel>;
}

export default TabPanel;
