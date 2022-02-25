import React from "react";
import styles from "./RewardItem.module.scss";
import { Button } from "antd";

const RewardItem = (props) => {
  return (
    <div className={styles.RewardItem}>
      <div className={styles.left}>
        <div className={styles.listNumber}> {props.listNumber} </div>
        <div className={styles.information}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.description}>{props.description}</div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.points}>{props.points} IP</div>
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
