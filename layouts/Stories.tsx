import React from "react";
import Header from "../components/Header/StoriesHeader";
import Base from "./Base";
import Footer from "../components/Footer/Footer";
import BottomFooter from "../components/Footer/BottomFooter";

const Layout: React.FC = ({ children }) => {
  return (
    <Base>
      <Header />
      {children}
      <Footer />
      <BottomFooter />
    </Base>
  );
};

export default Layout;
