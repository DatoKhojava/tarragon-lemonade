import "./style/App.css";
import Decoration from "./Decoration.js";

function App() {
  return (
    <div className="app">
      <Decoration />
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

export default App;
