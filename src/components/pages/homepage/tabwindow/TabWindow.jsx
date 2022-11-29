import React, { useEffect } from "react";
//headlessUI
import { Tab } from "@headlessui/react";
import TabBtn from "./TabBtn";
import TabPanel from "./TabPanel";
//styles
import styles from "./TabWindow.module.scss";
//redux
import { useSelector } from "react-redux";
import {
  tabsData,
  tabDataIsSuccess,
} from "../../../../store/homePageStore/tabSlice";

function TabWindow() {
  const allTabsData = useSelector(tabsData);
  const isSuccess = useSelector(tabDataIsSuccess);

  return (
    <main>
      {isSuccess && (
        <Tab.Group manual>
          <Tab.List as="div" className={styles["tab-list"]}>
            {allTabsData.data.map((tab, index) => (
              <TabBtn key={tab.name + "_" + index} name={tab.name} />
            ))}
          </Tab.List>

          <Tab.Panels className={styles["tab-panel"]}>
            {allTabsData.data.map((data, index) => (
              <TabPanel data={data} key={"TabPanel_" + index} />
            ))}
          </Tab.Panels>
        </Tab.Group>
      )}
    </main>
  );
}
export default TabWindow;
