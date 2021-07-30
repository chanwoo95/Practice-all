import React from "react";
import styles from "./home.module.css";

function Home() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <img className={styles.logo} src="/images/logo.png" alt="logo" />
        <h2>Business Card Maker</h2>
        <button className={styles.logout}>Logout</button>
      </header>

      <div className={styles.main}>
        <h2 className={styles.main_title}>Login</h2>
        <div className={styles.login}>
          <button className={styles.login_button}>Google</button>
          <button className={styles.login_button}>Github</button>
        </div>
      </div>

      <footer className={styles.footer}> Login Form </footer>
    </section>
  );
}

export default Home;
