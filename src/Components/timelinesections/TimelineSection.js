import React from "react";
import flexibity from "../../assets/Logo/flexiblity.jpg";
import leadership from "../../assets/Logo/leadership.jpg";
import solveproblem from "../../assets/Logo/solveproblem.jpg";
import responsibility from "../../assets/Logo/responsibility.jpg";
import TimelineTableSection from "./TimelineTableSection";
import image from "../../assets/Image/woman-programmer-software-web-development-computer-girl-work-script-coding-programming_352905-203.avif";

const TimelineSection = () => {
  const imageContainerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  };

  const imageStyles = {
    width: "510px",
    height: "auto",
    marginTop: "20px",
  };
  const overlappingDiv = {
    position: "absolute",
    backgroundColor: "cornflowerblue",
    width: "400px",
    display: "flex",
    flexDirection: "row",
    color: "white",
    padding: "10px",
    height: "50px",
    gap: "30px",
    top: "350px",
     justifyContent:"space-evenly"
  };

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "floralwhite",
        justifyContent: "space-evenly",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          padding: "10px",
        }}
      >
        <TimelineTableSection
          heading="Leadership"
          imgsrc={leadership}
          para="Fully committed to the success company"
        />
        <TimelineTableSection
          heading="Responsibility"
          imgsrc={responsibility}
          para="Students be always be our top proirities"
        />
        <TimelineTableSection
          heading="Flexibilty"
          imgsrc={flexibity}
          para="the ability to switch is an important skill"
        />

        <TimelineTableSection
          heading="Solve the problem"
          imgsrc={solveproblem}
          para="Code your way to a solutions better way"
        />
      </div>

      <div style={imageContainerStyles}>
        <img src={image} alt="Icon" style={imageStyles} />
        <div style={overlappingDiv}>
          <div style={{ display: "flex",gap:"3px" }}>
            <p style={{ fontSize: "small",fontWeight: "bold" }}>10</p>
            <p style={{ fontSize: "small" }}>Years of experience</p>
          </div>

          <div style={{ display: "flex",gap:"3px" }}>
            <p style={{ fontSize: "small",fontWeight: "bold" }}>250</p>
            <p style={{ fontSize: "small" }}>Types of Courses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
