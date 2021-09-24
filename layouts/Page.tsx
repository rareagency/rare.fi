import React from "react";
import Header from "../components/Header/StoriesHeader";
import Base from "./Base";
import Footer from "../components/Footer/Footer";
import BottomFooter from "../components/Footer/BottomFooter";
import Floater from "../components/Floater";

const Page: React.FC<{ title: string }> = ({ children, title }) => (
  <Base title={title}>
    <Header />
    {children}
    <Footer />
    <BottomFooter />
    <Floater />
  </Base>
);

export default Page;
