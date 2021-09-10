import "./style/App.css";
import triangle from "./media/triangle.png";
import hexagon from "./media/hexagon.png";
import cube from "./media/cube.png";
import circle from "./media/circle.png";
import mario from "./media/mario-8-bit.png";

function Decoration() {
  return (
    <div className="decoration">
      <img src={hexagon} alt="..." className="hexagon" />
      <img src={triangle} alt="..." className="triangle" />
      {/* <img src={triangle} alt="..." className="triangle" />
      <img src={hexagon} alt="..." className="hexagon" />
      <img src={cube} alt="..." className="cube" />
      <img src={circle} alt="..." className="circle" /> */}
      <p  className="mario" />
    </div>
  );
}

export default Decoration;
