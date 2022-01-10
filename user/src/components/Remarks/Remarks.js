import React from "react";
import "./Remarks.style.scss"
import { Avatar } from 'antd';
const Remarks = (props) => {
  return (
    <div className="remarks">
      <div className="avatar">
      <Avatar shape="square" size={70} src={props.imageUrl} /> 
      </div>
      <div className="juryFeedback">
        <div className="userName">{props.name}</div>
        <div className="review">{props.description}</div>
      </div>
    </div>
  );
};
export default Remarks;
