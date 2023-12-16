import React from "react";
import "./Answer.scss";
import { Field, useField } from "formik";
import CheckIcon from "../../assets/check double.svg";

interface IAnswer {
  name: string;
  value: string;
  mark: number;
}

const Answer: React.FC<IAnswer> = (props) => {
  const { name, value, mark } = props;
  const [field] = useField(name);

  return (
    <label
      className={`answer answer--${
        field.value === String(mark) ? "checked" : "not-checked"
      }`}
    >
      <span>
        <Field
          type="radio"
          name={name}
          value={mark}
          className="answer__checkbox"
        />
        {value}
      </span>
      <img src={CheckIcon} alt="check" />
    </label>
  );
};

export default Answer;
