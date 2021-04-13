import React from "react";

import Layout from "../layouts/index/Layout";
import ContactUs from "../components/ContactUsSection";
import References from "../components/References";

const IndexPage = () => {
  return (
    <Layout>
      <References />
      <ContactUs />
    </Layout>
  );
};

export default IndexPage;
