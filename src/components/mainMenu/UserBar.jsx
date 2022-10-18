import React from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import styles from "./UserBar.module.scss";

function UserBar() {
  return (
    <>
      <div className={styles["user-bar"]}>
        Profil
        <AccountCircleRoundedIcon></AccountCircleRoundedIcon>
      </div>
    </>
  );
}

export default UserBar;
