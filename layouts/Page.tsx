import React from "react";
import BottomFooter from "../components/Footer/BottomFooter";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/StoriesHeader";
import Base from "./Base";
// TODO: Enable this when Subscribe to Rare actually does something.
// import Floater from "../components/Floater";

const Page: React.FC<{
  title: string;
  children?: React.ReactNode | string;
}> = ({ children, title }) => (
  <Base title={title}>
    <Header />
    {children}
    <Footer />
    <BottomFooter />
    {/* <Floater /> */}
  </Base>
);

export default Page;
