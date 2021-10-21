import React from "react";

interface Props {
  points?: string[];
  ordered?: boolean;
  children?: React.ReactNode;
}

const BlogList = ({ points, ordered, children }: Props) => {
  const listType = ordered ? "list-decimal" : "list-disc";
  if (!points) {
    return <ul className={`sm:text-[16px] m-6 ${listType}`}>{children}</ul>;
  }

  return (
    <ul className={`sm:text-[16px] ml-6 ${listType}`}>
      {points.map((p, i) => (
        <li className="py-3" key={i}>
          {p}
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
