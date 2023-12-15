import React from "react";
import Contacts from "../Contacts/Contacts";
import Logo from "../Logo/Logo";
import "./Header.scss";

interface IHeader {}

const Header: React.FC<IHeader> = (props) => {
  return (
    <header className="header">
      <Logo />
      <Contacts />
    </header>
  );
};

export default Header;
