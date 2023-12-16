import React, { useEffect } from "react";
import Layout from "../../hoc/Layout/Layout";
import "./Index.scss";
import Button from "../../components/Button/Button";
import AleIcon from "../../assets/ale-icon.svg";
import Ale from "../../assets/ELKA.svg";
import ElkaFull from "../../assets/elka-full.svg";
import ElkaFullMobile from "../../assets/elka-full-mobile.svg";
import { useNavigate } from "react-router-dom";
import MediaQuery from "react-responsive";
import TypingBubble from "../../components/TypingBubble/TypingBubble";

const Index = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/quiz");
  };

  useEffect(() => {
    const body: HTMLBodyElement | null = document.querySelector("body");
    if (body !== null) {
      body.classList.add("hero-body");
    }

    return () => {
      if (body !== null) {
        body.classList.remove("hero-body");
      }
    };
  }, []);

  return (
    <Layout>
      <section className="hero">
        <div className="hero__left">
          <div className="hero__heading">
            Раз-два-три… <br />
            Ёлочка, не выгори!
          </div>
          <div className="hero__subheading">
            Дедлайны атакуют, клиенты токсичат, а ворк-лайф баланс полетел
            к чертям. Знакомо? Помоги ёлочке выжить перед Новым годом и войти
            в 2024-й снова зелёной, красивой и счастливой. В благодарность тебя
            ждут подарки от команды QIWI!
          </div>
          <div className="hero__actions">
            <Button onClick={handleClick} size="large">
              Спасти ёлочку
            </Button>
            <div className="hero__chat">
              <img src={AleIcon} alt="" />
              <TypingBubble />
            </div>
          </div>
        </div>
        <div className="hero__right">
          <MediaQuery minWidth={768}>
            <img src={ElkaFull} alt="" />
          </MediaQuery>
          <MediaQuery maxWidth={768}>
            <img src={ElkaFullMobile} alt="" />
          </MediaQuery>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
