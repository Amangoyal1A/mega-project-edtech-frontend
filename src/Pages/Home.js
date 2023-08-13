import React from "react";
import "./Home.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "../utils/button/Button";
import banner from "../assets/Image/pexels_videos_2516159 (1080p).mp4";
import HighlightText from "../Components/HighlightText";
import CodeBlocks from "../Components/codeblocks/CodeBlocks";
import LearningLanguageSection from "../Components/LearningLanguageSection";
import TimelineSection from "../Components/timelinesections/TimelineSection";

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
        <div className="container2">
          Empower Your Future with
          <HighlightText text=" Coding Skills" />
        </div>
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
            flexDirection={"row"}
            // position={"relative"}
            heading={
              <div style={{ color: "#ffffff", fontSize: "x-large" }}>
                Unlock your <HighlightText text={"Coding Potential "} />
                with our online Course
              </div>
            }
            subHeading={
              "Our course is designed and taught by industry experts who have years of experience in their field"
            }
            ctbt1={{
              btntxt: "Try it yourself",
              active: true,
              linkto: "/login",
            }}
            ctbt2={{
              btntxt: "learn more",
              active: false,
              // linkto: "/signup",
            }}
            CodeBlocks={`
            <!DOCTYPE html>\n
                <html>\n
                <body>\n
           <h1>My First programing language</h1>\n
            <p>My first paragraph here </p>\n
             </body>\n
              `}
            codeColor={"yellow"}
          />
        </div>

        <div>
          <CodeBlocks
            flexDirection={"row-reverse"}
            // position={"relative"}
            heading={
              <div style={{ color: "#ffffff", fontSize: "x-large" }}>
                Start <HighlightText text={"Coding in second "} />
              </div>
            }
            subHeading={
              "Our course is designed and taught by industry experts who have years of experience in their field"
            }
            ctbt1={{
              btntxt: "Continue Lesson",
              active: true,
              linkto: "/login",
            }}
            ctbt2={{
              btntxt: "learn more",
              active: false,
              // linkto: "/signup",
            }}
            CodeBlocks={`
            <!DOCTYPE html>\n
                <html>\n
                <body>\n
           <h1>My First programing language</h1>\n
             </body>\n
              `}
            codeColor={"yellow"}
          />
        </div>
      </div>

      {/* section 2 */}

      <div className="section2">
        <div className="homepage-bg">
          <div className="homepage-interior">
            <Button active={true} linkto={"/signup"}>
              <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                Explore Full catalog
                <AiOutlineArrowRight />
              </div>
            </Button>

            <Button active={false} linkto={"/signup"}>
              <div>Learn More</div>
            </Button>
          </div>
        </div>

        <div className="homepage2">
          <div className="homepage2-interiorleft">
            <div
              style={{
                color: "black",
                fontSize: "x-large",
                margin: "auto",
              }}
            >
              Get the Skills you need for a{" "}
              <HighlightText text={"job that is in demand "} />
            </div>

         
          </div>
          <div className="homepage2-interiorright">
            <div style={{ fontSize: "small" }}>
              The modern StudyNotion is the dictates its own terms.Today to be a
              Competitive specilist require more than professioanl Skills
            </div>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <Button active={true} linkto={"/signup"}>
                <div>Learn More</div>
              </Button>
            </div>
           
          </div>
        
        </div>
        <TimelineSection/>
        <LearningLanguageSection />
      </div>

      {/* section 3 */}
      {/* Footer */}
    </div>
  );
};

export default Home;
