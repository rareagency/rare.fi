import React from "react";
import { ContactRiku } from "../../components/ContactUs/ContactRiku";
import { ContactUsHeader } from "../../components/ContactUs/ContactUsHeader";
import JoinUsSection from "../../components/JoinUsSection";
import Layout from "../../layouts/Page";

const ContactUs = () => (
  <Layout title="Let's chat - Rare Tampere">
    <ContactUsHeader />
    <ContactRiku />
    <JoinUsSection>Learn more about working with Rare</JoinUsSection>
  </Layout>
);

export default ContactUs;
