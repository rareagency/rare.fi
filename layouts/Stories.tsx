import React from "react";
import Header from "../components/Header/StoriesHeader";
import Base from "./Base";
import Footer from "../components/Footer/Footer";
import BottomFooter from "../components/Footer/BottomFooter";
import Floater from "../components/Floater";

const Layout: React.FC = ({ children }) => {
  return (
    <Base title="Rare Tampere - Stories">
      <Header />
      {children}
      <Footer />
      <BottomFooter />
      <Floater />
    </Base>
  );
};

export default Layout;
