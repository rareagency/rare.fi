import React from "react";
import Button from "../Button";

// TODO, use theese in stead of hardcoded values
// type FeatureBoxProps = {
//   title: string;
//   header: string;
//   buttonText: string;
//   buttonLink: string;
//   boxes: InfoBox[];
// };

// type InfoBox = {
//   imageUrl: string;
//   imageAlt: string;
//   text: string;
// };

interface IllustrationProps {
  imgSrc: string;
  imgAlt: string;
  imgStyles?: React.CSSProperties;
  children: React.ReactNode;
}

const Illustration = ({
  children,
  imgSrc,
  imgAlt,
  imgStyles,
}: IllustrationProps) => (
  <div className="flex items-center">
    <img src={imgSrc} alt={imgAlt} style={imgStyles} />
    <p className="description p-8">{children}</p>

    <style jsx>{`
      img {
        width: 100px;
      }
    `}</style>
  </div>
);

const FeatureBox = () => {
  return (
    <section className="layout-grid col-all pt-32 md:pt-8">
      <h5 className="col-start-2 col-span-1 md:col-span-full">
        Exceptional tech side
      </h5>
      <p className="paragraph col-start-4 col-span-4 md:col-span-full">
        We fight mediocrity in development practices and insert ourselves to the
        product teams to tackle projects with confidence, together.
      </p>
      <div className="row-start-2 col-start-4 col-span-4 pt-16 md:row-start-3 md:col-start-1 md:col-span-8">
        <div className="grid grid-cols-2 grid-rows-auto gap-16 md:grid-cols-1 md:gap-8">
          <Illustration
            imgSrc="/static/illustrations/nailing.svg"
            imgAlt="Smiling person showing OK-sign"
          >
            Nailing it in frontend and backend, API and cloud development
          </Illustration>
          <Illustration
            imgSrc="/static/illustrations/idea.svg"
            imgAlt="Jolly character with a hat saying 'IDEA'"
          >
            Guiding projects from idea to production
          </Illustration>
          <Illustration
            imgSrc="/static/illustrations/agile.svg"
            imgAlt="Circle-shaped character smiling with it's teeth saying Agile"
          >
            Agile practices from the get-go
          </Illustration>
          <Illustration
            imgSrc="/static/illustrations/care.svg"
            imgAlt="Heart-shaped eye surfing"
          >
            Strong co-creation and collaboration mindset
          </Illustration>
          <Illustration
            imgSrc="/static/illustrations/wow.svg"
            imgAlt="Zig-zag character dancing"
          >
            Transparent ways of working & next level comms
          </Illustration>
          <Illustration
            imgSrc="/static/illustrations/problem.svg"
            imgAlt="Fingers snapping"
          >
            Proudly building high usability products to resolve painful needs
          </Illustration>
        </div>
      </div>

      <div className="mt-16 flex col-all justify-center">
        <Button href="#" kind="secondary">
          Learn how we apply it
        </Button>
      </div>
    </section>
  );
};

export default FeatureBox;
