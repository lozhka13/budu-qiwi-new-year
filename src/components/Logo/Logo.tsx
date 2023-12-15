import React from "react";
import LogoWhite from "../../assets/logo-white.svg";
import LogoBlack from "../../assets/logo-black.svg";
import "./Logo.scss";
import { useLocation } from "react-router-dom";
import MediaQuery from "react-responsive";

const Logo = () => {
  const location = useLocation();

  return (
    <div className="logo">
      <img src={LogoBlack} alt="БУДУ" className="" logo__icon--black />
      {/* <img src={LogoWhite} alt="БУДУ" className="" logo__icon--white /> */}
    </div>
  );
};

export default Logo;
