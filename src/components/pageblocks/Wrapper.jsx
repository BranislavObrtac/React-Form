import React from "react";
import styles from "./Wrapper.module.scss";

const Wrapper = (props) => {
  return (
    <>
      {/* <div
        style={{
          backgroundImage: `url("https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_960_720.jpg")`,
        }}
        className={styles["wrapper-bgimage"]}
      ></div> */}
      <div className={styles["wrapper"]}>{props.children}</div>;
    </>
  );
};

export default Wrapper;
