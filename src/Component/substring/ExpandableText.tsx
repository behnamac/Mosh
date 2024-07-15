import { useState } from "react";

interface Prop {
  children: string;
  maxChar: number;
}

const ExpandableText = ({ children, maxChar = 100 }: Prop) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (children.length <= 100) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxChar);
  return (
    <p>
      {text}...
      <button
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded === false ? "more" : "less"}
      </button>
    </p>
  );
};

export default ExpandableText;
