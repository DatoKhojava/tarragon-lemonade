import { useState } from "react";
import "./style/App.css";
import { Carousel } from "react-bootstrap";
import MarioAnimation from "./compnents/MarioAnimation";
import Test from "./compnents/Test";

function App() {
  const [marioBackground, setMarioBackground] = useState(true);

  return (
    <div className="app">
      <MarioAnimation />
      {/* <div className="carousel">
        {marioBackground ? <MarioAnimation /> : <Test />}
        <div className="pagination">
          <div className="one" onClick={() => setMarioBackground(!false)}></div>
          <div className="one" onClick={() => setMarioBackground(!true)}></div>
        </div>
      </div> */}

      {/* <h1 className="text-center mt-5">• PROJECTS •</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p> */}
    </div>
  );
}

export default App;
