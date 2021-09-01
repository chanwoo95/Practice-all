import React, { useRef, useState } from "react";
import Button from "../button/button";
import styles from "./card_add_form.module.css";

function CardAddForm({ FileInput, onAdd }) {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const jobRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = (file) => {
    console.log(file);
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      job: jobRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };
    formRef.current.reset();
    onAdd(card);
  };
  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        type="text"
        name="name"
        className={styles.input}
        placeholder="name"
      />
      <input
        ref={companyRef}
        type="text"
        name="company"
        className={styles.input}
        placeholder="company"
      />
      <select ref={themeRef} name="theme" className={styles.select}>
        <option value="dark">dark</option>
        <option value="pink">pink</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        ref={jobRef}
        type="text"
        name="job"
        className={styles.input}
        placeholder="job"
      />
      <input
        ref={emailRef}
        type="text"
        name="email"
        className={styles.input}
        placeholder="email"
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        placeholder="message"
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput
          name={file.fileName}
          fileName={file}
          onFileChange={onFileChange}
        />
        <Button name="Add" onClick={onSubmit} />
      </div>
    </form>
  );
}

export default CardAddForm;
