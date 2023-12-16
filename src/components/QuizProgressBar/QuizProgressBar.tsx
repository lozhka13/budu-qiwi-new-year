import React from "react";
import "./QuizProgressBar.scss";

interface IQuizProgressBar {
  currentQuestion: number;
  amountOfQuestion: number;
}

const QuizProgressBar: React.FC<IQuizProgressBar> = (props) => {
  const { currentQuestion, amountOfQuestion } = props;

  // const questionArray = Array(amountOfQuestion).fill("");
  const questionArray = Array(10).fill("");
  // bad neutral good

  return (
    <div className="quiz-progress-bar">
      {questionArray.map((item, index) => {
        return (
          <div
            key={index}
            className={`quiz-progress-bar__step quiz-progress-bar__step--${
              currentQuestion > index && "passed"
            } quiz-progress-bar__step--${
              currentQuestion === index && "current"
            }`}
          ></div>
        );
      })}
    </div>
  );
};

export default QuizProgressBar;
