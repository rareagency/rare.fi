import Image from "next/image";

interface Props {
  src: StaticImageData;
  alt: string;
  outerWidth?: string | number;
}

const BlogStaticImage = ({ src, alt, outerWidth }: Props) => {
  if (outerWidth) {
    return (
      <div style={{ width: outerWidth, maxWidth: "100%" }}>
        <Image src={src} alt={alt} placeholder="blur" />
      </div>
    );
  }

  return <Image src={src} alt={alt} placeholder="blur" />;
};

export default BlogStaticImage;
