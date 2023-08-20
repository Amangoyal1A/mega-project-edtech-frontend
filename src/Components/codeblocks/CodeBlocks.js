import React from "react";
import Button from "../../utils/button/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

const CodeBlocks = ({
  position,
  heading,
  subHeading,
  ctbt1,
  ctbt2,
  CodeBlocks,
  backgroudGradient,
  codeColor,
  flexDirection,
}) => {
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "20px",
        justifyContent: "space-between",
        gap: "200px",
        flexDirection: flexDirection,
        position: position,
      }}
    >
      {/* section1 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          justifyContent: "start",
          // border: "1px solid black",
          padding: "4px",
          height: "200px",
          textAlign: "center",
          width: "500px",
          height: "auto",
        }}
      >
        {heading}
        <div
          style={{
            fontSize: "medium",
            color: "#ffffff",
          }}
        >
          {subHeading}
        </div>
        <div
          style={{
            marginTop: "7px",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <Button active={ctbt1.active} linkto={ctbt1.linkto}>
            <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
              {ctbt1.btntxt}
              <AiOutlineArrowRight />
            </div>
          </Button>
          <Button active={ctbt2.active} linkto={ctbt2.linkto}>
            {ctbt2.btntxt}
          </Button>
        </div>
      </div>
      {/* section 2 */}
      <div style={{ display: "flex", width: "40%" }}>
        {/* <div></div> */}
        <div
          style={{
            width: "300px",
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            color: codeColor,
            fontSize: "12px",
            fontFamily: "monospace",
          }}
        >
          <TypeAnimation
            sequence={[CodeBlocks, 2000, ""]}
            repeat={Infinity}
            cursor={true}
            style={{ whiteSpace: "pre-line", display: "block" }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
