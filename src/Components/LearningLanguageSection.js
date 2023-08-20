import React from "react";
import HighlightText from "../Components/HighlightText";
import knowyourprogress from "../assets/Images/Know_your_progress.svg";
import comparewithothers from "../assets/Images/Compare_with_others.svg";
import planyourlessons from "../assets/Images/Plan_your_lessons.svg";
import Button from "../utils/button/Button";

const LearningLanguageSection = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        background: "floralwhite",
        padding: "100px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "xx-large",
          fontWeight: "bold",
        }}
      >
        Your Swiss knife for
        <HighlightText text={"Learning any language"} />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "small",
        }}
      >
        Using spin making learning multiple languages easy. with 20+ languages
        realistic voice-over, progress tracking, custom schedule and more.
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "5px",
          flexWrap:"wrap"
        }}
      >
        <img
          src={knowyourprogress}
          alt="knowyourprogress"
          style={{ marginRight: "-150px" }}
        />
        <img src={comparewithothers} alt="knowyourprogress" />
        <img
          src={planyourlessons}
          alt="knowyourprogress"
          style={{ marginLeft: "-150px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "5px",
        }}
      >
        <Button active={true} linkto={"/signup"}>
          Learn more
        </Button>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
