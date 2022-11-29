import React from "react";
import HpHeader from "./HpHeader.jsx";
import TabWindow from "./tabwindow/TabWindow";
import { useDispatch } from "react-redux";
import { getArticles } from "../../../store/homePageStore/tabSlice";
import { useEffect } from "react";
import styles from "./HomePage.module.scss";

let fisrtStart = true;

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (fisrtStart) {
      dispatch(getArticles());
    }
    return () => {
      fisrtStart = false;
    };
  }, [dispatch]);

  return (
    <div className={styles["home-page"]}>
      <HpHeader />
      <TabWindow />
    </div>
  );
}

export default HomePage;
