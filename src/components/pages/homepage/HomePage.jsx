import React from "react";
import HpHeader from "./HpHeader.jsx";
import TabWindow from "./tabwindow/TabWindow";
import { useDispatch } from "react-redux";
import { getArticles } from "../../../store/tab-slice";
import { useEffect } from "react";

let fisrtStart = true;
function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (fisrtStart === true) {
      fisrtStart = false;
      return;
    }
    dispatch(getArticles());
  }, []);
  return (
    <>
      <HpHeader />
      <TabWindow />
    </>
  );
}

export default HomePage;
