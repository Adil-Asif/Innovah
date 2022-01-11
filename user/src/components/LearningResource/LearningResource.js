import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCheck,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./LearningResource.style.scss";
import { Button } from "antd";
const LearningResourcesTitle1 = (props) => {
  return (
    <div className="mainblock">
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
        <></>
      ) : (
        <Button type="primary" shape="round">
          Enroll Now <FontAwesomeIcon icon={faAngleDoubleRight} className=""/>
        </Button>
      )}
    </div>
  );
};
export default LearningResourcesTitle1;
