import React from "react";

const References = () => {
  return (
    <div className="w-full h-auto grid justify-items-center pt-48 pb-48">
      <div className="text-2xl pb-8">
        Proudly delivered digital products with
      </div>
      <div className="grid grid-cols-4 gap-x-16 gap-y-8 p-4">
        <a href="https://www.tieto.com/fi/" target="blank">
          <img src="/static/references/tieto.svg" alt="Tieto Oyj" />
        </a>
        <a href="https://www.simucu.be/" target="blank">
          <img src="/static/references/simucube.svg" alt="Simucube" />
        </a>
        <a href="https://instagrid.co" target="blank">
          <img
            src="/static/references/instagrid.svg"
            className="w-[150px] sm:w-[140px]"
            alt="Instagrid"
          />
        </a>
        <a href="https://plan-international.org/" target="blank">
          <img src="/static/references/plan.svg" alt="Plan International" />
        </a>
        <a href="https://linnunrata.fi" target="blank">
          <img src="/static/references/linnunrata.svg" alt="Linnunrata" />
        </a>
        <a href="https://cultsecurity.com/" target="blank">
          <img
            src="/static/references/cult-black.png"
            className="w-[150px]"
            alt="Cult Security"
          />
        </a>
        <a href="https://sharpershape.com/" target="blank">
          <img src="/static/references/sharper-shape.svg" alt="Sharper Shape" />
        </a>
        <a href="https://www.veracell.com/" target="blank">
          <img src="/static/references/veracell.svg" alt="Veracell" />
        </a>
      </div>
    </div>
  );
};

export default References;
