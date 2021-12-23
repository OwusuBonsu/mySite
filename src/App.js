import "./App.css";
import Bio from "./Bio";
import { useState } from "react";
import Content from "./Content";
import Particles from "react-tsparticles";
import Div100vh from "react-div-100vh";

function App() {
  const [currentPage, getCurrentPage] = useState("Projects");

  return (
    <Div100vh>
      <Particles
        canvasClassName="back"
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#0b111a",
            },
          },
          fpsLimit: 20,
          interactivity: {
            detectsOn: "canvas",
            events: {},
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },

            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 2,
              straight: false,
              bounce: false,
              decay: 0.00000000001,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />

      <div className="w-screen h-screen flex flex-col md:flex-row md:overflow-hidden z-10">
        <div className="w-full mx-auto fixed md:flex justify-center sidebar md:w-1/4 my-auto md:static z-20">
          <div className="bg-black w-full md:w-3/4 rounded-3xl md:bg-opacity-40">
            <Bio currentPage={currentPage} getCurrentPage={getCurrentPage} />
          </div>
        </div>
        <div className="content mt-10 mb-1 md:w-4/6 md:flex md:flex-col md:mt-0 m md:justify-center z-0 overflow-x-hidden  md:overflow-y-scroll">
          <Content currentPage={currentPage} />
        </div>
      </div>
    </Div100vh>
  );
}

export default App;
