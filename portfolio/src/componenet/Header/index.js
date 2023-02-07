import React from "react";
import './style.css';
import { Link} from 'react-router-dom'

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
      <Link to="/" className="nav-item nav-link  " >Home </Link>
      <Link to="/Project" className="nav-item nav-link " >Projects</Link>
      <Link to="/Contact" className="nav-item nav-link" >Contact</Link>
    </div>
  </div>
</nav>
</div>
);
}

export default Header