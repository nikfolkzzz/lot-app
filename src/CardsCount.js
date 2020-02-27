import React from "react";

const CardsCount = props => {
  return (
    <div className=" cards-count">
      <button className=" btn__count" onClick={() => props.removeCard("-")}>
        mns -
      </button>
      <span className="count-val">{props.count} </span>
      <button className="btn__count" onClick={() => props.addCard("+")}>
        pls+
      </button>
    </div>
  );
};

export default CardsCount;
