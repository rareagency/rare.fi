import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { c } from "../utils/classnames";

const AnimatedImage = (props: ImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        {...props}
        className={c(props.className, loaded ? "unblur" : "")}
        onLoadingComplete={() => setLoaded(true)}
      />
      <style global jsx>{`
        .unblur {
          animation: unblur 0.5s linear;
        }

        @keyframes unblur {
          from {
            filter: blur(20px);
          }
          to {
            filter: blur(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedImage;
