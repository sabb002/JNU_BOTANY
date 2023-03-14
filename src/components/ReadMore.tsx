import { useState } from "react";
import "./ReadMore.css";

interface Props {
  children: string;
}

export default function ReadMore({ children }: Props) {
  const text = children;
  const [readMore, setReadMore] = useState(true);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <p className="des">
      {readMore ? text.slice(0, 250) : text}
      <span className="toggle" onClick={toggleReadMore}>
        {readMore ? "...more" : " show less"}
      </span>
    </p>
  );
}
