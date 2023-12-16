import React from "react";
import "./QuizProgressBar.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { writeResult } from "../../reducers/markReducer";

interface IQuizProgressBar {
  currentQuestion: number;
  amountOfQuestion: number;
}

const QuizProgressBar: React.FC<IQuizProgressBar> = (props) => {
  const { currentQuestion, amountOfQuestion } = props;
  const { total } = useSelector((state: RootState) => state.mark);

  const classesFromMark: Record<number, string> = {
    5: "bad",
    10: "neutral",
    15: "good",
  };

  return (
    <div className="quiz-progress-bar">
      {total.map((mark: number, index: number) => {
        return (
          <div
            key={index}
            className={`quiz-progress-bar__step quiz-progress-bar__step--${
              classesFromMark[mark]
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
