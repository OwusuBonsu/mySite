import "./App.css";
import Bio from "./Bio";
import Projects from "./Projects";
import Resume from "./Resume";
import Pages from "./Pages";
import { Fade, Slide } from "react-awesome-reveal";

function App() {
  return (
    <>
      <Bio />
      <Projects />
      <Resume />
      <Pages />
    </>
  );
}

export default App;
