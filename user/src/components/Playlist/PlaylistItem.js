import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faCheckCircle,
  faCheck,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./PlaylistItem.scss";
import { Button } from "antd";

const PlaylistItem = (props) => {
  let navigate = useNavigate();
  const movetovideo = () => {
    navigate("/learningresources/playlist/video");
  };
  return (
    <div className="playlistItem">
      {props.iscompleted ? (
        <div className="incomplete">
          <FontAwesomeIcon icon={faCheckCircle} />
        </div>
      ) : (
        <div className="completed">
          <FontAwesomeIcon icon={faCheck} />
        </div>
      )}

      <div className="information">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
      </div>

      <Button type="primary" shape="round" onClick={movetovideo}>
        View <FontAwesomeIcon icon={faAngleDoubleRight} className="icon" />
      </Button>
    </div>
  );
};
export default PlaylistItem;
