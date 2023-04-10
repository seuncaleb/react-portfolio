import React, { useState } from "react";
import "./style.css";
import {motion} from "framer-motion"

function Contact() {

  const info = [];

  
  
  const [details, setDetails] = useState({
    name: "",
    password: "",
    message: "",
  });

  info.push(details)
  
  const handleInpute = (event) => {
    const { name, value } = event.target;

    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const HandleFormSubmit = (event) => {
    event.preventDefault();

    alert(`Hello, ${details.name}, I'll respond to you soon`);
  };
  return (
    <motion.div className="vh-100 mb-0 wrapper"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}>
    
 <div className="contact container-fluid mb-0">
      <h2 className="font-weight-bolder m-5 message"> Say Hello </h2>
      <p className="m-5 message">
        {" "}
        Get in touch with me or send an email to{" "}
        <a href="mailto:calebibejigba@gmail.com" className="links">calebibejigba@gmail.com</a>
      </p>

      <form className="px-5">
        <div className="form-group row">
          <div className="col-sm-12  my-2">
            <input
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Name"
              onChange={handleInpute}
              name="name"
            />
          </div>
          <div className="col-sm-12  my-2">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              placeholder="Email"
              onChange={handleInpute}
              name="password"
            />
          </div>
          <div className="col-sm-12 my-2">
            <textarea
              type="text"
              className="form-control"
              id="inputMessage"
              placeholder="Leave a message"
              rows={5}
              onChange={handleInpute}
              name="message"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10 my-2">
            <button
              type="submit"
              className="btn"
              onClick={HandleFormSubmit}
            >
              Send Message
            </button>
          </div>
        </div>
      </form>

      <div className="container-fluid">
        <div className="row ">
          <div className="col-6 d-flex justify-content-center ">
          <a href="https://github.com/seuncaleb" className="links">   <div className="fa-brands fa-github  p-2"></div>Seuncaleb</a>
            
          </div>
          <div className="col-6 d-flex justify-content-center"> 
          <a href="https://www.linkedin.com/in/calebibejigba/" className="links">   <div className="fa-brands fa-linkedin-in p-2"></div> Caleb Ibejigba</a>
           
          </div>
        </div>
      </div>
    </div>
    </motion.div>
   
  );
}

export default Contact;
