import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./TypingBubble.scss";

const TypingBubble = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Иголки мне в сердце",
        "Давайте уже после праздников",
        "Сон? Что это?!",
        "Сгорела на 13 из 10",
        "Некогда нарядиться",
      ],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="typing_bubble">
      <span ref={el} />
    </div>
  );
};

export default TypingBubble;
