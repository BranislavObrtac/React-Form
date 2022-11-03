import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./NotFound.module.scss";

function NotFound() {
  const [url, setUrl] = useState(window.location.href);
  let location = useLocation();

  useEffect(() => {
    setUrl(window.location.href);
  }, [location]);

  return (
    <div className={styles["not-found"]}>
      <div>
        <span className={styles["not-found-color"]}>Kamarát</span> asi si zadal
        dačo zle skontroluj routu !<p>{url}</p>
      </div>
      <div>
        <p>
          Myslel si ?
          <span className={styles["not-found-color-padding"]}>
            {location.pathname}
          </span>
        </p>
        <p className={styles["not-found-color-red"]}>
          Get better work harder !
        </p>
        <p className={styles["not-found-404"]}>404</p>
      </div>
    </div>
  );
}

export default NotFound;
