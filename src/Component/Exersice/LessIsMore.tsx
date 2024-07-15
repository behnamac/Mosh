import { useState } from "react";

interface Props {
  text: string;
  maxChar?: number;
}

const LessIsMore = ({ text, maxChar = 20 }: Props) => {
  const [isExpand, setExpand] = useState(false);

  if (text.length <= maxChar) return <p>{text}</p>;
  const sumText = isExpand ? text.substring(0, maxChar) : text;
  return (
    <p>
      {sumText}...
      <button
        onClick={() => {
          setExpand(!isExpand);
        }}
      >
        {isExpand ? "more" : "less"}
      </button>
    </p>
  );
};

export default LessIsMore;
