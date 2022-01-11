import React, { useState } from "react";
import "./HomePage.style.scss";
import { Modal, Button, Form } from "antd";
import Input from "../../components/Input/Input";
import SignUpHeader from "../../components/SignUpHeader/SignUpHeader";
import CustomFooter from "../../components/Footer/Footer";
import idea_pitch from "../../assests/Images/HomepageImages/light-bulb.png"
const HomePage = () => {
  console.log("Hello world")
  return(
    <>
  <SignUpHeader/>

 <div className="tagLines">
<h3>Digital Incubation Platform</h3>
<h3>Innovation we want, Let creativity soar</h3>
<Button > <span className="start-Today"> Start Today </span></Button>
 </div>
<div className="innovah-tag">
<div className="homepage-heading">
What is Innovah?
</div>
<div className="homepage-content">
Innovah is a business incubator platform for people who want to convert innovative ideas into products. It is a place for <br/> enterprenues, innovators, freelancers, to work for a better future. 
</div>
</div>

<div className="innovah-tag">
<div className="homepage-heading">
What we offer
</div>
<div className="homepage-content" id="homeImages">
  <div className="homepage-images">
<img src={idea_pitch} alt="idea-Pitch" height="100px" />
<br/>
<span className="image-text"> Idea Pitch </span>
</div>
<div className="homepage-images">
<img src={idea_pitch} alt="idea-Pitch" height="100px" />
<br/>
<span className="image-text"> Idea Pitch </span>
</div>
<div className="homepage-images">
<img src={idea_pitch} alt="idea-Pitch" height="100px" />
<br/>
<span className="image-text"> Idea Pitch </span>
</div>
<div className="homepage-images">
<img src={idea_pitch} alt="idea-Pitch" height="100px" />
<br/>
<span className="image-text"> Idea Pitch </span>
</div>
<div className="homepage-images">
<img src={idea_pitch} alt="idea-Pitch" height="100px" />
<br/>
<span className="image-text"> Idea Pitch </span>
</div>



<div id="last-section" className="innovah-tag">
<div id="team-heading" className="homepage-heading">
Meet our Team
</div>
<div className="homepage-content">

<div id="team-image" className="homepage-images">
<img src={idea_pitch} alt="idea-Pitch" height="100px" />
<br/>
<span className="image-text"> Idea Pitch </span>
</div>
<div id="team-image" className="homepage-images">
<img src={idea_pitch} alt="idea-Pitch" height="100px" />
<br/>
<span className="image-text"> Idea Pitch </span>
</div>

<div id="team-image" className="homepage-images">
<img src={idea_pitch} alt="idea-Pitch" height="100px" />
<br/>
<span className="image-text"> Idea Pitch </span>
</div>

</div>
</div>

</div>
</div>
<div className="fixing-footer">
<CustomFooter/>
</div>
  </>
  );
};

export default HomePage;
