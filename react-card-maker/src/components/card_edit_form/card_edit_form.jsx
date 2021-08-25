import React, { useRef } from "react";
import Button from "../button/button";
import styles from "./card_edit_form.module.css";

function CardEditForm({ FileInput, card, updateCard, deleteCard }) {
  const { name, company, job, theme, email, message } = card;

  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const jobRef = useRef();
  const themeRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

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
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        name="name"
        value={name}
        type="text"
        className={styles.input}
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
        <FileInput />
        <Button name="Delete" onClick={onSubmit} />
      </div>
    </form>
  );
}

export default CardEditForm;
