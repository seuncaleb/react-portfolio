import React from "react";
import "./style.css";

function About (){

    return (
        <div className=" container-background">
            <h2 className= "headingtext pl-5"> About Me </h2>
            <div className="container-fluid d-flex p-5 align-self-center">
            <div className="row">
                <div className="col-md-4  text-center">
                <img src="images/me.png" class="img-fluid pic" alt="caleb ibejigba with a yellow background"/>
                </div>
                <div className="col-md-8 d-flex flex-column align-self-md-center">
                    <p className="text text-left">Hey there, I am Caleb Ibejigba and I'm about to tell you a little about me. So, sit back, relax and here we go. I come from a media and communications background, that makes me prioritize users when building products. 
                    I must say I'm new to this. I attended a 14-week intensive bootcamp, where  learnt a lot about front-end web development. Since then, I've spent most of my free time gaining more knowledge on new trends while strengthening my knowledge on fundermentals and best practices.
                    I love to learn new things, and nothing is difficult if you give it the right amount of attention. </p>

                    <p className="text text-left"> Apart from writing lines of code, I love to read fictional literature. </p>
                </div>
            </div>
            </div>
           

        </div>
    )
}

export default About;