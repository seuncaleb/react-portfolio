import React from "react";
import './project.json'


function Projects (props){

    return( 

        <div className="card  col-md-4 border-0 p-5">
            <div className="card-title"><h4>{props.title}</h4>  </div>
  <img className="card-img-top" src={props.image} alt={props.title}></img>
  
  <div>
  <a href={props.github} className="card-link">Github</a>
  <a href={props.live} className="card-link">Live Link</a>
  </div>
</div>
        
    )

}

export default Projects