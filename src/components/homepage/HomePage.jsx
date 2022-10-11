import React from "react";
import MainMenu from "../mainMenu/MainMenu";
import HpHeader from "./HpHeader";
import TabWindow from "../tabWindow/TabWindow";
import Footer from "../footer/Footer";

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
