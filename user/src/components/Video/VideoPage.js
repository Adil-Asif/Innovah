import React from "react";
import "./VideoPage.style.scss";
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft , faAngleRight } from "@fortawesome/free-solid-svg-icons";

const VideoPage = () =>{
    return(
        <div>
            <p className="para1">Video Details</p>
            <div className="Video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/_WncuhSJZyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="videoiframe">
                </iframe>
                <Button type="primary" shape="round" className="Nextbtn">
                    Next 
                    <FontAwesomeIcon icon={faAngleRight}  className="Angleright"/>
                </Button>
                <Button type="primary" shape="round" className="Backbtn">
                    <FontAwesomeIcon icon={faAngleLeft} classname="Angleleft"/>
                    Back
                    
                </Button>
            </div>
        </div>
    )
}
export default VideoPage;