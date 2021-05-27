import React from "react";

const Ingress = () => (
  <section id="ingress" className="layout-grid col-all">
    <span className="ingress mt-32 mb-32 col-start-4 col-span-3">
      We insert sustainable digital development practives to enable product team
      excellence and technological growth that brings you ahead of the curve
    </span>

    <div className="col-start-2 col-span-2 relative">
      <img
        src="/static/rare_est.svg"
        alt="Rare Est. 2019"
        className="rare-est"
      />
    </div>

    <style jsx>{`
      .rare-est {
        position: absolute;
        bottom: -50%;
      }
    `}</style>
  </section>
);

export default Ingress;
