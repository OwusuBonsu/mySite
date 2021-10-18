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
            <h1> Owusu Bonsu</h1>
            <p>
              Student at Georgia State University. <br />
              Aspiring web developer.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Bio;
