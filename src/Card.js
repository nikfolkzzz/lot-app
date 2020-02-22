import React from "react";

const Card = props => {
  const cls = ["card"];

  if (props.cardState.visible === "show") {
    cls.push("is-flipped");
  }

  if (props.cardState.special === true) {
    // cls.pop();
    cls.push("is-flipped-special");
  }

  return (
    <div className="scene">
      <div
        className={cls.join(" ")}
        onClick={() => props.flipCard(props.index)}
      >
        <div className="card__face card__face--front">
          <span role="img" aria-label="good">
            🤔
          </span>
        </div>
        <div className="card__face card__face--back">
          <span role="img" aria-label="cool"></span>
        </div>
      </div>
    </div>
  );
};

export default Card;
