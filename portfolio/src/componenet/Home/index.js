import React from "react";
import Header from "../Header";
import { motion } from "framer-motion";

import "./style.css";

function Home() {
  const variant = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="vh-100 mb-0 wrapper">
      <Header />
      <div className="jumbotron jumbotron-fluid  ">
        <div className="container">
          <motion.h2 className="display-3 headingtwo" 
        variants={variant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}>SEUNCALEB</motion.h2>

          <p className=" pr-sm-5 py-sm-5 text text-center">
            Hi, I'm Caleb Ibejigba, a front-end web developer making interesting
            mobile friendly, and responsive websites{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
