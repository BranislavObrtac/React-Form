import React from "react";
import { Tab } from "@headlessui/react";
import styles from "./TabPanel.module.scss";
import ColNewsBig from "./ColNewsBig";
import ColMenu from "./ColMenu";
import ColContent from "./ColContent";
import ColPromo from "./ColPromo";

function TabPanel({ data }) {
  const content = data.content;

  return content ? (
    <Tab.Panel
      className={styles["tab-panel"]}
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_960_720.jpg")`,
      }}
    >
      <div className={styles["tab-panel-content"]}>
        {Object.keys(content).map((key, index) => {
          let type = content[key].type;
          if (type === "col-news-big") {
            return <ColNewsBig data={content[key]} key={"Col_" + index} />;
          }
          if (type === "menu") {
            return <ColMenu data={content[key]} key={"Col_" + index} />;
          }
          if (type === "content") {
            return <ColContent data={content[key]} key={"Col_" + index} />;
          }
          if (type === "promo") {
            return <ColPromo data={content[key]} key={"Col_" + index} />;
          }
        })}
      </div>
    </Tab.Panel>
  ) : null;
}

export default TabPanel;
