import React from "react";
import styles from "./search_header.module.css";

const SearchHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.icon}>
        <img className={styles.logo} src="images/logo.png" alt="logo" />
        <h2 className={styles.name}>Youtube</h2>
      </div>

      <input className={styles.input} type="search" />
      <button className={styles.button} type="submit">
        <img className={styles.search} src="images/search.png" alt="search" />
      </button>
    </header>
  );
};

export default SearchHeader;
