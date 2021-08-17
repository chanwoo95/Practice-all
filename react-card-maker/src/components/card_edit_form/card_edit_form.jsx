import React, { useRef } from "react";
import ImageFileInput from "../image_file_input/image_file_input";
import Button from "../button/button";
import styles from "./card_edit_form.module.css";

function CardEditForm({ card, updateCard, deleteCard }) {
  const { name, company, job, theme, email, message } = card;

  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const jobRef = useRef();
  const themeRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onChange = (event) => {
    if (event.currentTarget === null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onSubmit = (event) => {};
  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        value={name}
        type="text"
        className={styles.input}
        onChange={onChange}
      />
      <input
        ref={companyRef}
        value={company}
        type="text"
        className={styles.input}
        onChange={onChange}
      />
      <select ref={themeRef} value={theme} className={styles.select}>
        <option value="dark">dark</option>
        <option value="pink">pink</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        ref={jobRef}
        value={job}
        type="text"
        className={styles.input}
        onChange={onChange}
      />
      <input
        ref={emailRef}
        value={email}
        type="text"
        className={styles.input}
        onChange={onChange}
      />
      <textarea
        ref={messageRef}
        value={message}
        className={styles.textarea}
        name="text"
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
        <Button name="Delete" onClick={onSubmit} />
      </div>
    </form>
  );
}

export default CardEditForm;
