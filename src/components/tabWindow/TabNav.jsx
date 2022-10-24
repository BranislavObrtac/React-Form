import React from "react";
//podstranky
import AktualneDianie from "./podstarnky/AktualneDianie";
import Agendy from "./podstarnky/Agendy";
import Temy from "./podstarnky/Temy";
import StavZP from "./podstarnky/StavZP";
import Dokumenty from "./podstarnky/Dokumenty";
import MapyData from "./podstarnky/MapyData";
import Kalendar from "./podstarnky/Kalendar";
//headlessUI
import { Tab } from "@headlessui/react";
import TabBtn from "./TabBtn";
import TabPanel from "./TabPanel";
//styly
import styles from "./TabNav.module.scss";
export default function TabNav() {
  return (
    <main>
      <Tab.Group>
        <Tab.List as="div" className={styles["tab-list"]}>
          <TabBtn name={"aktuálne dianie"} />
          <TabBtn name={"agendy"} />
          <TabBtn name={"temy"} />
          <TabBtn name={"Stav ŽP"} />
          <TabBtn name={"Dokumenty"} />
          <TabBtn name={"Mapy a dáta"} />
          <TabBtn name={"Kalendár"} />
        </Tab.List>

        <Tab.Panels>
          <TabPanel podstranka={<AktualneDianie />} />
          <TabPanel podstranka={<Agendy />} />
          <TabPanel podstranka={<Temy />} />
          <TabPanel podstranka={<StavZP />} />
          <TabPanel podstranka={<Dokumenty />} />
          <TabPanel podstranka={<MapyData />} />
          <TabPanel podstranka={<Kalendar />} />
        </Tab.Panels>
      </Tab.Group>
    </main>
  );
}
