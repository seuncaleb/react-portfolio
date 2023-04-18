import React from "react";
import './project.json'
import './style.css'





function Projects (props){


    return( 

<div className="row py-4">



      

         <div className="card  col-md-6 border-0  background rounded-0">
         <h4 className="title">{props.title}</h4>
           <img className="card-img-top" src={props.image} alt={props.title}></img>
           
          
         </div>

         <div className="col-md-6 d-flex align-self-center flex-column py-3">
          <p className="project-text">
            {props.description}
          </p>
          <p className="project-text">
          <span className="technology-text">Technology: </span>  {props.technology}
          </p>
          <div>
           <a href={props.github} target="_blank" rel="noreferrer" className="card-link linkss">Github</a>
           <a href={props.live} target="_blank" rel="noreferrer"  className="card-link linkss">Live Link</a>
           </div>
          </div>
</div>


   
    

       

        
    )

}

export default Projects