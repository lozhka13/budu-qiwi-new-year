import React, { useRef, useState } from "react";
import AleIcon from "../../assets/ale-icon.svg";
import "./Quiz.scss";
import QuizProgressBar from "../QuizProgressBar/QuizProgressBar";
import questions from "../../data/questions.json";
import { Form, Formik } from "formik";
import Answer from "../Answer/Answer";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { writeResult } from "../../reducers/markReducer";

interface IQuiz {
  information?: string;
  currentQuestion: number;
  setCurrentQuestion: any;
}

const Quiz: React.FC<IQuiz> = (props) => {
  const { information, currentQuestion, setCurrentQuestion } = props;
  const navigator = useNavigate();
  const initialValues = {
    mark: 0,
  };

  const dispatch = useDispatch();

  const formikRef = useRef<any>(null);

  const handleSubmit = (values: any, actions: any) => {
    // console.log("values", values);
    // console.log("resetForm", resetForm);
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
    // if (currentQuestion < questions.length - 1) {
    setCurrentQuestion((prev: number) => prev + 1);
    // } else {
    // if (layoutRef.current) {
    //   layoutRef.current.classList.remove("page-entry");
    //   layoutRef.current.classList.add("page-exit");
    // }
    // setTimeout(() => {
    //   navigator(`/`);
    // }, 500);
    // }
  };

  return (
    <div className="quiz">
      <div className="quiz__heading">
        <div className="quiz__icon">
          <img src={AleIcon} alt="Иконка Ёлки" />
        </div>
        <div className="quiz__state">
          <QuizProgressBar
            currentQuestion={currentQuestion}
            amountOfQuestion={10}
          />
          <div className="quiz__question">
            {questions[currentQuestion].title}
          </div>
        </div>
      </div>
      <div className="quiz__content">
        <Formik
          innerRef={formikRef}
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            handleSubmit(values, actions);
          }}
        >
          {({ values }) => {
            console.log("values", values);
            return (
              <Form>
                <div className="quiz__answers">
                  {questions[currentQuestion].answers.map((answer, index) => {
                    console.log("answer", answer);
                    return (
                      <Answer
                        key={index}
                        name="mark"
                        value={answer.text}
                        mark={answer.mark}
                      />
                    );
                  })}
                  <Button type="submit" disabled={!values.mark}>
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
