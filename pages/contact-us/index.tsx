import React from "react";
import { ContactRiku } from "../../components/ContactUs/ContactRiku";
import { ContactUsHeader } from "../../components/ContactUs/ContactUsHeader";
import SkaterBlock from "../../components/SkaterBlock";
import Layout from "../../layouts/Page";

const ContactUs = () => (
  <Layout title="Let's chat - Rare Tampere">
    <ContactUsHeader />
    <ContactRiku />
    <SkaterBlock buttonUrl="mailto:rekry@rare.fi" buttonTxt="Dare to join Rare">
      Rare family welcomes people of any shape and form
    </SkaterBlock>
  </Layout>
);

export default ContactUs;
