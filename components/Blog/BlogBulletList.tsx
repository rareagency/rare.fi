import React from "react";

interface Props {
  points?: string[];
  children?: React.ReactNode;
}

const BlogBulletList = ({ points, children }: Props) => {
  if (!points) {
    return <ul className="ml-6 mb-6 list-disc">{children}</ul>;
  }

  return (
    <ul className="ml-6 list-disc">
      {points.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  );
};

export default BlogBulletList;
