import React from "react";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./card_add_form.module.css";

function CardAddForm() {
  return (
    <form className={styles.form}>
      <input type="text" className={styles.input} placeholder="name" />
      <input type="text" className={styles.input} placeholder="company" />
      <select name="colors" className={styles.select}>
        <option value="dark">Dark</option>
        <option value="pink">Pink</option>
        <option value="colorful">Colorful</option>
      </select>
      <input type="text" className={styles.input} placeholder="job" />
      <input type="text" className={styles.input} placeholder="email" />
      <textarea
        className={styles.textarea}
        name="text"
        placeholder="message"
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
        <Button />
      </div>
    </form>
  );
}

export default CardAddForm;
