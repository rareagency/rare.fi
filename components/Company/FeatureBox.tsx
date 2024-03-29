import React from "react";
import Button from "../Button";
import { Agile, Care, Idea, Nailing, Problem, Wow } from "./IllustrationIcons";

interface IllustrationProps {
  icon: JSX.Element;
  imgStyles?: React.CSSProperties;
  children: React.ReactNode;
}

const Illustration = ({ icon, children }: IllustrationProps) => (
  <div className="flex items-center justify-center h-32 ml-[-10px]">
    <figure>{icon}</figure>
    <p className="description leading-6 p-8 w-full sm:pr-0">{children}</p>
  </div>
);

const FeatureBox = () => {
  return (
    <section className="layout-grid col-all pt-16 md:pt-8">
      <div className="row-start-2 col-start-2 col-span-6 pt-8 md:row-start-3">
        <div className="grid grid-cols-3 grid-rows-auto gap-8 xl:gap-4 md:grid-cols-1 xl:grid-cols-2">
          <Illustration
            icon={<Nailing title="Smiling person showing OK-sign" />}
          >
            Nailing it in frontend and backend, API and cloud development
          </Illustration>
          <Illustration
            icon={<Idea title="Jolly character with a hat saying 'IDEA'" />}
          >
            Guiding projects from idea to production
          </Illustration>
          <Illustration
            icon={
              <Agile title="Circle-shaped character smiling with it's teeth saying Agile" />
            }
          >
            Agile practices from the get-go
          </Illustration>
          <Illustration icon={<Care title="Heart-shaped eye surfing" />}>
            Strong co-creation and collaboration mindset
          </Illustration>
          <Illustration icon={<Wow title="Zig-zag character dancing" />}>
            Transparent ways of working &amp; next level comms
          </Illustration>
          <Illustration icon={<Problem title="Fingers snapping" />}>
            Proudly building high usability products to resolve painful needs
          </Illustration>
        </div>

        <div className="mt-16 flex justify-center">
          <Button href="/contact-us" kind="secondary">
            Learn how we apply it
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureBox;
