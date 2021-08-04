import React from "react";
import styles from "./header.module.css";

function Header({ onLogout }) {
  return (
    <header className={styles.header}>
      {onLogout && <button className={styles.logout}>Logout</button>}
      <img className={styles.logo} src="/images/logo.png" alt="logo" />
      <h1 className={styles.title}>Business card maker</h1>
    </header>
  );
}

export default Header;
