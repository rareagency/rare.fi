import React from "react";

interface Props {
  points?: string[];
  ordered?: boolean;
  children?: React.ReactNode;
}

const BlogList = ({ points, ordered, children }: Props) => {
  const listType = ordered ? "list-decimal" : "list-disc";
  if (!points) {
    return <ul className={`ml-6 mb-6 ${listType}`}>{children}</ul>;
  }

  return (
    <ul className={`ml-6 ${listType}`}>
      {points.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  );
};

export default BlogList;