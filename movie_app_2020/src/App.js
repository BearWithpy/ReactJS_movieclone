import React from "react";
import Potato from "./Potato";

function Beef() {
  return <h1>I love steak❤</h1>;
}

function Food({ name, picture }) {
  // << props.name와 같음
  return (
    <div>
      <h1>I love {name}❤</h1>
      <img src={picture} alt={name}></img>{" "}
    </div>
  );
}

const foodIlike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 2.5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 3.5,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 5,
  },
];

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}

function App() {
  return (
    <div>
      {/* <h1>Hello World!!!!!!</h1> */}
      {/* <Potato /> */}
      {/* <Beef /> */}
      {/* <Food name="kimchi" something={true} array={["hello", 1, 2, 3, 4]} />d */}
      {/* {foodIlike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))} */}
      {foodIlike.map(renderFood)}
    </div>
  );
}

export default App;
