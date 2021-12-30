import React from "react";
import { Slide } from "react-awesome-reveal";
import GHLogo from "./media/git-mark.webp";
import LILogo from "./media/linked-mini.webp";

export default function Pages() {
  return (
    <Slide cascade={true} direction={"right"} triggerOnce>
      <div className="h-full inline-flex space-x-2">
        <div className="bg-black bg-opacity-40 rounded-3xl w-1/2 p-4">
          <a href="https://github.com/OwusuBonsu">
            <img
              src={GHLogo}
              className="filter brightness-0 invert"
              alt="GitHub"
            />
          </a>
        </div>

        <div className="bg-black bg-opacity-40 rounded-3xl w-1/2 p-4">
          <a href="https://www.linkedin.com/in/owusu-bonsu/">
            <img
              className="gh"
              src={LILogo}
              className="filter brightness-0 invert"
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
    </Slide>
  );
}
