import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import NavItem from "./NavItem";
import Lottie from "react-lottie";
import * as menuAnimationWhite from "./lottie-menu-icon.json";
import * as menuAnimationBlack from "./lottie-menu-icon-black.json";
import { links } from "../../utils/pagelinks";

const SMALL_MENU_SCROLL_THRESHOLD = 150;

const NavBar: React.FC<{ theme?: "dark" | "light" }> = ({
  theme = "light",
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [animationPaused, setAnimationPaused] = useState(true);
  const [userIsScrolled, setUserIsScrolled] = useState(false);

  function toggleMenu() {
    setMenuIsOpen(!menuIsOpen);
    setAnimationPaused(false);

    // kinda dirty solution to remove scrolling when menu is open, but it works
    const bodyElement = document.getElementsByTagName("body")[0];

    if (menuIsOpen) {
      bodyElement.classList.remove("modal-open");
      return;
    }

    bodyElement.classList.add("modal-open");
    return;
  }

  function listenScrollEvent() {
    if (window.scrollY < SMALL_MENU_SCROLL_THRESHOLD) {
      setUserIsScrolled(false);
    } else if (window.scrollY >= SMALL_MENU_SCROLL_THRESHOLD) {
      setUserIsScrolled(true);
    }
  }

  useEffect(() => {
    if (window.scrollY > SMALL_MENU_SCROLL_THRESHOLD) {
      setUserIsScrolled(true);
    }

    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

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
          userIsScrolled && !menuIsOpen ? "pt-4 pb-4" : "pt-16 pb-16"
        } transition-all duration-300 flex items-center justify-between col-start-2 col-end-8`}
      >
        <Link href="/">
          <a className="z-30">
            {theme === "dark" || userIsScrolled || menuIsOpen ? (
              <Logo kind="light" />
            ) : (
              <Logo kind="dark" />
            )}
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
              scroll={link.scroll}
            />
          ))}
        </section>

        <div className="hidden lg:inline-flex z-30" onClick={toggleMenu}>
          <Lottie
            options={{
              animationData:
                !userIsScrolled && theme === "light" && !menuIsOpen
                  ? menuAnimationBlack
                  : menuAnimationWhite,
              autoplay: false,
              loop: false,
            }}
            height={30}
            width={30}
            isPaused={animationPaused}
            eventListeners={[
              {
                eventName: "complete",
                callback: () => setAnimationPaused(true),
              },
            ]}
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
          <section className="flex flex-1 flex-col content-start pt-44 px-4">
            {links.map((link) => (
              <div key={link.text} className="pb-10 text-left">
                <NavItem
                  url={link.url}
                  text={link.text}
                  hasBadge={link.hasBadge}
                  scroll={link.scroll}
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
                  alt="Instagram"
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
                  alt="Instagram"
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
                  alt="Instagram"
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
