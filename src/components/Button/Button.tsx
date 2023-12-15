import React from "react";
import "./Button.scss";

type ButtonType = "button" | "submit" | "reset";
type ButtonSize = "common" | "large";

interface IButton {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (event: any) => void;
  type?: ButtonType;
  size?: ButtonSize;
}

const Button: React.FC<IButton> = (props) => {
  const {
    children,
    disabled = false,
    onClick,
    type = "button",
    size = "common",
  } = props;

  const handleClick = (event: any) => {
    onClick && onClick(event);
  };

  return (
    <button
      type={type}
      className={`button button--${size}`}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
