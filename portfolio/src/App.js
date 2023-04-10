import React from "react";
import Header from "./componenet/Header"

import { BrowserRouter as Router } from "react-router-dom";

import Animated from "./componenet/Animated/Animated";

function App() {
  return (
   <div className="wrapper">
     <Router >
     <Header/>
        <Animated/>
    </Router>
    
   </div>
      
   
  );
}

export default App;
