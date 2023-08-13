import React from "react";
import logo1 from "../../assets/TimeLineLogo/Logo1.svg"
import logo2 from "../../assets/TimeLineLogo/Logo2.svg"
import logo3 from "../../assets/TimeLineLogo/Logo3.svg"
import logo4 from "../../assets/TimeLineLogo/Logo4.svg"
import TimelineTableSection from "./TimelineTableSection";
import image from "../../assets/Images/TimelineImage.png"
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
     justifyContent:"space-evenly",
     opacity:"0.9"
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
          imgsrc={logo1}
          para="Fully committed to the success company"
        />
        <TimelineTableSection
          heading="Responsibility"
          imgsrc={logo2}
          para="Students be always be our top proirities"
        />
        <TimelineTableSection
          heading="Flexibilty"
          imgsrc={logo3}
          para="the ability to switch is an important skill"
        />

        <TimelineTableSection
          heading="Solve the problem"
          imgsrc={logo4}
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
