import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "../Contact";
import Home from "../Home";
import About from "../About"
import Project from "../Project";
import { AnimatePresence } from "framer-motion";

function Animated() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/Project" element={<Project />} />

        <Route exact path="/About" element={<About />} />
        

        <Route exact path="/Contact" element={<Contact />} />
 
      </Routes>
    </AnimatePresence>
  );
}

export default Animated;
