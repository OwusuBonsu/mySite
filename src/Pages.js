import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import GHLogo from "./GHLogo.png";
import LILogo from "./LILogo.png";
import "./Pages.css";

export default function Pages() {
  return (
    <>
      <div className="Header">
        <h1>My Other Pages</h1>
      </div>
      <Card className="m-3" style={{ backgroundColor: `rgb(18, 18, 18)` }}>
        <ListGroup variant="flush">
          <ListGroup.Item
            style={{ backgroundColor: `rgb(18, 18, 18)`, textAlign: "center" }}
          >
            <a href="https://github.com/OwusuBonsu">
              <img src={GHLogo} style={{ width: "25vw" }} alt="GitHub" />
            </a>
          </ListGroup.Item>
          <ListGroup.Item
            style={{
              backgroundColor: `rgb(18, 18, 18)`,
              textAlign: "center",
            }}
          >
            <a href="https://www.linkedin.com/in/owusu-bonsu/">
              <img
                className="gh"
                src={LILogo}
                style={{ width: "30vw" }}
                alt="LinkedIn"
              />
            </a>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}
