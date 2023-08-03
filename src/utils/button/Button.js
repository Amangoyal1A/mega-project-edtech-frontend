import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  const buttonStyle = {
    backgroundColor: active ? "yellow" : "black",
    color: active ? "black" : "white",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    // fontWeight: 'bold',
    fontSize: "16px",
  };

  return (
    <Link to={linkto} style={{ textDecoration: "none" }}>
      <div className="button" style={buttonStyle}>
        {children}
      </div>
    </Link>
  );
};

export default Button;
