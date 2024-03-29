import React from "react";
import { c } from "../utils/classnames";

const Ingress: React.FC<{ textColor?: "dark" | "light" }> = ({
  textColor = "dark",
}) => (
  <section id="ingress" className="layout-grid col-all md:bg-black">
    <span
      className={c(
        "ingress mt-32 mb-32 col-start-4 col-span-3 md:col-start-3 md:col-span-5 md:m-8 md:mb-32 md:text-off-white md:min-h-[200px]",
        { "text-light": textColor === "light" }
      )}
    >
      We insert sustainable digital development practices to enable product team
      excellence and technological growth that brings you ahead of the curve
    </span>
  </section>
);

export default Ingress;
