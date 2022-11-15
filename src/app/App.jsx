import "./App.scss";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

//components
import MainMenu from "../components/mainmenu/MainMenu";
import Page from "../components/pages/Page";

//lazy load => CODE SPLITTING
const Footer = lazy(() => import("../components/footer/Footer"));
const NotFound = lazy(() => import("../components/pages/notfound/NotFound"));

function App() {
  return (
    <>
      <Suspense fallback={<h5>Načítavanie...</h5>}>
        <MainMenu />
        <Routes>
          {/* <Route path="odpady" element={<Odpady />}>
            <Route path=":id" element={<Odpady />} />
          </Route> */}
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Page />} />
        </Routes>
        {/* <Footer /> */}
      </Suspense>
    </>
  );
}

export default App;
