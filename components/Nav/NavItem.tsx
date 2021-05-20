import React from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { c } from "../../utils/classnames";

type NavProps = {
  url: string;
  text: string;
  theme?: "dark" | "light";
  hasBadge?: boolean;
};

const NavItem = ({ url, text, theme = "dark", hasBadge = false }: NavProps) => {
  const router = useRouter();
  const isLinkActive = router.asPath === url;

  return (
    <>
      <Link href={url}>
        <a
          className={c("lg:px-4 py-1 uppercase font-default font-bold", {
            "nav-link-active": isLinkActive,
            "nav-link-badge": hasBadge,
            "text-light": theme === "dark",
            "text-dark-blue": theme === "light",
          })}
        >
          {text}
        </a>
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
