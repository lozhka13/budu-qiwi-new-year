import React from "react";
import Icons from "../../assets/icons-sprite.svg";

interface IIcon {
  name: string;
  onClick?: (event: any) => void;
  className?: string;
  id?: string;
  width?: number;
  height?: number;
  title?: string;
  isClicked?: boolean;
}

const Icon: React.FC<IIcon> = (props) => {
  const {
    name,
    onClick,
    width = 16,
    height = 16,
    id,
    className = "",
    title,
    isClicked,
  } = props;

  return (
    <svg
      width={width}
      height={height}
      id={id}
      className={`
            icon
            icon-${name}
            ${className}
            ${onClick && "icon-clickable"}
            icon__${name}${isClicked ? "--clicked" : ""}`}
      onClick={(event) => onClick && onClick(event)}
    >
      {title && <title>{title}</title>}
      <use href={`${Icons}#${name}`} />
    </svg>
  );
};

export default Icon;
