import { useEffect } from "react";
import Projects from "./Projects";
import Resume from "./Resume";
import Pages from "./Pages";
import { Fade, Slide } from "react-awesome-reveal";

export default function Content({ currentPage }) {
  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  if (currentPage === "Projects") {
    return <Projects />;
  }

  if (currentPage === "Resume") {
    return (
      <Slide direction={"right"} delay={250}>
        <Resume />
      </Slide>
    );
  }

  if (currentPage === "Pages") {
    return (
      <Slide direction={"right"}>
        <Pages />
      </Slide>
    );
  }

  return null;
}
