import React from "react";

const HighlightText = ({ text }) => {
  return (
    <span
      style={{
        fontSize: "xxLarge",
        color: "#0066b2",
        fontWeight: "80px",
      }}
    >
      {text}
    </span>
  );
};

export default HighlightText;
