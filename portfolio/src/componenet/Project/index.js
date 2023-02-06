import React from "react";
import Projects from "./Projects";
import Header from "../Header";
import project from "./Projects/project.json";

function Project() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Projects
            title={project[0].title}
            image={project[0].image}
            github={project[0].github}
            live={project[0].live}
          />

<Projects
            title={project[1].title}
            image={project[1].image}
            github={project[1].github}
            live={project[1].live}
          />

<Projects
            title={project[2].title}
            image={project[2].image}
            github={project[2].github}
            live={project[2].live}
          />

<Projects
            title={project[3].title}
            image={project[3].image}
            github={project[3].github}
            live={project[3].live}
          />

<Projects
            title={project[4].title}
            image={project[4].image}
            github={project[4].github}
            live={project[4].live}
          />

<Projects
            title={project[5].title}
            image={project[5].image}
            github={project[5].github}
            live={project[5].live}
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
