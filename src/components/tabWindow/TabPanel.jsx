import React from "react";
import { Tab } from "@headlessui/react";

function TabPanel({ podstranka }) {
  return <Tab.Panel>{podstranka}</Tab.Panel>;
}

export default TabPanel;
