import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Cards from "./Cards";
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Cards />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
