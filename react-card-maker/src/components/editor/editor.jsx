import React from "react";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./editor.module.css";
import CardAddForm from "../card_add_form/card_add_form";

function Editor({ cards, addCard }) {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Edit</h1>
      <ul>
        {cards.map((card) => (
          <CardEditForm key={card.id} card={card} />
        ))}
        <CardAddForm onAdd={addCard} />
      </ul>
    </section>
  );
}

export default Editor;
