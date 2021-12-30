import htmlIcon from "./media/html-5.svg";
import cssIcon from "./media/css-3.svg";
import jsIcon from "./media/javascript.svg";
import reactIcon from "./media/react.svg";
import tailwindIcon from "./media/tailwindcss-icon.svg";
import bootstrapIcon from "./media/bootstrap.svg";
import materialIcon from "./media/material-ui.svg";
import gitIcon from "./media/git-icon.svg";
import firebaseIcon from "./media/firebase.svg";
import netlifyIcon from "./media/netlify.svg";
import ubu from "./media/ubu.webp";
import TechIcon from "./TechIcon";
import { Slide } from "react-awesome-reveal";

export default function About() {
  return (
    <Slide direction={"right"}>
      <div className="bg-black bg-opacity-40 rounded-xl p-4 text-white">
        <h1 className="text-white mb-2">Hey 👋🏿</h1>
        <p className="mb-4">
          {" "}
          My name is Owusu Bonsu, and this is my portfolio. <br />I am a web
          developer currently living in Atlanta, GA. I graduated from Georgia
          State University with a B.S. in Computer Science. I spend my time
          creating web apps that excel in both form and function. In my free
          time, you can catch me listening to music, playing video games, or
          programming.
        </p>
        <h1>Tech I Know</h1>
        <div className="flex flex-row flex-wrap justify-center gap-y-2 mb-4">
          <TechIcon logo={htmlIcon} name="HTML5" />
          <TechIcon logo={cssIcon} name="CSS3" />
          <TechIcon logo={jsIcon} name="JavaScript" />
          <TechIcon logo={reactIcon} name="React" />
          <TechIcon logo={tailwindIcon} name="Tailwind CSS" />
          <TechIcon logo={bootstrapIcon} name="Bootstrap" />
          <TechIcon logo={materialIcon} name="Material-UI" />
          <TechIcon logo={firebaseIcon} name="Firebase" />
          <TechIcon logo={gitIcon} name="Git" />
          <TechIcon logo={netlifyIcon} name="Netlify" />
        </div>

        <h1>My Dog</h1>
        <p>Here's a picture of my dog :) his name is Ubu</p>
        <img src={ubu} className="h-96 rounded-3xl" />
      </div>
    </Slide>
  );
}
