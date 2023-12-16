import React, { useEffect, useRef, useState } from "react";
import "./Quiz.scss";
import QuizProgressBar from "../../components/QuizProgressBar/QuizProgressBar";
import questions from "../../data/questions.json";
import Answer from "../../components/Answer/Answer";
import { useNavigate } from "react-router-dom";
import MediaQuery from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { addToTotal } from "../../reducers/markReducer";
import { Form, Formik } from "formik";
import { RootState } from "../../store";
import Layout from "../../hoc/Layout/Layout";
import Button from "../../components/Button/Button";
import AleIcon from "../../assets/1440/photo.svg";
import Ale from "../../assets/elka-full.svg";
import Quiz from "../../components/Quiz/Quiz";

interface IQuizPage {}

const QuizPage: React.FC<IQuizPage> = (props) => {
  const { total } = useSelector((state: RootState) => state.mark);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  return (
    <Layout hideFooter isHeaderMaximized={false}>
      <div className="quiz-page">
        <Quiz
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
        <div className="quiz-page__img">
          <img src={Ale} alt="" />
        </div>
      </div>
    </Layout>
  );
};

export default QuizPage;
