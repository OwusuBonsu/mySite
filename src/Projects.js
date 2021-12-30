import React from "react";
import PAM from "./media/PlaylistAnalystMockup.webp";
import TDM from "./media/ToDoMockup.webp";
import PBM from "./media/PlaybaxxMockup.webp";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectTemplate from "./ProjectTemplate";
import { Slide } from "react-awesome-reveal";

function Projects() {
  return (
    <Slide cascade={true} direction={"right"} fraction={0.2} triggerOnce>
      <ProjectTemplate
        image={PBM}
        name="Playbaxx"
        desc="A web app that gives users information about artists and their songs. Styled entirely using TailwindCSS. Data is pulled from Spotify, LastFM, Youtube, among others. Site is fully responsive and accomodates both mobile and desktop users."
        link="https://playbaxx.netlify.app"
        tags={["React", "TailwindCSS", "Recoil", "React Hooks", "RESTful APIs"]}
      />
      <ProjectTemplate
        image={PAM}
        name="The Spotify Playlist Analyst"
        desc="A tool designed to give you a
        breakdown of your spotify playlists, telling you the artists, albums and
        genres they're comprised of."
        link="https://spotify-playlist-analyst.herokuapp.com"
        tags={[
          "React",
          "Spotify API",
          "Last.FM API",
          "Async Programming",
          "React Hooks",
          "Nivo",
        ]}
      />
      <ProjectTemplate
        image={TDM}
        name="Public To-Do List"
        desc="A simple To-Do list that takes advantage of Firebase's Realtime Database in order to sync to-do items and their completion status's."
        link="https://su-todo-firebase.netlify.app"
        tags={[
          "React",
          "Firebase",
          "Material UI",
          "React Hooks",
          "Realtime Updates",
        ]}
      />
    </Slide>
  );
}

export default Projects;
