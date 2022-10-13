import MenuItems from "./MenuItems";
import { menuItems } from "../../menuItems";
import { Link } from "react-router-dom";
import UserBar from "./UserBar";
import LangChoice from "./LangChoice";
import styles from "./MainMenu.module.scss";

const MainMenu = () => {
  return (
    <header>
      <div className={styles["nav-area"]}>
        <Link to="/" className={styles["logo"]}>
          <img
            src="https://vykurovanie.enviroportal.sk/img-loga/logo_enviroportal_web-300x100.png"
            alt="enviroportal logo"
          />
        </Link>
        <nav>
          <ul className={styles["menus"]}>
            {menuItems.map((menu, index) => {
              const depthLevel = 0;
              return (
                <MenuItems items={menu} key={index} depthLevel={depthLevel} />
              );
            })}
          </ul>
        </nav>
        <div className={styles["nav-right"]}>
          <UserBar />
          <span className={styles["lang-choice"]}>
            <LangChoice />
          </span>
        </div>
      </div>
    </header>
  );
};

export default MainMenu;
