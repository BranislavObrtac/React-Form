import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles["footer-left"]}>
        <div className={styles["footer-left-links"]}>
          <a href="#">Kontakt</a>
          <a href="#">Rss</a>
          <a href="#">Mapa stránok</a>
          <a href="#">Cookies</a>
          <a href="#">Vyhlásenie o prístupnosti</a>
        </div>
        <a href="#">
          <b>Našli ste na stránke chybu ?</b>
        </a>
      </div>
      <div className={styles["footer-right"]}>
        <div className={styles["footer-right-logo"]}>
          <img src="https://bratislavafotogenicka.eu/wp-content/uploads/2016/12/enviroportal-logo-1.jpg" />

          <div>
            Prevádzku stránky <a href="#">www.enviroportal.sk</a> a správu jej
            obsahu zabezpečuje{" "}
            <a href="#">Slovenská agentúra životného prostredia.</a>
          </div>
        </div>
        <p>
          ©2005–2022 <a href="#">www.enviroportal.sk</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
