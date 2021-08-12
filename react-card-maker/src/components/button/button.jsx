import React from "react";
import styles from "./button.module.css";

function Button() {
  const onClick = (event) => {
    return console.log(event);
  };
  return (
    <button className={styles.delete} onClick={onClick}>
      Delete
    </button>
  );
}

export default Button;
