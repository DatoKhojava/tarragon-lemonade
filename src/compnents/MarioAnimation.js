import React from "react";
import "../style/App.css";

import triangle from "../media/triangle.png";
import hexagon from "../media/hexagon.png";

function MarioAnimation() {
  return (
    <div className="mario-box">
      <img src={hexagon} alt="..." className="hexagon" />
      <img src={triangle} alt="..." className="triangle" />
      <p className="mario" />
      <div className="box">
        <h3 className="tittle">Hi I'm Dato Kojava 👋</h3>
        <p className="sub-tittle">
          I'm creating noice web experiences for the next generation of
          consumer-facing companies
        </p>
      </div>
    </div>
  );
}

export default MarioAnimation;
