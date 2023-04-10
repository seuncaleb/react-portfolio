import React, { Component } from "react";
import Projects from "./Projects";
import project from "./Projects/project.json";
import {motion} from "framer-motion";

class Project extends Component {
  state = {
    project,
  };

  render() {
    return (
      <motion.div>
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
      </motion.div>
    );
  }
}

export default Project;
