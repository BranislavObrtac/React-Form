import React from "react";
import styles from "./Footer.module.scss";
import { pageDataIsSuccess } from "../../store/pageSlice";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function Footer(link) {
  const [url, setUrl] = useState("");
  const fetchPageDataIsSuccess = useSelector(pageDataIsSuccess);
  let location = useLocation();

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return fetchPageDataIsSuccess || url === "/" ? (
    <footer className={styles["footer-wrapper"]}>
      <div className={styles["footer"]}>
        <section className={styles["footer-left"]}>
          <div className={styles["footer-left-links"]}>
            <a href={link}>Kontakt</a>
            <a href={link}>Rss</a>
            <a href={link}>Mapa stránok</a>
            <a href={link}>Cookies</a>
            <a href={link}>Vyhlásenie o prístupnosti</a>
          </div>
          <a href={link}>
            <b>Našli ste na stránke chybu ?</b>
          </a>
        </section>
        <section className={styles["footer-right"]}>
          <div className={styles["footer-right-logo"]}>
            <img
              src="https://bratislavafotogenicka.eu/wp-content/uploads/2016/12/enviroportal-logo-1.jpg"
              alt="enviroportal logo"
            />
            <div>
              Prevádzku stránky <a href={link}>www.enviroportal.sk</a> a správu
              jej obsahu zabezpečuje{" "}
              <a href={link}>Slovenská agentúra životného prostredia.</a>
            </div>
          </div>
          <p>
            ©2005–2022 <a href="/">www.enviroportal.sk</a>
          </p>
        </section>
      </div>
    </footer>
  ) : null;
}

export default Footer;
