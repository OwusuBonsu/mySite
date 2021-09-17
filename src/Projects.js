import React from "react";
import PAM from "./PlaylistAnalystMockup.png";
import TDM from "./ToDoMockup.png";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectTemplate from "./ProjectTemplate";

function Projects() {
  return (
    <>
      <div className="Header">
        <h1>My Projects</h1>
      </div>
      <div className="Projects mb-5">
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
          desc="To be honest... I don't know what the purpose of this is. It's a simple To-Do list that takes advantage of Firebase's Realtime Database in order to sync to-do items and their status'"
          link="https://brave-franklin-d211ca.netlify.app/"
          tags={[
            "React",
            "Firebase",
            "Material UI",
            "React Hooks",
            "Realtime Updates",
          ]}
        />
      </div>
    </>
  );
}

export default Projects;
