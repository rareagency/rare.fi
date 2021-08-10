import React from "react";

const References = () => {
  const logo = "relative";

  const logoHover =
    "absolute bottom-0 left-0 transition hover:translate-y-1 duration-150";

  const logoRow =
    "col-start-2 col-span-6 flex justify-between items-center w-full mb-16 space-x-8 lg:grid lg:grid-cols-2 lg:space-x-0 lg:justify-items-center lg:gap-y-16 md:grid-cols-1";

  return (
    <section
      id="references"
      className="layout-grid col-all justify-items-center pt-48 pb-48 p-8"
    >
      <h5 className="col-start-2 col-span-6 pb-16 text-center">
        Proudly delivered digital products with
      </h5>
      <div className={logoRow}>
        <a
          href="https://www.tieto.com/fi/"
          target="_blank"
          rel="noreferrer"
          className={logo}
        >
          <img src="/static/references/tieto.svg" alt="Tieto Oyj" />
          <div className={logoHover}>
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
