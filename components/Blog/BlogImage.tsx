const BlogImage = (
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <img
    {...props}
    style={{
      maxHeight: "calc(50vh + 180px)",
      maxWidth: "100%",
      margin: "2rem auto",
    }}
  />
);

export default BlogImage;
