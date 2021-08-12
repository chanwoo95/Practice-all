import React, { useRef } from "react";
import ImageFileInput from "../image_file_input/image_file_input";
import Button from "../button/button";
import styles from "./card_edit_form.module.css";

function CardEditForm({ card }) {
  const { name, company, job, email, message } = card;

  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const jobRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onChange = (event) => {
    if (event.currentTarget === null) {
      return;
    }
    event.preventDefault();
  };

  const onSubmit = (event) => {};
  return (
    <form ref={formRef} className={styles.form}>
      <input ref={nameRef} value={name} type="text" className={styles.input} />
      <input
        ref={companyRef}
        value={company}
        type="text"
        className={styles.input}
      />
      <select name="colors" className={styles.select}>
        <option value="dark">Dark</option>
        <option value="pink">Pink</option>
        <option value="colorful">Colorful</option>
      </select>
      <input ref={jobRef} value={job} type="text" className={styles.input} />
      <input
        ref={emailRef}
        value={email}
        type="text"
        className={styles.input}
      />
      <textarea
        ref={messageRef}
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
