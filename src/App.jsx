import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Odpady from "./components/pages/odpady/Odpady";
import HomePage from "./components/pages/homepage/HomePage";
import NotFound from "./components/notfound/NotFound";
import MainMenu from "./components/mainmenu/MainMenu";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
