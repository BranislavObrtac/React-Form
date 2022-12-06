import React from "react";
import { useState } from "react";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ data }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleKeyDown = (event) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      return setIsChecked(!isChecked);
    }
  };

  return (
    <div
      onChange={() => setIsChecked(!isChecked)}
      onKeyDown={handleKeyDown}
      className={styles["checkbox"]}
      tabIndex={0}
    >
      <input
        type="checkbox"
        name={data.id}
        id={data.id}
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label
        className={styles["label"]}
        htmlFor={data.id}
        result-count={data.results}
      >
        {data.title}
      </label>
      {/*       {data.results ? (
        <span className={styles["results"]}>({data.results})</span>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default Checkbox;
