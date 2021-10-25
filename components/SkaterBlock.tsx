import React from "react";
import Button from "./Button";

interface Props {
  buttonTxt: string;
  buttonUrl: string;
  children: React.ReactNode;
}

const SkaterBlock = ({ buttonTxt, buttonUrl, children }: Props) => (
  <section
    id="join-us"
    className="col-all px-8 relative layout-grid bg-light-yellow pt-24 pb-24"
  >
    <span className="h2-small text-action-purple col-start-2 col-span-3 pr-4 lg:pr-0 lg:text-center lg:col-all">
      {children}
    </span>

    <Button
      style={{ zIndex: 1 }}
      href={buttonUrl}
      kind="secondary"
      className="col-start-2 col-span-2 lg:col-all mt-8"
    >
      {buttonTxt}
    </Button>

    <img
      src="/static/skateramp.png"
      alt="Person skating in a pool ramp"
      className="object-cover w-1/2 h-full absolute right-0 top-0 opacity-100 lg:w-full lg:opacity-50"
    />
  </section>
);

export default SkaterBlock;
