import React from "react";

import Layout from "../layouts/Lander";
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
          "Heroku Next.js Vue Docker Flutter",
          "AWS Shopify TypeScript Azure Terraform Scala",
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
