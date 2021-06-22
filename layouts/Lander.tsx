import React, { ReactNode } from "react";
import Header from "../components/Header/LanderHeader";
import Base from "./Base";
import Footer from "../components/Footer/Footer";
import BottomFooter from "../components/Footer/BottomFooter";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => {
  return (
    <Base title="Rare Tampere - Software made collaborative">
      <Header />
      {children}
      <Footer />
      <BottomFooter />
    </Base>
  );
};

export default Layout;
