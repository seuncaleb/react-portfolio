import React, { Component } from "react";
import Projects from "./Projects";
import project from "./Projects/project.json";

class Project extends Component {
  state = {
    project,
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            {this.state.project.map((project) => (
              <Projects
                title={project.title}
                image={project.image}
                github={project.github}
                live={project.live}
                key={project.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
