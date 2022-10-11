import MenuItems from "./MenuItems";
import { menuItems } from "../../menuItems";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          <img
            src="https://vykurovanie.enviroportal.sk/img-loga/logo_enviroportal_web-300x100.png"
            alt="enviroportal logo"
          />
        </Link>
        <nav>
          <ul className="menus">
            {menuItems.map((menu, index) => {
              const depthLevel = 0;
              return (
                <MenuItems items={menu} key={index} depthLevel={depthLevel} />
              );
            })}
          </ul>
        </nav>
        <div className="user">Poúživateľ</div>
      </div>
    </header>
  );
};

export default MainMenu;
