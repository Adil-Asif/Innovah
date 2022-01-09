import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./LearningResourcesTitle1.style.scss";
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Algo from "../../assests/Images/Algo.png";
const LearningResourcesTitle1 = (props) =>{
    if(props.titlename=="NotEnrolled")
    {
        
        return (
            <div className="mainblock">

                <FontAwesomeIcon icon={faCheckCircle} className="checkicon" />
                <img src={props.src} className="image"/>{" "}
                <span className="spanblock">
                    <strong>Algorithms</strong>
                    <div className="nesteddiv">Lecture 1</div>
                    
                </span>
                <Button type="primary" shape="round" className="enrollbutton" >
                    Enroll Now >>
                </Button>
                







            </div>
        )
    }
    else
    {
        return (
            <div className="checkedmainblock">

                <FontAwesomeIcon icon={faCheckCircle} className="checkcircleicon" />
                <img src={props.src} className="image" />{" "}
                <span className="spanblock">
                    <strong>Algorithms</strong>
                    <div className="nesteddiv">Lecture 1</div>

                </span>
                





            </div>
        )
    }
    
}
export default LearningResourcesTitle1;