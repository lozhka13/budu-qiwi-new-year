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
import Ale from "../../assets/ELKA.svg";
import Quiz from "../../components/Quiz/Quiz";

interface IQuizPage {}

const QuizPage: React.FC<IQuizPage> = (props) => {
  const { total } = useSelector((state: RootState) => state.mark);
  const initialValues = {
    answer: "",
  };
  const navigator = useNavigate();

  const dispatch = useDispatch();

  const formikRef = useRef<any>(null);
  // const layoutRef = useRef<HTMLDivElement>(null);
  // const titleRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (values: any, actions: any) => {
    console.log("values", values);
    // console.log("resetForm", resetForm);

    actions.resetForm({
      values: initialValues,
    });
    // dispatch(addToTotal(values.mark));

    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: "smooth",
    // });

    // actions.resetForm({
    //   values: { mark: -1 },
    // });
    // if (currentQuestion < questions.length - 1) {
    //   setCurrentQuestion((prev) => prev + 1);
    // } else {
    // if (layoutRef.current) {
    //   layoutRef.current.classList.remove("page-entry");
    //   layoutRef.current.classList.add("page-exit");
    // }
    setTimeout(() => {
      navigator(`/`);
    }, 500);
    // }
  };

  // useEffect(() => {
  //   if (titleRef.current) {
  //     titleRef.current.innerHTML = `${question[currentQuestion].title}`;
  //   }
  // }, [titleRef, currentQuestion]);

  return (
    <Layout hideFooter>
      {/* <Quiz /> */}
      {/* <div className="quiz">
        <div className="quiz-wrapper">
          <div className="quiz-wrapper__content">
            <div className="quiz__top">
              <div className="quiz__title">
                <img src={AleIcon} alt="" />
              </div>
              <div className="quiz__icons">
                <QuizProgressBar
                  amountOfQuestion={questions.length}
                  currentQuestion={currentQuestion}
                />
                <div className="quiz-wrapper__title">
                  {questions[currentQuestion].title}
                </div>
              </div>
            </div>

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
                    <div className="quiz-wrapper__answers">
                      {questions[currentQuestion].answers.map((item, index) => {
                        return (
                          <Answer key={index} name="answer" value={item.text} />
                        );
                      })}
                      <Button type="submit" disabled={!values.answer}>
                        Далее
                      </Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
        <div>
          <img src={Ale} alt="" />
        </div>
      </div> */}
    </Layout>
  );
};

export default QuizPage;
