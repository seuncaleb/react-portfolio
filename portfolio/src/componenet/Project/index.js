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
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
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
