import React from "react";
import "./RewardItem.scss";
import { Button } from "antd";

const RewardItem = (props) => {
  return (
    <div className="rewardItemLayout">
      <div className="left">
        <div className="listNumber"> {props.listNumber} </div>
        <div className="information">
          <div className="title">{props.title}</div>
          <div className="description">{props.description}</div>
        </div>
      </div>

      <div className="right">
        <div className="points">{props.points} IP</div>
        <div>
          <Button
            type="primary"
            shape="round"
          >
            Claim
          </Button>
        </div>
      </div>
    </div>
  );
};
export default RewardItem;
