import React from "react";

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  return (
    <button
      style={{
        display: "flex",
        flexDirection: "coloumn",
        maxWidth: "360px",
        minWidth: "200px",
        width: "100%",
        padding: "10px",
        margin: "10px",
        backgroundColor: currentCard === cardData.heading ? "white" : "#1a202c",
        color: currentCard === cardData.heading ? "#1a202c" : "#90cdf4",
        boxShadow:
          currentCard === cardData.heading ? "12px 12px 0px #FFD60A" : "none",
        borderRadius: "10px",
      }}
      onClick={() => {
        setCurrentCard(cardData.heading);
      }}
    >
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "10px",
            color: currentCard === cardData.heading ? "black" : "#90cdf4",
          }}
        >
          {cardData.heading}
        </p>
        <p
          style={{
            marginBottom: "10px",
            fontSize: "16px",
            color: currentCard === cardData.heading ? "black" : "#90cdf4",
          }}
        >
          {cardData.description}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>{cardData.level}</p>
          <p>{cardData.lessionNumber} Lessons</p>
        </div>
      </div>
    </button>
  );
};

export default CourseCard;
