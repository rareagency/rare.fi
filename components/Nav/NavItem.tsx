import React from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { c } from "../../utils/classnames";
import { smoothScroll } from "../../utils/smoothScroll";

type Props = {
  url: string;
  text: string;
  theme?: "dark" | "light";
  hasBadge?: boolean;
  scroll?: boolean;
  size?: "sm" | "md";
};

const NavItem = ({
  url,
  text,
  theme = "dark",
  hasBadge = false,
  scroll,
  size,
}: Props) => {
  const router = useRouter();
  const isLinkActive = router.asPath === url;

  const linkClasses = c(
    "lg:px-4 py-1 uppercase font-default font-bold transition-size duration-300",
    {
      "text-base": size === "sm",
      "nav-link-active": isLinkActive,
      "nav-link-badge": hasBadge,
      "text-white": theme === "dark",
      "hover:text-light-blue": theme === "dark",
      "text-dark-blue": theme === "light",
      "hover:text-action-purple": theme === "light",
    }
  );

  if (scroll) {
    return (
      <a
        href={`/#${url}`}
        className={`${linkClasses} cursor-pointer`}
        onClick={(e) => smoothScroll(url, e)}
      >
        {text}
      </a>
    );
  }

  return (
    <>
      <Link href={url}>
        <a className={linkClasses}>{text}</a>
      </Link>

      <style jsx>{`
        .nav-link-active::before {
          content: "/";
          transform: scaleX(1.5);
          @apply inline-block mr-2;
        }

        .nav-link-badge {
          @apply relative;
        }

        .nav-link-badge::after {
          content: "";
          @apply absolute block rounded-full top-0 -right-2.5 bg-notification-red h-3 w-3;
        }
      `}</style>
    </>
  );
};

export default NavItem;
