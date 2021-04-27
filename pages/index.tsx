import React from "react";

import Layout from "../layouts/index/Layout";
import ContactUs from "../components/ContactUsSection";
import References from "../components/References";
import Ingress from "../components/Ingress";
import Stories from "../components/Stories/Stories";
import Company from "../components/Company/Company";

const IndexPage = () => {
  return (
    <Layout>
      <Ingress />
      <Stories />
      <Company />
      <References />
      <ContactUs />
    </Layout>
  );
};

export default IndexPage;
