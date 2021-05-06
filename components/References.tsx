import React from "react";

const References = () => {
  const logo =
    "opacity-90 hover:opacity-100 transform transition-opacity hover:scale-105";

  return (
    <section className="col-all grid justify-items-center pt-48 pb-48 p-8">
      <h3 className="pb-8 title2">Proudly delivered digital products with</h3>
      <div className="grid grid-cols-4 gap-x-16 gap-y-8 p-4 md:grid-cols-2">
        <a
          href="https://www.tieto.com/fi/"
          target="_blank"
          rel="noreferrer"
          className={logo}
        >
          <img src="/static/references/tieto.svg" alt="Tieto Oyj" />
        </a>
        <a
          href="https://www.simucu.be/"
          target="_blank"
          rel="noreferrer"
          className={logo}
        >
          <img src="/static/references/simucube.svg" alt="Simucube" />
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
        </a>
        <a
          href="https://plan-international.org/"
          target="_blank"
          rel="noreferrer"
          className={logo}
        >
          <img src="/static/references/plan.svg" alt="Plan International" />
        </a>
        <a
          href="https://linnunrata.fi"
          target="_blank"
          rel="noreferrer"
          className={logo}
        >
          <img src="/static/references/linnunrata.svg" alt="Linnunrata" />
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
        </a>
        <a
          href="https://sharpershape.com/"
          target="_blank"
          rel="noreferrer"
          className={logo}
        >
          <img src="/static/references/sharper-shape.svg" alt="Sharper Shape" />
        </a>
        <a
          href="https://www.veracell.com/"
          target="_blank"
          rel="noreferrer"
          className={logo}
        >
          <img src="/static/references/veracell.svg" alt="Veracell" />
        </a>
      </div>
    </section>
  );
};

export default References;
