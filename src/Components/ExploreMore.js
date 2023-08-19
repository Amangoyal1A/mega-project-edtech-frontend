import React from "react";
import { HomePageExplore } from "../data/Homepage-Explore";
import HighlightText from "./HighlightText";
import { useState } from "react";
import CourseCard from "./CourseCard";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div className="">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            fontSize: "xx-large",
            fontWeight: "bold",
            color: "white",
            display: "flex",
          }}
        >
          Unlock the
          <HighlightText text={"Power of Code"} />
        </div>

        <p
          style={{
            alignItems: "center",
            justifyContent: "center",
            fontSize: "small",
            color: "white",
            display: "flex",
          }}
        >
          Learn to build anything you can imagine
        </p>
      </div>

      <div
        style={{
          marginTop: "5px",
          display: "flex",
          flexDirection: "row",
          borderRadius: "9999px",
          backgroundColor: "#0a0c10",
          marginBottom: "3px",
          border: "1px solid #a0aec0",
          padding: "1px",
          justifyContent:"space-evenly",
          height:"30px",
          width: "auto",
        }}
      >
        {tabsName.map((element, index) => (
          <div
            style={{
              fontSize: "large",
            //   lgFontSize: "16px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "2",
              backgroundColor:
                currentTab === element ? "#0a0c10" : "transparent",
              color: currentTab === element ? "#1FA2FF" : "#a0aec0",
              fontWeight: currentTab === element ? "medium" : "normal",
              borderRadius: "50%",
              transition: "all 0.2s ease",
              cursor: "pointer",
              textAlign: "center",
              padding: "3px",
              lgPadding: "7px",
            }}
            key={index}
            onClick={() => setMyCards(element)}
          >
            {element}
          </div>
        ))}
      </div>

      {/* <div className='lg:h-[150px]'></div> */}

      {/* course card ka group */}

      <div
        style={{
          display: "flex",
          gap: "9px",
          width: "100%",
          justifyContent: "center",
          marginTop: "5px",
          flexWrap: "wrap",
          position: "relative",
          right: 0,
          left: 0,
          marginRight: "auto",
          marginLeft: "auto",
          padding:"20px"
        }}
      >
        {courses.map((element, index) => (
          <CourseCard
            key={index}
            cardData={element}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;
