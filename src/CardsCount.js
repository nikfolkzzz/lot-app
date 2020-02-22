import React from "react";

const CardsCount = props => {
  return (
    <div className=" cards-count">
      <button className="" onClick={() => props.removeCard("-")}>
        {" "}
        minus -
      </button>
      <span className="count-val">{props.count} </span>
      <button className="" onClick={() => props.addCard("+")}>
        plus+
      </button>
    </div>
  );
};

export default CardsCount;
