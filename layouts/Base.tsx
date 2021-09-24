import Head from "next/head";
import React from "react";
import CookieConsent from "../components/CookieConsent";
import { c } from "../utils/classnames";

const TITLE = "Rare Tampere - Software made collaborative";

const Base: React.FC<{ title?: string; kind?: "dark" | "light" }> = ({
  title,
  children,
  kind = "light",
}) => {
  return (
    <>
      <Head>
        <title>{title ?? TITLE}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" sizes="16x16 32x32 64x64" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/static/icons/rare-icon-192.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="192x192"
          href="/static/icons/rare-icon-192.png"
        />
      </Head>

      <main className={c("layout-grid", kind)}>{children}</main>

      <CookieConsent />

      <style jsx>{`
        .layout-grid {
          transition: background-color 150ms ease-in-out;
        }
        .light {
          @apply bg-white;
        }
        .dark {
          @apply bg-black md:bg-white;
        }
      `}</style>
    </>
  );
};

export default Base;
