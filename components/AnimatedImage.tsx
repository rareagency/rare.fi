import Image, { ImageProps } from "next/image";
import { useState } from "react";

const AnimatedImage = (props: ImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...props}
      className={`${props.className} ${loaded ? "unblur" : ""}`}
      onLoadingComplete={() => setLoaded(true)}
    />
  );
};

export default AnimatedImage;
