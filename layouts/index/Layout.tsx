import React, { ReactNode } from "react";
import Header from "./Header";
import Base from "../Base";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Base />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
