import React from "react";
import "./Answer.scss";
import { Field, useField } from "formik";
import CheckIcon from "../../assets/check double.svg";

interface IAnswer {
  name: string;
  value: string;
}

const Answer: React.FC<IAnswer> = (props) => {
  const { name, value } = props;
  const [field] = useField(name);

  return (
    <label
      className={`answer answer--${
        field.value === value ? "checked" : "not-checked"
      }`}
    >
      <span>
        <Field
          type="radio"
          name={name}
          value={value}
          className="answer__checkbox"
        />
        {value}
      </span>
      <img src={CheckIcon} alt="check" />
    </label>
  );
};

export default Answer;
