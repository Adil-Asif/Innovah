import React, { useState } from "react";
import "./HomePage.style.scss";
import { Modal, Button, Form } from "antd";
import Input from "../../components/Input/Input";
import SignUpHeader from "../../components/SignUpHeader/SignUpHeader";
const HomePage = () => {
 console.log("Hello world")
  return(
    <>
  <SignUpHeader/>


 <div className="tagLines">
<h3>Digital Incubation Platform</h3>
<h3>Innovation we want, Let creativity soar</h3>
<Button > <span id="start-Today"> Start Today </span></Button>
 </div>

  
  </>
  );
};

export default HomePage;
