import React from "react";
import "./Projects.css";
import PAM from "./PlaylistAnalystMockup.png";
import Button from "react-bootstrap/Button";

function Projects() {
  return (
    <div className="Projects">
      <div className="Proj1img">
        <img src={PAM} />
      </div>
      <div className="Proj1Desc">
        <h2>The Spotify Playlist Analyst</h2>A tool designed to give you a
        breakdown of your spotify playlists, telling you the artists, albums and
        genres they're comprised of.
        <Button
          variant="dark"
          href="https://spotify-playlist-analyst.herokuapp.com"
        >
          Go
        </Button>
      </div>
    </div>
  );
}

export default Projects;
