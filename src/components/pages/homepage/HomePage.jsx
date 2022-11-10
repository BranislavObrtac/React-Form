import React from "react";
import HpHeader from "./HpHeader.jsx";
import TabWindow from "./tabwindow/TabWindow";
import { useDispatch } from "react-redux";
import { getArticles } from "../../../store/homePageStore/tabSlice";
import { useEffect } from "react";

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
    <>
      <HpHeader />
      <TabWindow />
    </>
  );
}

export default HomePage;
