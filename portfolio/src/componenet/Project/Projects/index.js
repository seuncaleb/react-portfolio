import React from "react";
import './project.json'
import './style.css'





function Projects (props){


    return( 

        <div className="card  col-md-4 border-0 p-5 background rounded-0">
            <div className="card-title "><h4 className="title">{props.title}</h4>  </div>
  <img className="card-img-top" src={props.image} alt={props.title}></img>
  
  <div>
  <a href={props.github} className="card-link linkss">Github</a>
  <a href={props.live} className="card-link linkss">Live Link</a>
  </div>
</div>
        
    )

}

export default Projects