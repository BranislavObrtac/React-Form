import "./App.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";

//components
import MainMenu from "../components/mainmenu/MainMenu";
import Page from "../components/pages/Page";
import NotFound from "../components/pages/notfound/NotFound";
import Footer from "../components/footer/Footer";

function App() {
  return (
    <>
      <MainMenu />
      <Routes>
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Page />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
