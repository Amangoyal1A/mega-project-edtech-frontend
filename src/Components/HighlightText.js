import React from "react";

const HighlightText = ({ text }) => {
  return (
    <span
      style={{
        fontSize: "xxLarge",
        color: "#1FA2FF",
        fontWeight: "80px",
        margin:"0 5px"
      }}
    >
       {text}
    </span>
  );
};

export default HighlightText;
