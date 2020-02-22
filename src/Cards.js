import React, { useState } from "react";
import "materialize-css";

import Card from "./Card";
import CardsCount from "./CardsCount";

const random = require("random");
console.log(random.int(1, 5));
const Cards = () => {
  const createNewCardArr = arrLength => {
    const randomCard = Math.ceil(Math.random() * (arrLength - 2) + 1);

    return Array.from({ length: arrLength }, (v, k) => {
      return { visible: "hide", special: k === randomCard ? true : false };
    });
  };
  const [countCards, setCountCards] = useState(createNewCardArr(2));

  const flipDeck = () => setCountCards(createNewCardArr(countCards.length));

  const addCard = () =>
    setCountCards([...countCards, { visible: "hide", special: false }]);
  const removeCard = () =>
    countCards.length > 2 ? setCountCards(countCards.splice(1)) : null;

  const flipCard = cardIndex =>
    setCountCards(
      countCards.map((item, index) =>
        index === cardIndex ? { ...item, ...{ visible: "show" } } : item
      )
    );

  const card = countCards.map((item, index) => (
    <Card
      cardState={countCards[index]}
      flipCard={flipCard}
      restartCards={flipDeck}
      key={index}
      index={index}
      value={item}
    />
  ));

  return (
    <div className="cards-container">
      <CardsCount
        count={countCards.length}
        addCard={addCard}
        removeCard={removeCard}
      />
      <div className="menu">
        <button className=" blue darken-1 btn" onClick={flipDeck}>
          reload
        </button>
      </div>
      {card}
    </div>
  );
};

export default Cards;
