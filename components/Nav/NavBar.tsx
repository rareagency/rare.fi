import Link from "next/link";
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import { useThresholdScroller } from "../../utils/threshold-scroller";
import Logo from "../Logo";
import * as menuAnimationBlack from "./lottie-menu-icon-black.json";
import * as menuAnimationWhite from "./lottie-menu-icon.json";
import NavItem from "./NavItem";
import { links } from "./pagelinks";

const NavBar: React.FC<{ theme?: "dark" | "light" }> = ({
  theme = "light",
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [animationPaused, setAnimationPaused] = useState(true);

  const userIsScrolled = useThresholdScroller();

  const toggleBodyElementLock = () => {
    if (menuIsOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  };
  useEffect(toggleBodyElementLock, [menuIsOpen]);

  function toggleMenu() {
    setMenuIsOpen(!menuIsOpen);
    setAnimationPaused(false);
  }

  return (
    <nav
      className={`${
        userIsScrolled && !menuIsOpen
          ? "bg-action-purple"
          : `${theme === "light" ? "bg-white" : "bg-black"}`
      } w-full layout-grid col-all transition-all duration-300 z-20 fixed px-8`}
    >
      <div
        className={`${
          userIsScrolled && !menuIsOpen ? "py-4" : "py-16 md:py-6"
        } transition-all duration-300 flex items-center justify-between col-start-2 col-end-8`}
      >
        <Link href="/">
          <a className="z-30">
            <Logo
              kind={
                theme === "dark" || userIsScrolled || menuIsOpen
                  ? "light"
                  : "dark"
              }
              size={userIsScrolled ? "sm" : "md"}
            />
          </a>
        </Link>

        <section className="space-x-16 text-xl inline-flex lg:hidden">
          {links.map((link) => (
            <NavItem
              theme={userIsScrolled ? "dark" : theme}
              url={link.url}
              text={link.text}
              key={link.text}
              hasBadge={link.hasBadge}
              size={userIsScrolled ? "sm" : "md"}
            />
          ))}
        </section>

        {/* The onClick is passed to the Lottie instance, so it being a clickable div, not a button, shouldn't matter */}
        {/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className="hidden lg:inline-flex z-30" onClick={toggleMenu}>
          <Lottie
            animationData={
              !userIsScrolled && theme === "light" && !menuIsOpen
                ? menuAnimationBlack
                : menuAnimationWhite
            }
            play={!animationPaused}
            loop={false}
            onComplete={() => setAnimationPaused(true)}
            style={{ width: 30, height: 30 }}
            direction={menuIsOpen ? 1 : -1}
            speed={4}
          />
        </div>

        <div
          className={`${
            menuIsOpen
              ? "fixed w-full h-screen overflow-hidden animate-blur-in"
              : "hidden"
          } inset-0 bg-action-purple z-20 flex flex-col`}
        >
          <section className="flex flex-1 flex-col content-start pt-44 px-4 text-xl">
            {links.map((link) => (
              <div key={link.text} className="pb-10 text-left">
                <NavItem
                  url={link.url}
                  text={link.text}
                  hasBadge={link.hasBadge}
                />
              </div>
            ))}
          </section>
          <section className="bg-white p-8">
            <p className="font-header-mono font-thin text-sm text-left uppercase pt-0 pb-6">
              Follow our stories on:
            </p>
            <div className="flex">
              <a
                href="https://github.com/rareagency/rareagency.fi"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/static/social-media/github.svg"
                  alt="GitHub logo"
                  className="w-1/7 pr-4"
                />
              </a>
              <a
                href="https://www.instagram.com/rarekoodaa"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/static/social-media/instagram.svg"
                  alt="Instagram logo"
                  className="w-1/7 pr-4"
                />
              </a>
              <a
                href="https://fi.linkedin.com/company/rareagency"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/static/social-media/linkedin.svg"
                  alt="LinkedIn logo"
                  className="w-1/7"
                />
              </a>
            </div>
          </section>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
