import React from "react";
import Link from "next/link";
import Button from "../Button";
import { c } from "../../utils/classnames";

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

const illustrationCol = c("flex items-center");
const illustrationDescription = c("description p-8");

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
          <div className={illustrationCol}>
            <img
              src="/static/illustrations/nailing.svg"
              alt="Smiling person showing OK-sign"
            />
            <p className={illustrationDescription}>
              Nailing it in frontend and backend, API and cloud development
            </p>
          </div>
          <div className={illustrationCol}>
            <img
              src="/static/illustrations/idea.svg"
              alt="Jolly character with a hat saying 'IDEA'"
            />
            <p className={illustrationDescription}>
              Guiding projects from idea to production
            </p>
          </div>
          <div className={illustrationCol}>
            <img
              src="/static/illustrations/agile.svg"
              alt="Circle-shaped character smiling with it's teeth saying Agile"
            />
            <p className={illustrationDescription}>
              Agile practice from the get-go
            </p>
          </div>
          <div className={illustrationCol}>
            <img
              src="/static/illustrations/care.svg"
              alt="Heart-shaped eye surfing"
            />
            <p className={illustrationDescription}>
              Strong co-creation and collaboration mindset
            </p>
          </div>
          <div className={illustrationCol}>
            <img
              src="/static/illustrations/wow.svg"
              alt="Zig-zag character dancing"
            />
            <p className={illustrationDescription}>
              Transparent ways of working & next level comms
            </p>
          </div>
          <div className={illustrationCol}>
            <img
              src="/static/illustrations/problem.svg"
              alt="Fingers snapping"
            />
            <p className={illustrationDescription}>
              Proudly building high usability products to resolve painful needs
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 flex col-all justify-center">
        <Link href="#">
          <a>
            <Button kind="secondary">Learn how we apply it</Button>
          </a>
        </Link>
      </div>

      <style jsx>{`
        img {
          width: 100px;
        }
      `}</style>
    </section>
  );
};

export default FeatureBox;
