import React from "react";
import styles from "./card_edit_form.module.css";

function CardEditForm({ card }) {
  const { name, company, job, theme, email, message } = card;
  return (
    <form>
      <input value={name} type="text" className={styles.name} />
      <input value={company} type="text" className={styles.company} />
      <select name="colors" id="">
        <option value="dark">Dark</option>
        <option value="pink">Pink</option>
        <option value="colorful">Colorful</option>
      </select>
      <input value={job} type="text" className={styles.job} />
      <input value={email} type="text" className={styles.email} />
      <textarea
        value={message}
        className={styles.message}
        name="text"
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </form>
  );
}

export default CardEditForm;
