import Image from "next/image";

interface Props {
  src: StaticImageData;
  alt: string;
}

const BlogStaticImage = ({ src, alt }: Props) => (
  <Image src={src} alt={alt} placeholder="blur" unoptimized />
);

export default BlogStaticImage;
