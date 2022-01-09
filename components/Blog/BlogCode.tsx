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
  if (!inline && match) {
    return (
      <SyntaxHighlighter
        customStyle={{ fontSize: 16 }}
        language={match[1] || ""}
      >
        {/* Removes empty last line */}
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    );
  }

  if (!inline) {
    return (
      <code
        className={c(
          "bg-gray-200 px-2 rounded-lg mt-6 block max-w-max overflow-x-auto whitespace-pre md:text-base",
          className
        )}
      >
        {children}
      </code>
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
