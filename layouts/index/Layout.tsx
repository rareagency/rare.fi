import React, { ReactNode } from "react";
import Header from "./Header";
import Base from "../Base";
import Footer from "../../components/Footer/Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => {
  return (
    <Base>
      <Header />
      {children}
      <Footer />
    </Base>
  );
};

export default Layout;
