import "./App.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";

//components
import MainMenu from "../components/mainmenu/MainMenu";
import Page from "../components/pages/Page";
import NotFound from "../components/pages/notfound/NotFound";
import Footer from "../components/footer/Footer";
import Wrapper from "../components/pageblocks/Wrapper";
import Search from "../components/pages/search/Search";

function App() {
  return (
    <Wrapper>
      <MainMenu />
      <Routes>
        <Route path="404" element={<NotFound />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<Page />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
}

export default App;
