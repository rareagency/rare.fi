import React from "react";

interface Props {
  points: string[];
}

const BlogBulletList = ({ points }: Props) => (
  <ul className="ml-6 list-disc">
    {points.map((p, i) => (
      <li key={i}>{p}</li>
    ))}
  </ul>
);

export default BlogBulletList;
