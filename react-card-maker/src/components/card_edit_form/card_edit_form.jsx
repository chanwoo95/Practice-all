import React, { useRef } from "react";
import Button from "../button/button";
import styles from "./card_edit_form.module.css";

function CardEditForm({ FileInput, card, updateCard, deleteCard }) {
  const nameRef = useRef();
  const companyRef = useRef();
  const jobRef = useRef();
  const themeRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const { name, company, job, theme, email, message } = card;

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onSubmit = () => {
    deleteCard(card);
  };
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        ref={nameRef}
        value={name}
        onChange={onChange}
      />
      <input
        ref={companyRef}
        name="company"
        value={company}
        type="text"
        className={styles.input}
        onChange={onChange}
      />
      <select
        ref={themeRef}
        name="theme"
        value={theme}
        className={styles.select}
        onChange={onChange}
      >
        <option value="dark">dark</option>
        <option value="pink">pink</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        ref={jobRef}
        name="job"
        value={job}
        type="text"
        className={styles.input}
        onChange={onChange}
      />
      <input
        ref={emailRef}
        name="email"
        value={email}
        type="text"
        className={styles.input}
        onChange={onChange}
      />
      <textarea
        ref={messageRef}
        value={message}
        className={styles.textarea}
        name="message"
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={name} onFileChange={onFileChange} />
        <Button name="Delete" onClick={onSubmit} />
      </div>
    </form>
  );
}

export default CardEditForm;
