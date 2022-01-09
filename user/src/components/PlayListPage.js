import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./PlayListPage.style.scss";
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const PlayListPage = (props) => {
    if (props.titlename == "NotEnrolled") {

        return (
            <div className="mainblock">

                <FontAwesomeIcon icon={faCheckCircle} className="checkicon" />
                
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
    else {
        return (
            <div>
            <div className="checkedmainblock">

                <FontAwesomeIcon icon={faCheckCircle} className="checkcircleicon" />
                
                <span className="spanblock">
                    <strong>Algorithms</strong>
                    <div className="nesteddiv">Lecture 1</div>

                </span>






            </div>
            <div className="Videoslist">
            </div>
            </div>
        )
    }

}
export default PlayListPage;