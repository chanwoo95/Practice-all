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
    },
    {
      id: "2",
      name: "yeojin",
      company: "naver",
      job: "Backend Developer",
      email: "oks04028@gmail.com",
    },
    {
      id: "3",
      name: "nick",
      company: "google",
      job: "Soft Engineer",
      email: "nickool@gmail.com",
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

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
}

export default Maker;
