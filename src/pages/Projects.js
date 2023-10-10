import React from "react";

export const Projects = () => {
  return (
    <div className="projectsMain" id="#projects">
      <h5>FEATURED PROJECTS — </h5>
      <h2>Stuff I’ve Worked On 📁</h2>
      <div className="projectsContent">
        <div
          className="projects"
          // style={{ backgroundImage: `url(${"project1.svg"})` }}
          id="project1"
        >
          <div className="icons">
            <a
              href="https://github.com/tjass2000/tictactoe"
              rel="noreferrer"
              target="_blank"
            >
              <img src="github.svg" alt="github"></img>
            </a>
            <a
              href="https://tic-tac-toe-game-tk.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <img src="link.svg" alt="link"></img>
            </a>
          </div>
          <div className="projectInfo">
            <h3>
              Tic Tac <br /> Toe Game．
            </h3>
            <h5>REACT HTML/CSS JS</h5>
          </div>
        </div>

        <div className="projects" id="project2">
          <div className="icons">
            <a
              href="https://github.com/tjass2000/box-office"
              rel="noreferrer"
              target="_blank"
            >
              <img src="github.svg" alt="github"></img>
            </a>
            <a
              href="https://tjass2000.github.io/box-office/"
              rel="noreferrer"
              target="_blank"
            >
              <img src="link.svg" alt="link"></img>
            </a>
          </div>
          <div className="projectInfo">
            <h3>
              Box Office <br /> Application．
            </h3>
            <h5>REACT HTML/CSS API</h5>
          </div>
        </div>
        <div className="projects" id="project3">
          <div className="icons">
            <a
              href="https://github.com/tjass2000/chat-app"
              rel="noreferrer"
              target="_blank"
            >
              <img src="github.svg" alt="github"></img>
            </a>
            <a
              href="https://chat-web-app-773ff.firebaseapp.com/signin"
              rel="noreferrer"
              target="_blank"
            >
              <img src="link.svg" alt="link"></img>
            </a>
          </div>
          <div className="projectInfo">
            <h3>
              Chat <br /> Application．
            </h3>
            <h5>REACT FIREBASE</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
//Create grid for projects
