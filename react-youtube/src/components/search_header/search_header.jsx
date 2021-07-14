import React, { useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = ({ video }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    inputRef.current.value = "";
    console.log(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.icon}>
        <img className={styles.logo} src="images/logo.png" alt="logo" />
        <h2 className={styles.name}>Youtube</h2>
      </div>

      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img className={styles.search} src="images/search.png" alt="search" />
      </button>
    </header>
  );
};

export default SearchHeader;
