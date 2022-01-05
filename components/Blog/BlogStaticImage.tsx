import Image from "next/image";

interface Props {
  src: StaticImageData;
  alt: string;
  outerWidth?: string | number;
}

const BlogStaticImage = ({ src, alt, outerWidth }: Props) => {
  if (outerWidth) {
    return (
      <div style={{ width: outerWidth }}>
        <Image src={src} alt={alt} placeholder="blur" unoptimized />
      </div>
    );
  }

  return <Image src={src} alt={alt} placeholder="blur" unoptimized />;
};

export default BlogStaticImage;
