import React from "react";
import Home from "./componenet/Home";
import Project from "./componenet/Project";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./componenet/Contact";

function App() {
  return (
    <Router>
     
        
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/Project" element={<Project />} />

          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
