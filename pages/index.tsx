import React from "react";
import Company from "../components/Company/Company";
import ContactUs from "../components/ContactUsSection";
import BottomFooter from "../components/Footer/BottomFooter";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/LanderHeader";
import HorizontalScroller from "../components/HorizontalScroller";
import Ingress from "../components/Ingress";
import References from "../components/References";
import Stories from "../components/Stories/Stories";
import Base from "../layouts/Base";
import { useThresholdScroller } from "../utils/threshold-scroller";

const IndexPage = () => {
  const isScrolledEnoughForBackgroundChange = useThresholdScroller({
    threshold: 350,
  });

  return (
    <Base kind={isScrolledEnoughForBackgroundChange ? "light" : "dark"}>
      <Header
        textColor={isScrolledEnoughForBackgroundChange ? "light" : "dark"}
      />
      <Ingress
        textColor={isScrolledEnoughForBackgroundChange ? "dark" : "light"}
      />
      <Stories />
      <HorizontalScroller
        textRows={[
          "Heroku Next.js Vue Docker Flutter",
          "AWS Shopify TypeScript Azure Terraform Scala",
          "Node.js PostgreSQL React Spark Python",
        ]}
      />
      <Company />
      <References />
      <ContactUs />
      <Footer />
      <BottomFooter />
    </Base>
  );
};

export default IndexPage;
