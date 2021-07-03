import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import NavItem from "./NavItem";
import Lottie from 'react-lottie';
import * as animationData from './lottie-menu-icon.json'
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
  }

  function listenScrollEvent() {
    if (window.scrollY < SMALL_MENU_SCROLL_THRESHOLD) {
      setUserIsScrolled(false)
    } else if (window.scrollY >= SMALL_MENU_SCROLL_THRESHOLD) {
      setUserIsScrolled(true)
    } 
  }

  useEffect(() => {
    if (window.scrollY > SMALL_MENU_SCROLL_THRESHOLD) {
      setUserIsScrolled(true);
    }

    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, [])


  console.log(userIsScrolled);

  return (
    <nav className={`${userIsScrolled && !menuIsOpen ? 'bg-action-purple pt-8 pb-8' : 'bg-black pt-16 pb-16'} transition-all duration-300 z-20 fixed w-full flex items-center justify-between h-16 xl:pl-8 xl:pr-8`}>
      <Link href="/">
        <a className="z-30">{theme === "dark" ? <Logo kind="light" /> : <Logo kind="dark" />}</a>
      </Link>

      <div className="space-x-16 text-xl inline-flex lg:hidden">
        {links.map((link) => (
          <NavItem
            theme={theme}
            url={link.url}
            text={link.text}
            key={link.text}
            hasBadge={link.hasBadge}
            scroll={link.scroll}
          />
        ))}
      </div>

      <div id="menu-container" className="hidden lg:inline-flex z-30" onClick={toggleMenu}>
        <Lottie
          options={{ animationData, autoplay: false, loop: false }}
          height={40}
          width={40}
          isPaused={animationPaused}
          eventListeners={[{ eventName: 'complete', callback: () => setAnimationPaused(true) }]}
          direction={menuIsOpen ? 1 : -1}
          speed={4}
        />
      </div>

      <div className={`${menuIsOpen ? 'fixed w-full h-full animate-blur-in' : 'hidden'} inset-0 bg-action-purple z-20 overflow-y-auto`}>
        <p>moro</p>
      </div>
    </nav>
  );
};

export default NavBar;
