import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
// import axios from 'axios';
import {
  faCheckCircle,
  faCheck,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./LearningResource.scss";
import { Button } from "antd";
const LearningResourcesTitle1 = (props) => {
  let navigate = useNavigate();
  const movetoplaylist = () => {
    navigate("/learningresources/playlist");
  };
  return (
    <div className="learningResourceItemLayout">
      {props.iscompleted ? (
        <div className="incomplete">
          <FontAwesomeIcon icon={faCheckCircle} />
        </div>
      ) : (
        <div className="completed">
          <FontAwesomeIcon icon={faCheck} />
        </div>
      )}
      <div className="playlistImage">
        <img src={props.imageUrl} alt={props.title} />
      </div>
      <div className="information">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
      </div>

      {props.isenrolled ? (
        <>
          <Button type="primary" shape="round" onClick={movetoplaylist}>
            View <FontAwesomeIcon icon={faAngleDoubleRight} className=""/>
          </Button>
        </>
      ) : (
        <Button type="primary" shape="round">
          Enroll Now <FontAwesomeIcon icon={faAngleDoubleRight} className="" />
        </Button>
      )}
    </div>
  );
};
export default LearningResourcesTitle1;
