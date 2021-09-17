import logo from "./Me.png";
import "./Bio.css";
import Card from "react-bootstrap/Card";

function Bio() {
  return (
    <Card className="card2 m-3 mb-5">
      <div className="Bio">
        <div className="BioContent">
          <div className="Pic">
            <img src={logo} className="Me" alt="logo" />
          </div>

          <div className="Info">
            <h1> Owusu Bonsu's Portfolio </h1>
            <p>
              {" "}
              Hi 👋🏿 Owusu here. I'm an aspiring front-end web developer. This is
              my website. Browse around to learn more about me.{" "}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Bio;
