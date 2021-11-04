import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import { hotjar } from "react-hotjar";
import { getItem, setItem } from "../utils/local-storage";

const CookieConsent = () => {
  const [hidden, setHidden] = useState(true);
  const [consent, setConsent] = useState(getItem("cookie_consent"));

  const choose = (accept: boolean) => {
    setItem("cookie_consent", accept);
    setConsent(accept);
    setHidden(true);
  };

  useEffect(() => {
    if (consent === true) {
      hotjar.initialize(2110726, 6);
      // TODO: Add production GA tracking code to the 2nd string
      ReactGA.initialize(
        process.env.NODE_ENV !== "production" ? "G-GJYBBWVBDL" : "G-GJYBBWVBDL"
      );
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, [consent]);

  useEffect(() => {
    setHidden(
      getItem("cookie_consent") !== null &&
        getItem("cookie_consent") !== undefined
    );
  }, []);

  if (hidden) {
    return null;
  }

  return (
    <div className="w-full layout-grid col-all sticky bottom-0 px-4 py-8 z-50 bg-gray-300">
      <section className="flex items-center col-start-2 col-span-4 md:col-all text-sm">
        <div className="flex flex-col tracking-normal">
          We use cookies to collect and analyze website usage and improve the
          experience of our users.
          <p className="mt-0 md:mt-4">
            Find out more about the cookies we use:{" "}
            <Link href="/privacy">
              <a
                target="_blank"
                className="text-[#34517E] border-b-2 border-gray-500 hover:text-dark-blue"
              >
                Cookie &amp; Privacy policy
              </a>
            </Link>
          </p>
        </div>
      </section>

      <section className="flex items-center justify-end md:justify-start w-full col-start-6 col-span-2 mt-0 md:col-start-2 md:col-span-8 md:mt-8">
        <button
          className="underline mr-6 text-base"
          onClick={() => choose(false)}
        >
          Opt-out
        </button>

        <button
          className="button-underline font-semibold text-lg text-action-purple hover:text-dark-blue hover:border-dark-blue"
          onClick={() => choose(true)}
        >
          Accept
        </button>
      </section>
    </div>
  );
};

export default CookieConsent;
