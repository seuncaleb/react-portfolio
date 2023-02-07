import React from 'react';
import './App.css';
import Home from './componenet/Home'
import Project from './componenet/Project';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componenet/Header';


function App() {
  return (
   <Router>
    <Header />
    <div className='content'>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        
        
        <Route exact path='/Project'  element={<Project/>}/>
       
      
        
  
      </Routes>
    </div>
    </Router>
  );
}

export default App;
