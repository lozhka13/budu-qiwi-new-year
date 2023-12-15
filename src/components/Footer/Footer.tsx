import React from "react";
import "./Footer.scss";
import Socials from "../Socials/Socials";
import Contacts from "../Contacts/Contacts";
import Container from "../../hoc/Container/Container";

const Footer: React.FC = () => {
  return (
    <div className="footer__container">
      <Container>
        <footer className="footer">
          <Contacts />
          <Socials />
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
