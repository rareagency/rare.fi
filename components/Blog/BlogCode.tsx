import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { c } from "../../utils/classnames";

interface Props {
  className?: string;
  inline?: boolean;
  children: React.ReactNode;
}

const BlogCode = ({ className, inline, children }: Props) => {
  const match = /language-(\w+)/.exec(className || "");
  if (!inline) {
    return (
      <SyntaxHighlighter
        customStyle={{ fontSize: 16, maxWidth: "85vw" }}
        language={match && match[1] ? match[1] : ""}
      >
        {/* Removes empty last line */}
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    );
  }

  return (
    <code
      className={c(
        "bg-gray-200 px-2 rounded-lg inline-block md:text-base",
        className
      )}
    >
      {children}
    </code>
  );
};

export default BlogCode;
