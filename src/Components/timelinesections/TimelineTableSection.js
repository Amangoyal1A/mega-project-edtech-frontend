import React from "react";

const TimelineTableSection = ({ heading, imgsrc, para }) => {
  const sectionStyles = {
    display: "flex",
    gap: "20px",
    justifyContent: "space-evenly",
    // width:"100%"
  };

  const imageContainerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const iconStyles = {
    width: "30px",
    height: "30px",
  };

  const contentStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const headingStyles = {
    fontSize: "large",
  };

  const paragraphStyles = {
    width: "100%",
    fontSize: "small",
  };

  return (
    <div style={sectionStyles}>
      <div style={imageContainerStyles}>
        <img src={imgsrc} alt="Icon" style={iconStyles} />
      </div>
      <div style={contentStyles}>
        <div style={headingStyles}>{heading}</div>
        <div style={paragraphStyles}>{para}</div>
      </div>
    </div>
  );
};

export default TimelineTableSection;
