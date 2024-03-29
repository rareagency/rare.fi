import Head from "next/head";
import React from "react";
import CookieConsent from "../components/CookieConsent";
import { c } from "../utils/classnames";

const TITLE = "Rare Tampere - Software made collaborative";
const DESCRIPTION =
  "Everyday contribution to envision a better digital world of tomorrow";

interface Props {
  title?: string;
  description?: string;
  kind?: "dark" | "light";
}

const Base: React.FC<Props> = ({
  title,
  description,
  children,
  kind = "light",
}) => {
  return (
    <>
      <Head>
        <title>{title ?? TITLE}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={description || DESCRIPTION} />
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
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rare.fi/" />
        <meta property="og:title" content={title ?? TITLE} />
        <meta property="og:description" content={description || DESCRIPTION} />
        <meta property="og:image" content="/static/meta-image.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rare.fi/" />
        <meta property="twitter:title" content={title ?? TITLE} />
        <meta
          property="twitter:description"
          content={description || DESCRIPTION}
        />
        <meta property="twitter:image" content="/static/meta-image.jpg" />
      </Head>

      <main className={c("layout-grid-base", kind)}>{children}</main>

      <CookieConsent />

      <style jsx>{`
        .layout-grid-base {
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
