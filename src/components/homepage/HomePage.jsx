import React from "react";
import TabWindow from "../tabWindow/TabWindow";
import Footer from "../footer/Footer";
import HpHeader from "./HpHeader";
import MainMenu from "../mainMenu/MainMenu";

function HomePage() {
  return (
    <>
      <MainMenu />
      <HpHeader />
      <TabWindow />
      <Footer />
    </>
  );
}

export default HomePage;
