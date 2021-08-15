import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

function Maker({ authService }) {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "chanwoo",
      company: "kakao",
      job: "Frotend Developer",
      email: "cksdndbd@naver.com",
      message: "asdfasef",
      theme: "dark",
      fileURL: "chanwoo.png",
    },
    {
      id: "2",
      name: "chanwoo1",
      company: "naver",
      job: "Backend Developer",
      email: "oks04028@gmail.com",
      message: "sidjfiajsenifnasidlnf",
      theme: "pink",
      fileURL: "chanwoo.png",
    },
    {
      id: "3",
      name: "chanwoo2",
      company: "google",
      job: "Soft Engineer",
      email: "nickool@gmail.com",
      message: "zxkncviefjwilejf",
      theme: "colorful",
      fileURL: "chanwoo.png",
    },
  ]);

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <div className={styles.bar}></div>
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
}

export default Maker;
