import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ProjectTemplate({
  image,
  name,
  desc,
  link,
  tags,
  github,
}) {
  return (
    <div className="prose grid grid-cols-3 bg-black bg-opacity-40 my-2 rounded-3xl p-2">
      <div className="ProjImg m-auto col-span-1 row-span-3">
        <img src={image} />
      </div>
      <div className="ProjName m-auto text-center text-white">
        <h2>{name}</h2>
      </div>
      <div className="ProjDesc m-auto col-start-2 text-center text-white">
        {desc}
      </div>
      <div className="ProjTags flex flex-wrap m-auto items-center">
        {tags.map((element) => {
          return (
            <Card className="bg-dark text-center p-1 mx-auto my-2 text-white">
              {element}
            </Card>
          );
        })}
      </div>
      <div className="GoButton text-center m-auto">
        <Button variant="dark" href={link} className="mx-2">
          Go
        </Button>
        <Button variant="dark" href={github} className="mx-2">
          GitHub
        </Button>
      </div>
    </div>
  );
}
