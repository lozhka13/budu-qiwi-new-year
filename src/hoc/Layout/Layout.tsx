import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Container from "../Container/Container";

interface ILayout {
  children: React.ReactNode;
  hideFooter?: boolean;
}

const Layout: React.FC<ILayout> = (props) => {
  const { children, hideFooter = false } = props;

  return (
    <>
      <Container>
        <Header />
        <main className="main">{children}</main>
      </Container>
      {hideFooter ? null : <Footer />}
    </>
  );
};

export default Layout;
