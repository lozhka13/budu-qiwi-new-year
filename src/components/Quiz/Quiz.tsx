import React, { useState } from "react";
import AleIcon from "../../assets/ale-icon.svg";
import QiwiIcon from "../../assets/qiwi-icon.svg";
import "./Quiz.scss";
import QuizProgressBar from "../QuizProgressBar/QuizProgressBar";
import questions from "../../data/questions.json";
import advices from "../../data/advices.json";
import { Form, Formik } from "formik";
import Answer from "../Answer/Answer";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setAleState,
  setCurrentAdvice,
  writeResult,
} from "../../reducers/quizReducer";
import { RootState } from "../../store";

interface IQuiz {
  isAnswerTurn: boolean;
  setIsAnswerTurn: any;
}

const Quiz: React.FC<IQuiz> = (props) => {
  const { isAnswerTurn, setIsAnswerTurn } = props;
  const navigate = useNavigate();
  const initialValues = {
    mark: 0,
  };

  const { currentQuestion, currentAleState, total, currentAdvice } =
    useSelector((state: RootState) => state.quiz);

  const dispatch = useDispatch();

  const handleSubmit = (values: any, actions: any) => {
    if (isAnswerTurn) {
      const mark = total.reduce((accumulator, mark) => {
        return accumulator + mark;
      });
      if (currentQuestion === 2) {
        if (mark + Number(values.mark) <= 30) {
          dispatch(setAleState(currentAleState - 1));
        } else {
          dispatch(setAleState(currentAleState + 1));
        }
      } else if (currentQuestion === 5) {
        if (mark + Number(values.mark) <= 60) {
          dispatch(setAleState(currentAleState - 1));
        } else {
          dispatch(setAleState(currentAleState + 1));
        }
      }

      dispatch(
        writeResult({ index: currentQuestion, mark: Number(values.mark) })
      );

      actions.resetForm({
        values: initialValues,
      });

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

      actions.resetForm({
        values: { mark: 0 },
      });
      setIsAnswerTurn(false);
    } else {
      if (currentAdvice === 9) {
        navigate("/results");
      }
      setIsAnswerTurn(true);
      dispatch(setCurrentAdvice(currentAdvice + 1));
    }
  };

  return (
    <div className="quiz">
      <div className="quiz__heading">
        <div className="quiz__icon">
          {isAnswerTurn ? (
            <img src={AleIcon} alt="Иконка Ёлки" />
          ) : (
            <img src={QiwiIcon} alt="Иконка Qiwi" />
          )}
        </div>
        <div className="quiz__state">
          {isAnswerTurn ? (
            <>
              <QuizProgressBar
                currentQuestion={currentQuestion}
                amountOfQuestion={10}
              />
              <div className="quiz__question">
                {questions[currentQuestion].title}
              </div>
            </>
          ) : (
            <div className="quiz__question">{advices[currentAdvice].text}</div>
          )}
        </div>
      </div>
      <div className="quiz__content">
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            handleSubmit(values, actions);
          }}
        >
          {({ values }) => {
            return (
              <Form>
                <div className="quiz__answers">
                  {isAnswerTurn ? (
                    <>
                      {questions[currentQuestion].answers.map(
                        (answer, index) => {
                          return (
                            <Answer
                              key={index}
                              name="mark"
                              value={answer.text}
                              mark={answer.mark}
                            />
                          );
                        }
                      )}
                    </>
                  ) : null}
                  <Button type="submit" disabled={isAnswerTurn && !values.mark}>
                    Далее
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Quiz;
