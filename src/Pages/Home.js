import React from "react";
import "./Home.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "../utils/button/Button";
import banner from "../assets/Image/1033204736-preview.mp4";
import CodeBlocks from "../Components/codeblocks/CodeBlocks";
const Home = () => {
  return (
    <div>
      {/* section 1 */}

      <div className="mainbox">
        <div>
          <Link to={"/signup"}>
            <div className="container1">
              <div>Become an Instructor</div>
              <div style={{ marginTop: "3px", marginLeft: "2px" }}>
                <AiOutlineArrowRight />
              </div>
            </div>
          </Link>
        </div>
        <div className="container2">Empower Your Future with Coding Skills</div>
        <div className="container3">
          With our online coding courses ,you can learn at your own pace with
          anytime anywhere and get a access of wealth of resources,including
          hands on project ,quizzes,and personalized feedback from Instructor
        </div>
        <div className="container4">
          <Button active={true}>Learn more</Button>

          <Button>Book a demo</Button>
        </div>

        <div className="banner">
          <video muted loop autoPlay>
            <source src={banner} type="video/mp4" />
          </video>
        </div>
        {/* code section 1 */}
        <div>
          <CodeBlocks
            heading={
              <div
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "24px",
                  color: "#343a40",
                  textAlign: "center",
                }}
              >
                Unlock your coding potenial with our online course
              </div>
            }
            subHeading={
              <div
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "12px",
                  color: "#343a40",
                }}
              >
                Our course is designed and taught by industry level experts who
                have years of experience in their respective field
              </div>
            }
            ctbt1={{
              btntxt: "try it yourself",
              active: true,
              linkto: "/signup",
            }}
            ctbt2={{
              btntxt: "Learn more",
              active: false,
              linkto: "/login",
            }}
            CodeBlocks={`
            <!DOCTYPE html>\n
             <html>\n
              <head>\n
<title>W3.CSS Template</title>\n
<meta charset="UTF-8">\n
<meta name="viewport" content="width=device-width, initial-scale=1">\n
            
            `}
            // backgroudGradient,
            codeColor="yellow"
            flexDirection={"row"}
          />
        </div>
      </div>

      {/* section 2 */}
      {/* section 3 */}
      {/* Footer */}
    </div>
  );
};

export default Home;
