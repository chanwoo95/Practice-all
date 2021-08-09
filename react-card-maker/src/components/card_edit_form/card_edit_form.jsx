import React from "react";
import styles from "./card_edit_form.module.css";

function CardEditForm({ card }) {
  return (
    <form>
      <input type="text" className={styles.name} />
      <input type="text" className={styles.company} />
      <select name="colors" id="">
        <option value="dark">Dark</option>
        <option value="pink">Pink</option>
        <option value="colorful">Colorful</option>
      </select>
      <input type="text" className={styles.job} />
      <input type="text" className={styles.email} />
      <input type="text" className={styles.message} />
    </form>
  );
}

export default CardEditForm;
