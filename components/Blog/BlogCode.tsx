import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

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
        customStyle={{ fontSize: 18 }}
        language={match[1] || ""}
      >
        {/* Removes empty last line */}
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    );
  }

  return <code className={className || ""}>{children}</code>;
};

export default BlogCode;
