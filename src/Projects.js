import React from "react";
import PAM from "./PlaylistAnalystMockup.png";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectTemplate from "./ProjectTemplate";

function Projects() {
  return (
    <>
      <div className="Header">
        <h1>My Projects</h1>
      </div>
      <div className="Projects">
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
      </div>
    </>
  );
}

export default Projects;
