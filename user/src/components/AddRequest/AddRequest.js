import React from "react";
import "./AddRequest.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";

const AddRequest = () => {
  return (
    <div className="addRequestItem">
      <label className="ideatitlelabel">Idea Title</label>
      <input type="text" placeholder="Idea Title" className="ideatitle"></input>
      <br></br>
      <div className="requesttitlediv">Request Title</div>
      <input placeholder="Request Title" className="requesttitle"></input> <br/>
      <label style={{fontFamily: "var(--font-family-roboto)",marginLeft:"60px",fontWeight: "normal",fontSize: "17px",color: "var(--placeholoder-color)"}}>Request Type</label> <br/>
      <br/>
      <select name="requesttype" className="requesttypeselect">
        <option>Request Type</option>
      </select>
      <div style={{marginTop: "-80px"}}>
        <label className="ideatitlelabel" > Attach Image</label>
        <p className="para1">
          Attach Image
          <FontAwesomeIcon icon={faInfoCircle} className="icon" />
        </p>
        <Button type="primary" shape="round" className="uploadbtn">
          Upload Image
        </Button>
        
      </div>
      
      <div>
      <label className="description">Description</label>
      </div>
      <input
        type="text"
        placeholder="Description"
        className="description"
        style={{marginTop:"20px"}}
      ></input>
      <Button type="primary" shape="round" className="postrequestbtn">
        Post Request
      </Button>
      <Button type="primary" shape="round" className="cancelbtn">
        Cancel
      </Button>
    </div>
  );
};
export default AddRequest;
