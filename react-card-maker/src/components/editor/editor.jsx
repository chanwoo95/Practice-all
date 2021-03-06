import React from "react";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./editor.module.css";
import CardAddForm from "../card_add_form/card_add_form";

function Editor({ FileInput, cards, addCard, updateCard, deleteCard }) {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Edit</h1>
      <ul>
        {Object.keys(cards).map((key) => (
          <CardEditForm
            FileInput={FileInput}
            key={key}
            card={cards[key]}
            updateCard={updateCard}
            deleteCard={deleteCard}
          />
        ))}
        <CardAddForm FileInput={FileInput} onAdd={addCard} />
      </ul>
    </section>
  );
}

export default Editor;
