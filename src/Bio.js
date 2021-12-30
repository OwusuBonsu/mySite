import logo from "./media/Me.webp";

function Bio({ currentPage, getCurrentPage }) {
  return (
    <div className="m-3 rounded-2xl">
      <div className="">
        <div className="hidden md:inline max-w-xs md:max-w-md">
          <img src={logo} className="Me" alt="logo" />
        </div>

        <div className="flex flex:row md:flex-col items-center">
          <h1 className="md:text-center text-white text-base align-middle my-auto md:text-4xl w-1/2 md:w-auto">
            Owusu Bonsu
          </h1>
          <p className="text-white hidden text-center md:inline">
            Web developer. <br />
            Georgia State University Alumni.
          </p>
          <button
            onClick={() => getCurrentPage("About")}
            className={`mx-2 ${
              currentPage === "About" ? "text-gray-400" : "text-white"
            }`}
          >
            About
          </button>{" "}
          <button
            onClick={() => getCurrentPage("Projects")}
            className={`mx-2 ${
              currentPage === "Projects" ? "text-gray-400" : "text-white"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => getCurrentPage("Resume")}
            className={`mx-2 ${
              currentPage === "Resume" ? "text-gray-400" : "text-white"
            }`}
          >
            Resume
          </button>
          <button
            onClick={() => getCurrentPage("Pages")}
            className={`mx-2 ${
              currentPage === "Pages" ? "text-gray-400" : "text-white"
            }`}
          >
            Pages
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bio;
