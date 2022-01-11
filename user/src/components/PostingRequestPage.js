import React from "react";
import "./PostingRequestPage.style.scss";
import Input from "../Input/Input.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
const PostingRequestPage = () =>{
    return(
        <div className="mainblock">
        <label className="ideatitlelabel">Idea Title</label>
            <input type="text" placeholder="Idea Title" className="ideatitle"></input>
            <br></br>
            <div className="requesttitlediv">Request Title</div>
            <input placeholder="Request Title" className="requesttitle">
            </input>
            <select name="requesttype" className="requesttypeselect">
                <option>Request Type</option> 
            </select>
            <div>
                <p className="para1">
                    Attach Image
                    <FontAwesomeIcon icon={faInfoCircle} className="icon"/>
                </p>
                <Button type="primary" shape="round" className="uploadbtn">
                    Upload Image
                </Button>

            </div>
            <input type="text" placeholder="Description" className="description"></input>
            <Button type="primary" shape="round" className="postrequestbtn">
                Post Request
            </Button>
            <Button type="primary" shape="round" className="cancelbtn">
                Cancel
            </Button>
        </div>
    )
}
export default PostingRequestPage;