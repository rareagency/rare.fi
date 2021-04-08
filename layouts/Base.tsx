import React from "react";
import Head from "next/head";

const TITLE = "Rare Tampere - 2020-luvun ohjelmistokehitystä";

const Base = () => {
  return (
    <Head>
      <title>{TITLE}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};

export default Base;
