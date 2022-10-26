import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Odpady from "./components/pages/odpady/Odpady";
import HomePage from "./components/pages/homepage/HomePage";
import NotFound from "./components/NotFound/NotFound";
import MainMenu from "./components/mainMenu/MainMenu";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainMenu />}>
          <Route path="/" element={<HomePage />} />
          <Route path="odpady" element={<Odpady />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
