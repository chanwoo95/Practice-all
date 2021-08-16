import React from "react";
import styles from "./card.module.css";

function Card({ card }) {
  const { name, company, job, email, message, theme } = card;
  return (
    <li className={`${styles.card} ${getColors(theme)}`}>
      <img
        className={styles.avatar}
        src="/images/default_logo.png"
        alt="avatar"
      />
      <div className={styles.container}>
        <div className={styles.name}>
          <h2>{name}</h2>
          <p>{company}</p>
        </div>
        <div className={styles.bar}></div>
        <div className={styles.info}>
          <p>{job}</p>
          <p>{email}</p>
          <p>{message}</p>
        </div>
      </div>
    </li>
  );
}

function getColors(theme) {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "pink":
      return styles.pink;
    case "colorful":
      return styles.colorful;
    default:
      throw new Error(`unknown ${theme}`);
  }
}

export default Card;
