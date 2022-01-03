import React from "react";
import { c } from "../utils/classnames";

const References = () => {
  const logo = "relative";

  const logoHover =
    "absolute bottom-0 left-0 transition hover:translate-y-1 duration-150 opacity-20 md:hidden";

  const logoRow = `col-start-2 col-span-6 flex justify-between items-center w-full mb-16 space-x-8
  lg:grid lg:grid-cols-2 lg:space-x-0 lg:justify-items-center md:grid-cols-1
  gapmd:grid md:grid-cols-2 lg:gap-y-16 md:-y-6 md:gap-x-4 lg:mb-6
  `;

  return (
    <section
      id="references"
      className="layout-grid col-all justify-items-center py-32 px-8 sm:py-16 md:py-24 lg:gap-y-16 md:gap-y-8"
    >
      <h5 className="text-center col-start-2 col-span-6 pb-16 lg:pb-8">
        Proudly delivered digital products with
      </h5>
      <div className={c(logoRow)}>
        <a
          href="https://www.tieto.com/fi/"
          target="_blank"
          rel="noreferrer"
          className={c(logo)}
        >
          <img src="/static/references/tieto.svg" alt="Tieto Oyj" />
          <div className={c(logoHover)}>
            <img src="/static/references/tieto.svg" alt="Tieto Oyj" />
          </div>
        </a>
        <a
          href="https://www.simucu.be/"
          target="_blank"
          rel="noreferrer"
          className={logo}
        >
          <img src="/static/references/simucube.svg" alt="Simucube" />
          <div className={logoHover}>
            <img src="/static/references/simucube.svg" alt="Simucube" />
          </div>
        </a>
        <a
          href="https://instagrid.co"
          target="_blank"
          rel="noreferrer"
          className={logo}
        >
          <img
            src="/static/references/instagrid.svg"
            className="w-[150px] sm:w-[140px]"
            alt="Instagrid"
          />
          <div className={logoHover}>
            <img
              src="/static/references/instagrid.svg"
              className="w-[150px] sm:w-[140px]"
              alt="Instagrid"
            />
          </div>
        </a>
        <a
          href="https://plan-international.org/"
          target="_blank"
          rel="noreferrer"
          className={logo}
        >
          <img src="/static/references/plan.svg" alt="Plan International" />
          <div className={logoHover}>
            <img src="/static/references/plan.svg" alt="Plan International" />
          </div>
        </a>
      </div>
      <div className={logoRow}>
        <a
          href="https://linnunrata.fi"
          target="_blank"
          rel="noreferrer"
          className={logo}
        >
          <img src="/static/references/linnunrata.svg" alt="Linnunrata" />
          <div className={logoHover}>
            <img src="/static/references/linnunrata.svg" alt="Linnunrata" />
          </div>
        </a>
        <a
          href="https://cultsecurity.com/"
          target="_blank"
          rel="noreferrer"
          className={logo}
        >
          <img
            src="/static/references/cult-black.png"
            className="w-[150px]"
            alt="Cult Security"
          />
          <div className={logoHover}>
            <img
              src="/static/references/cult-black.png"
              className="w-[150px]"
              alt="Cult Security"
            />
          </div>
        </a>
        <a
          href="https://sharpershape.com/"
          target="_blank"
          rel="noreferrer"
          className={logo}
        >
          <img src="/static/references/sharper-shape.svg" alt="Sharper Shape" />
          <div className={logoHover}>
            <img
              src="/static/references/sharper-shape.svg"
              alt="Sharper Shape"
            />
          </div>
        </a>
        <a
          href="https://www.veracell.com/"
          target="_blank"
          rel="noreferrer"
          className={logo}
        >
          <img src="/static/references/veracell.svg" alt="Veracell" />
          <div className={logoHover}>
            <img src="/static/references/veracell.svg" alt="Veracell" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default References;
