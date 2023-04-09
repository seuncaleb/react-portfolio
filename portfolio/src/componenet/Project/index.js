import React, { Component } from "react";
import Header from "../Header";
import Projects from "./Projects";
import project from "./Projects/project.json";
import "./style.css"
class Project extends Component {
  state = {
    project,
  };

  render() {
    return (
      <div>
        <Header/>
        <div className="container-fluid project-style">
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
