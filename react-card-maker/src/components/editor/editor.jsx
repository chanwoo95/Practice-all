import React from "react";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./editor.module.css";
import AddForm from "../add_form/add_form";
function Editor({ cards }) {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Edit</h1>
      <ul>
        {cards.map((card) => (
          <CardEditForm card={card} />
        ))}
        <AddForm />
      </ul>
    </section>
  );
}

export default Editor;
