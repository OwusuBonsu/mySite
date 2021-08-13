import "./ProjectTemplate.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ProjectTemplate({ image, name, desc, link, tags }) {
  return (
    <Card
      className="m-3 CardContent"
      style={{ backgroundColor: `rgb(18, 18, 18)` }}
    >
      <div className="ProjImg">
        <img src={image} />
      </div>
      <div className="ProjName">
        <h2>{name}</h2>
      </div>
      <div className="ProjDesc">{desc}</div>
      <div className="ProjTags">
        {tags.map((element) => {
          return (
            <Card className="bg-dark border-light mx-1 text-center">
              {element}
            </Card>
          );
        })}
      </div>
      <div className="GoButton">
        <Button variant="dark" href={link}>
          Go
        </Button>
      </div>
    </Card>
  );
}
