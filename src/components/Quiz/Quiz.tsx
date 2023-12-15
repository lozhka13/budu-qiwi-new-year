import React, { useState } from "react";
import AleIcon from "../../assets/ale-icon.svg";
import "./Quiz.scss";
import QuizProgressBar from "../QuizProgressBar/QuizProgressBar";

interface IQuiz {
  information?: string;
  currentQuestion: number;
}

const Quiz: React.FC<IQuiz> = (props) => {
  const { information, currentQuestion } = props;

  return (
    <div className="quiz">
      <div className="quiz__heading">
        <div>
          <img src={AleIcon} alt="Иконка Ёлки" />
        </div>
        <div>
          <QuizProgressBar
            currentQuestion={currentQuestion}
            amountOfQuestion={10}
          />
        </div>
      </div>
      <div className="quiz__content"></div>
    </div>
  );
};

export default Quiz;
