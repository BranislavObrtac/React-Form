import "./App.scss";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

//components
import MainMenu from "../components/mainmenu/MainMenu";
import HomePage from "../components/pages/homepage/HomePage";

//lazy load => CODE SPLITTING
const Odpady = lazy(() => import("../components/pages/odpady/Odpady"));
const Footer = lazy(() => import("../components/footer/Footer"));
const NotFound = lazy(() => import("../components/pages/notfound/NotFound"));

function App() {
  return (
    <>
      <Suspense fallback={<h5>Načítavanie...</h5>}>
        <Routes>
          <Route element={<MainMenu />}>
            <Route path="/" element={<HomePage />} />
            <Route path="odpady" element={<Odpady />}>
              <Route path=":id" element={<Odpady />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
