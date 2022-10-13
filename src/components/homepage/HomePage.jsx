import React from "react";
import TabWindow from "../tabWindow/TabWindow";
import Footer from "../footer/Footer";
import MainMenu from "./MainMenu";

function HomePage() {
  return (
    <>
      <MainMenu />
      <TabWindow />
      <Footer />
    </>
  );
}

export default HomePage;
