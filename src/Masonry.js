import React, { useState, useEffect } from "react";
import "./masonry.css";
import OnImagesLoaded from "react-on-images-loaded";
import Masonry from "masonry-layout";
import { getGifs } from "./utils/api";

const Mosaic = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs("yes", 30)
      .then(data => data.json())
      .then(gif => {
        setGifs(gif.data);
      });
  }, []);
  useEffect(() => {
    const grid = document.querySelector(".masonry-container");
    new Masonry(grid, { gutter: 10 });
  }, []);

  return (
    <div className="container">
      <div className=""></div>
      <h1>here some masonry</h1>
      <div className="masonry-container">
        <OnImagesLoaded timeout={7000}>
          {gifs.map(gif => (
            <img
              style={{ marginRight: "10px" }}
              src={gif.images.original.url}
              alt=""
            />
          ))}
        </OnImagesLoaded>
      </div>
    </div>
  );
};

export default Mosaic;
