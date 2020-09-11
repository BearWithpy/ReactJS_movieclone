import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        “Freedom is the freedom to say that two plus two make four. If that is
        granted, all else follows.”
      </span>
      <span>− George Orwell, 1984</span>
      <hr />
      <br />
      <br />
      <br />
      <span> Cloned by Jason </span>
      <span>So confused to style with CSS... Help me :( </span>
    </div>
  );
}

export default About;
