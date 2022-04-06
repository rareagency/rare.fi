import { StaticImageData } from "next/image";
import AnimatedImage from "../AnimatedImage";

interface Props {
  src: StaticImageData;
  alt: string;
  outerWidth?: string | number;
}

const BlogStaticImage = ({ src, alt, outerWidth }: Props) => {
  if (outerWidth) {
    return (
      <div style={{ width: outerWidth, maxWidth: "100%" }}>
        <AnimatedImage src={src} alt={alt} placeholder="blur" />
      </div>
    );
  }

  return <AnimatedImage src={src} alt={alt} placeholder="blur" />;
};

export default BlogStaticImage;
