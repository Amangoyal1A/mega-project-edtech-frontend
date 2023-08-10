import React from "react";
import "./Home.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "../utils/button/Button";
import banner from "../assets/Image/pexels_videos_2516159 (1080p).mp4";
import HighlightText from "../Components/HighlightText";

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
          <Button active={true} >Learn more</Button>

          <Button>Book a demo</Button>
        </div>

        <div className="banner">
          <video muted loop autoPlay>
            <source src={banner} type="video/mp4" />
          </video>
        </div>
        {/* code section 1 */}
      </div>

      {/* section 2 */}
      {/* section 3 */}
      {/* Footer */}
    </div>
  );
};

export default Home;
