import "./App.scss";
import HomePage from "./components/homepage/HomePage";
import { Route, Routes } from "react-router-dom";
import Odpady from "./components/odpady/Odpady";
import NotFound from "./components/NotFound/NotFound";
import MainMenu from "./components/mainMenu/MainMenu";
import Footer from "./components/footer/Footer";

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
