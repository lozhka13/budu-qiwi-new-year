import React from "react";
import Contacts from "../Contacts/Contacts";
import Logo from "../Logo/Logo";
import "./Header.scss";

interface IHeader {
  isHeaderMaximized: boolean;
}

const Header: React.FC<IHeader> = (props) => {
  const { isHeaderMaximized = true } = props;
  return (
    <header
      className={`header header--${
        isHeaderMaximized ? "maximized" : "minimized"
      }`}
    >
      <Logo isHeaderMaximized={isHeaderMaximized} />
      {isHeaderMaximized ? <Contacts /> : null}
    </header>
  );
};

export default Header;
