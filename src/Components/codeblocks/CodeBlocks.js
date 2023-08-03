import React from "react";
import Button from "../../utils/button/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

const CodeBlocks = ({
  // position,
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
        // position: position,
        marginBottom: "20px",
        justifyContent: "space-between",
        gap: "10px",
        flexDirection: flexDirection,

      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          justifyContent:"start",
           border: "1px solid black",
          padding: "4px",
          height:"200px"
         
          // justifyContent:"center"
        }}
      >
        <div > {heading}</div>
        <div>{subHeading}</div>
        <div
          style={{
            marginTop: "7px",
            display: "flex",
            gap: "5px",
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
      <div style={{display:"flex"}}> 
  
 
        <div
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            color: "black",
            font:"12px",
            fontFamily:"monospace" 
          }}
        >
          <TypeAnimation sequence={[CodeBlocks, 2000, ""]}
          repeat={Infinity}
          cursor={true}
          style={{whiteSpace:"pre-line",display:"block"}}
          omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
