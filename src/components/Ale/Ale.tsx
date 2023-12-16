import React, { useEffect } from "react";
import "./Ale.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

import AleVeryBadNeutral from "../../assets/ale/very-bad_neutral.svg";
import AleVeryBadFalse from "../../assets/ale/very-bad_false.svg";
import AleVeryBadRight from "../../assets/ale/very-bad_right.svg";

import AleBadNeutral from "../../assets/ale/bad_neutral.svg";
import AleBadFalse from "../../assets/ale/bad_false.svg";
import AleBadRight from "../../assets/ale/bad_right.svg";

import AleNormalNeutral from "../../assets/ale/normal_neutral.svg";
import AleNormalFalse from "../../assets/ale/normal_false.svg";
import AleNormalRight from "../../assets/ale/normal_right.svg";

import AleGoodNeutral from "../../assets/ale/good_neutral.svg";
import AleGoodFalse from "../../assets/ale/good_false.svg";
import AleGoodRight from "../../assets/ale/good_right.svg";

import AleVeryGoodNeutral from "../../assets/ale/very-good_neutral.svg";
import AleVeryGoodFalse from "../../assets/ale/very-good_false.svg";
import AleVeryGoodRight from "../../assets/ale/very-good_right.svg";

interface IAle {
  isAnswerTurn: boolean;
}

const Ale: React.FC<IAle> = (props) => {
  const { isAnswerTurn } = props;
  const { currentQuestion, total, currentAleState } = useSelector(
    (state: RootState) => state.quiz
  );

  useEffect(() => {
    const body: HTMLBodyElement | null = document.querySelector("body");
    if (body !== null) {
      if (currentAleState > 2) {
        body.classList.add("positive-body");
      } else {
        body.classList.add("negative-body");
      }
    }

    return () => {
      if (body !== null) {
        body.classList.remove("positive-body");
        body.classList.remove("negative-body");
      }
    };
  }, [currentAleState]);

  const aleMood: Record<number, any> = {
    0: { 5: AleVeryBadFalse, 10: AleVeryBadNeutral, 15: AleVeryBadRight },
    1: { 5: AleBadFalse, 10: AleBadNeutral, 15: AleBadRight },
    2: { 5: AleNormalFalse, 10: AleNormalNeutral, 15: AleNormalRight },
    3: { 5: AleGoodFalse, 10: AleGoodNeutral, 15: AleGoodRight },
    4: { 5: AleVeryGoodFalse, 10: AleVeryGoodNeutral, 15: AleVeryGoodRight },
  };

  return (
    <div className="ale">
      <img
        src={aleMood[currentAleState][total[currentQuestion - 1] ?? 10]}
        alt=""
      />
    </div>
  );
};

export default Ale;
