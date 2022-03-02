import React from "react";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPencil} from "@fortawesome/free-solid-svg-icons";

import "./IdeaInfo.scss";

const IdeaInfo = (props) => {
  return (
    <div className="ideaInfoLayout">
      <img src={props.imageUrl} alt={props.ideaName} />
      <div className="description">
        Idea Name: <span>{props.ideaName}</span>
      </div>
      <div className="description">
        Author: <span>{props.ideaAuthor}</span>
      </div>
      <div className="description">
        Status: <span>{props.ideaStatus}</span>
      </div>
      <div className="description">
        Visibility: <span>{props.ideaVisibility}</span>
      </div>
      <div>
        <Button
          type="primary"
          style={{
            width: "100%",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
          }}
        >
          <FontAwesomeIcon icon={faPencil} className="icon"/> Edit
        </Button>
      </div>
    </div>
  );
};
export default IdeaInfo;
