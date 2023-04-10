import React from "react";
import './style.css';
import { Link} from 'react-router-dom'

function Header(){

return(
<div>
<nav className="navbar navbar-expand-lg ">
  <a className="navbar-brand navText" href="/"><h4 className="navh4">Caleb Ibejigba</h4></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon "></span>
  </button>
  <div className="collapse navbar-collapse justify-content-sm-end" id="navbarNavAltMarkup">
    <div className="navbar-nav w-25 justify-content-sm-between">
    
      <Link to="/" className="nav-item nav-link navText " >Home </Link>
      <Link to="/About" className="nav-item nav-link navText" >About</Link>
      <Link to="/Project" className="nav-item nav-link navText" >Projects</Link>
      <Link to="/Contact" className="nav-item nav-link navText" >Contact</Link>
      <Link to="https://drive.google.com/file/d/15TnvmBoehP5lMf6o-y_Cwu4oHIMOYNk0/view?usp=share_link" target="_blank" className="nav-item nav-link resBut navText" >Résumé</Link>
    </div>
  </div>
</nav>

</div>
);
}

export default Header