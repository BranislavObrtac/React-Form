import React, { useState } from "react";
import Agendy from "./Agendy";
import Eia from "./Eia";
import Sea from "./Sea";
import Temy from "./Temy";
import styles from "./Submenu.module.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Submenu() {
  const [activeSubmenu, setActiveSubmenu] = useState(<Agendy />);
  const [dropdownIcon, setDropdownIcon] = useState("Agendy");

  return (
    <main>
      <nav className={styles.submenu}>
        <ul>
          <li
            tabIndex={0}
            onFocus={() => {
              setActiveSubmenu(<Agendy />);
              setDropdownIcon("Agendy");
            }}
          >
            <a>Agendy</a>
            {dropdownIcon === "Agendy" ? <ArrowDropDownIcon /> : ""}
          </li>
          <li
            tabIndex={-1}
            onFocus={() => {
              setActiveSubmenu(<Eia />);
              setDropdownIcon("Eia");
            }}
          >
            <a>Eia </a>
            {dropdownIcon === "Eia" ? <ArrowDropDownIcon /> : ""}
          </li>
          <li
            tabIndex={-1}
            onFocus={() => {
              setActiveSubmenu(<Sea />);
              setDropdownIcon("Sea");
            }}
          >
            <a>Sea</a>
            {dropdownIcon === "Sea" ? <ArrowDropDownIcon /> : ""}
          </li>
          <li
            tabIndex={-1}
            onFocus={() => {
              setActiveSubmenu(<Temy />);
              setDropdownIcon("Temy");
            }}
          >
            <a>Temy</a>
            {dropdownIcon === "Temy" ? <ArrowDropDownIcon /> : ""}
          </li>
        </ul>
      </nav>
      <section>{activeSubmenu}</section>
    </main>
  );
}

export default Submenu;
