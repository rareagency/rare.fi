import React from "react";
import { AppProps } from "next/app";
import "../styles/globals.scss";
import "../public/fonts/fonts.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
