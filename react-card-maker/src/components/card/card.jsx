import React from "react";
import styles from "./card.module.css";

function Card({ card }) {
  return (
    <li className={styles.card}>
      <img className={styles.avatar} src="/images/default_logo.png" alt="" />
      <div className={styles.container}>
        <div className={styles.name}>
          <h2>{card.name}</h2>
          <p>{card.company}</p>
        </div>
        <div className={styles.bar}></div>
        <div className={styles.info}>
          <p>{card.job}</p>
          <p>{card.email}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
