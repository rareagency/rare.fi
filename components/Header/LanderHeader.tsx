import React from "react";
import { c } from "../../utils/classnames";
import { useThresholdScroller } from "../../utils/threshold-scroller";
import NavBar from "../Nav/NavBar";

const Header = () => {
  const isUserScrolled = useThresholdScroller({ threshold: 500 });

  return (
    <header
      id="page-header"
      className={c("col-all layout-grid min-h-screen md:min-h-0 ", {
        "bg-black": !isUserScrolled,
        "bg-white": isUserScrolled,
        "lg:bg-black": isUserScrolled,
      })}
    >
      <NavBar theme="dark" />
      <div className="lander-header col-start-2 col-end-8 relative flex flex-col">
        <h1
          className={c(
            "text-off-white mt-[34vh] mb-20 xl:p-8 md:mt-[20vh] md:mb-0 break-words",
            {
              "text-black": isUserScrolled,
              "lg:text-off-white": isUserScrolled,
            }
          )}
        >
          Everyday
          <br />
          contribution to
          <br />
          envision{" "}
          <span className="font-header-mono lowercase font-light">
            a better
            <br />
            digital world of tomorrow
          </span>
        </h1>
      </div>

      <style jsx>{`
        #page-header {
          transition: all 200ms ease-in-out;
        }
      `}</style>
    </header>
  );
};

export default Header;
