import React from "react";

import Layout from "../layouts/index/Layout";
import ContactUs from "../components/ContactUsSection";
import References from "../components/References";
import Ingress from "../components/Ingress";
import Stories from "../components/Stories/Stories";
import Company from "../components/Company/Company";
import HorizontalScroller from "../components/HorizontalScroller";

const IndexPage = () => {
  return (
    <Layout>
      <Ingress />
      <Stories />
      <HorizontalScroller
        textRows={[
          "AWS Azure Shopify Heroku Terraform Scala",
          "TypeScript Next.js Vue Docker Flutter",
          "Node.js PostgreSQL React Spark Python",
        ]}
      />
      <Company />
      <References />
      <ContactUs />
    </Layout>
  );
};

export default IndexPage;
