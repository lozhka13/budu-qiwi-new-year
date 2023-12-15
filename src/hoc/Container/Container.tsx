import React from "react";
import "./Container.scss";

interface IContainer {
  children: React.ReactNode;
}

const Container: React.FC<IContainer> = (props) => {
  const { children } = props;

  return <div className="container">{children}</div>;
};

export default Container;
