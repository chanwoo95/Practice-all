import React from "react";
import ImageFileInput from "../image_file_input/image_file_input";
import Button from "../button/button";
import styles from "./card_edit_form.module.css";

function CardEditForm({ card }) {
  const { name, company, job, theme, email, message } = card;

  const onSubmit = () => {
    return <h2>wow</h2>;
  };
  return (
    <form className={styles.form}>
      <input value={name} type="text" className={styles.input} />
      <input value={company} type="text" className={styles.input} />
      <select name="colors" className={styles.select}>
        <option value="dark">Dark</option>
        <option value="pink">Pink</option>
        <option value="colorful">Colorful</option>
      </select>
      <input value={job} type="text" className={styles.input} />
      <input value={email} type="text" className={styles.input} />
      <textarea
        value={message}
        className={styles.textarea}
        name="text"
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
        <Button name="Delete" onClick={onSubmit} />
      </div>
    </form>
  );
}

export default CardEditForm;
