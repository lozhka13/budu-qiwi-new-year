import React, { useState } from "react";
import "./Quiz.scss";
import Layout from "../../hoc/Layout/Layout";
import Quiz from "../../components/Quiz/Quiz";
import Ale from "../../components/Ale/Ale";

interface IQuizPage {}

const QuizPage: React.FC<IQuizPage> = (props) => {
  const [isAnswerTurn, setIsAnswerTurn] = useState<boolean>(true);

  return (
    <Layout hideFooter isHeaderMaximized={false}>
      <div
        className={`quiz-page quiz-page--${
          isAnswerTurn ? "answer-turn" : "advice-turn"
        }`}
      >
        <Quiz isAnswerTurn={isAnswerTurn} setIsAnswerTurn={setIsAnswerTurn} />
        <Ale isAnswerTurn={isAnswerTurn} />
      </div>
    </Layout>
  );
};

export default QuizPage;
