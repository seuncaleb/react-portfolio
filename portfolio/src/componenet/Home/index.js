import React from "react";
import Header from "../Header";
import './style.css';


function Home (){

    return(
        <div className="vh-100 mb-0 wrapper">
           <Header/>
            <div className="jumbotron jumbotron-fluid  ">
  <div className="container">
 <p className="lead text">Hi, I am</p>
    <h2 className="display-3 headingtwo ">Caleb Ibejigba.</h2>
    <h2 className="display-3 headingtwo" >I build interesting things for the web.</h2>
    <p className=" pr-sm-5 py-sm-5 text">Front-end web developer leveraging a background in digital communications and strategy to provide unique perspectives on how users interact with websites and software.    Innovative problem-solver passionate about developing apps with a focus on mobile-first design and development</p>
    
  </div>
</div>

          
        </div>
    )
}

export default Home