import React from "react";
//tabpages
import TabPageAktualneDianie from "./tabpages/TabPageAktualneDianie";
import TabPageAgendy from "./tabpages/TabPageAgendy";
import TabPageTemy from "./tabpages/TabPageTemy";
import TabPageStavZP from "./tabpages/TabPageStavZP";
import TabPageDokumenty from "./tabpages/TabPageDokumenty";
import TabPageMapyData from "./tabpages/TabPageMapyData";
import TabPageKalendar from "./tabpages/TabPageKalendar";
//headlessUI
import { Tab } from "@headlessui/react";
import TabBtn from "./TabBtn";
import TabPanel from "./TabPanel";
//styles
import styles from "./TabWindow.module.scss";
//redux
import { useSelector } from "react-redux";
import { tabsData } from "../../../../store/tab-slice";

function TabWindow() {
  const allTabsData = useSelector(tabsData);

  return (
    <main>
      {allTabsData.isSuccess && (
        <Tab.Group manual>
          <Tab.List as="div" className={styles["tab-list"]}>
            {allTabsData.data.map((tab, index) => (
              <TabBtn key={index} name={tab.name} />
            ))}
            {/* <TabBtn name={"aktuálne dianie"} />
            <TabBtn name={"agendy"} />
            <TabBtn name={"temy"} />
            <TabBtn name={"Stav ŽP"} />
            <TabBtn name={"Dokumenty"} />
            <TabBtn name={"Mapy a dáta"} />
            <TabBtn name={"Kalendár"} /> */}
          </Tab.List>

          <Tab.Panels className={styles["tab-panel"]}>
            <TabPanel podstranka={<TabPageAktualneDianie />} />
            <TabPanel podstranka={<TabPageAgendy />} />
            <TabPanel podstranka={<TabPageTemy />} />
            <TabPanel podstranka={<TabPageStavZP />} />
            <TabPanel podstranka={<TabPageDokumenty />} />
            <TabPanel podstranka={<TabPageMapyData />} />
            <TabPanel podstranka={<TabPageKalendar />} />
          </Tab.Panels>
        </Tab.Group>
      )}
    </main>
  );
}
export default TabWindow;
