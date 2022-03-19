import React from "react";
import "./AddRequest.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";
import { useState } from "react";
import IdeaInfo from "../IdeaInfo/IdeaInfo";

const AddRequest = () => {
  const submitRequestHandler= async()=>{
    let respose= await fetch(`http://localhost:5000/requests/addnewrequest`, {
     
      // Adding method type
      method: "POST",
       
      // Adding body or contents to send
      body: JSON.stringify({
        ideaTitle,
        requesttitle,
        requestDescription
      }),
       
      // Adding headers to the request
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
  respose = await respose.json()    
  console.log(ideaTitle,requesttitle,requestDescription,respose)
  }
  const [ideaTitle, setIdeaTitle] = useState("")
  const [requesttitle, setrequesttitle] = useState("")
  const [requestDescription, setrequestDescription] = useState("")

  return (
    <div className="addRequestItem">
      <label className="ideatitlelabel">Idea Title</label>
      <input type="text" placeholder="Idea Title" className="ideatitle" onChange={(e)=>{setIdeaTitle(e.target.value)}}></input>
      <br></br>
      <div className="requesttitlediv">Request Title</div>
      <input placeholder="Request Title" className="requesttitle" onChange={(e)=>{setrequesttitle(e.target.value)}}></input> <br/>
      <label style={{fontFamily: "var(--font-family-roboto)",marginLeft:"60px",fontWeight: "normal",fontSize: "17px",color: "var(--placeholoder-color)"}}>Request Type</label> <br/>
      <br/>
      <select name="requesttype" className="requesttypeselect">
        <option>Request Type</option>
      </select>
      {/* <div style={{marginTop: "-80px"}}>
        <label className="ideatitlelabel" > Attach Image</label>
        <p className="para1">
          Attach Image
          <FontAwesomeIcon icon={faInfoCircle} className="icon" />
        </p>
        <Button type="primary" shape="round" className="uploadbtn">
          Upload Image
        </Button>
        
      </div> */}
      
      <div>
      <label className="description">Description</label>
      </div>
      <input
        type="text"
        placeholder="Description"
        className="description"
        style={{marginTop:"20px"}}
        onChange={(e)=>{setrequestDescription(e.target.value)}}
      ></input>
      <Button type="primary" shape="round" onClick={()=>{submitRequestHandler()}} className="postrequestbtn">
        Post Request
      </Button>
      <Button type="primary" shape="round" className="cancelbtn">
        Cancel
      </Button>
    </div>
  );
};
export default AddRequest;
