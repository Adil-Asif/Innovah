import React from "react";
import "./RequestsItem.scss";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faEye,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const RequestsItem = (props) => {
  return (
    <div className="requestItemLayout">
      <img src={props.imageUrl} alt={props.RequestName} />
      <div className="information">
        <div className="title">{props.RequestName}</div>
        <div className="description">{props.description}</div>
        <div className="insights">
          <div className="details">
            <FontAwesomeIcon icon={faThumbsUp} className="icon" />
            {props.likes}
          </div>
          <div className="details">
            <FontAwesomeIcon icon={faEye} className="icon" />
            {props.views}
          </div>
          <div className="details">
            <FontAwesomeIcon icon={faComment} />
            {props.comments}
          </div>
        </div>
      </div>
      {props.global ? (
        <>
          <Button
            type="primary"
            className="left"
            style={{
              width: "100%",
              borderBottomLeftRadius: "8px",
              borderBottomRightRadius: "8px",
            }}
          >
            Apply
          </Button>
        </>
      ) : (
        <>
          <Button
            type="primary"
            className="left"
            style={{ marginRight: "4%", borderBottomLeftRadius: "8px" }}
          >
            Edit
          </Button>
          <Button
            type="primary"
            className="right"
            style={{
              borderBottomRightRadius: "8px",
            }}
          >
            View Item
          </Button>
        </>
        
      )}
    </div>
  );
};

export default RequestsItem;
