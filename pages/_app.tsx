import React from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import "../public/fonts/fonts.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
