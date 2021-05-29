import logo from "./Me.png";
import "./App.css";
import ReactFloaterJs from "react-floaterjs";

function App() {
  return (
    <div className="App">
      <ReactFloaterJs>
        <div className="Pic">
          <img src={logo} className="Me" alt="logo" />
        </div>
      </ReactFloaterJs>

      <div className="Info">
        <h1> Owusu Bonsu's Portfolio </h1>
        <p>
          {" "}
          Hi 👋🏿 Owusu here. I'm an aspiring front-end web developer. This is my
          website. Browse around to learn more about me.{" "}
        </p>
      </div>
    </div>
  );
}

export default App;
