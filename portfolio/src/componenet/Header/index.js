import React from "react";
import './style.css';

function Header(){

return(
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Caleb Ibejigba</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-sm-end" id="navbarNavAltMarkup">
    <div className="navbar-nav w-25 justify-content-sm-between">
      <a className="nav-item nav-link  " href="#">Home </a>
      <a className="nav-item nav-link " href="#">Projects</a>
      <a className="nav-item nav-link" href="#">Contact</a>
    </div>
  </div>
</nav>
</div>
);
}

export default Header