import React from "react";
import Potato from "./Potato";

function Beef() {
  return <h1>I love steak❤</h1>;
}

function Food({ fav }) {
  // << props.fav와 같음
  return <h1>I love {fav}❤</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello World!!!!!!</h1>
      {/* <Potato /> */}
      {/* <Beef /> */}
      <Food fav="kimchi" something={true} array={["hello", 1, 2, 3, 4]} />
      <Food fav="ramen" />
    </div>
  );
}

export default App;
