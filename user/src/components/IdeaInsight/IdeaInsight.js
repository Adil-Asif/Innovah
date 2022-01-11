import React from "react";
import "./IdeaInsight.style.scss";

const IdeaInsight = (props) =>
{
  return(
      <div className="ideaInsight">
          <div className="title"><div className="icon">{props.icon}</div> {props.title}</div>
          <div className="description">{props.description}</div>
          
      </div>
  );
}
export default IdeaInsight;