import React from "react";
import LogoWhite from "../../assets/logo-white.svg";
import LogoBlack from "../../assets/logo-black.svg";
import "./Logo.scss";
import { useLocation } from "react-router-dom";
import MediaQuery from "react-responsive";

interface ILogo {
  isHeaderMaximized?: boolean;
}

const Logo: React.FC<ILogo> = (props) => {
  const { isHeaderMaximized = true } = props;

  return (
    <div className="logo">
      {isHeaderMaximized ? (
        <img src={LogoBlack} alt="БУДУ" className="" logo__icon--black />
      ) : (
        <img src={LogoWhite} alt="БУДУ" className="" logo__icon--white />
      )}
    </div>
  );
};

export default Logo;
