const express = "express";
const mysql = require("mysql");
const uuid = require("uuid");
const validator = require("email-validator");
const session = require("sessionstorage");
const model = require("../../models/database");

exports.getallrewards = (req, res) => {
  if (session.getItem("signin") == true) {
    let sql =
      "select * from rewards,user_rewards where rewards.rewardid = user_rewards.rewardid and user_rewards.userid= ?";
    model.query(sql, [req.query.userid], (err, result) => {
      if (err) {
        console.log(JSON.stringify(err, undefined, 2));
      } else {
        console.log(result);
        res.send(result);
      }
    });
  } else {
    res.send("please signin first Thankyou");
  }
};
exports.uploadreward = (req, res) => {
  if (session.getItem("signin") == true) {
    console.log(req.body);
    let sql = "insert into rewards set ?";
    const rewardid = uuid.v1();
    model.query(
      sql,
      {
        rewardid: rewardid,
        rewardTitle: req.body.rewardTitle,
        rewardDescription: req.body.rewardDescription,
        rewardPoints: req.body.rewardPoints,
      },
      (err, result) => {
        if (err) {
          console.log(JSON.stringify(err, undefined, 2));
        } else {
          let sql1 = "select userid from user_details";
          model.query(sql1, (err1, result1) => {
            if (err) {
              console.log(JSON.stringify(err, undefined, 2));
            } else {
              for (let i = 0; i < result1.length; i++) {
                console.log(result1);
                let sql2 = "insert into user_rewards set ?";
                model.query(
                  sql2,
                  {
                    userrewardid: uuid.v1(),
                    userid: result1[i].userid,
                    rewardid: rewardid,
                    claimStatus: 0,
                  },
                  (err2, result2) => {
                    if (err) {
                      console.log(JSON.stringify(err, undefined, 2));
                    } else {
                      console.log("success");
                      //   res.send("success");
                    }
                  }
                );
              }
            }
          });
        }
      }
    );
  }
};
exports.claimreward = async (req, res) => {
  if (session.getItem("signin") == true) {
    var userinfo = session.getItem("useridinfo");
    //     select the points of the rewar that is being selected
    var points;
    //    let sql = "select * from rewards where userid="+mysql.escape(userinfo)
    let sql = "update user_rewards set claimStatus = ? where userrewardid = ?";
    model.query(sql, [1, req.body.userrewardid], (err, result) => {
      if (err) {
        console.log(JSON.stringify(err, undefined, 2));
      } else {
        let sql1 = "update user_details set innovahPoints = ? where userid = ?";
        model.query(
          sql1,
          [req.body.innovahPoints, req.body.userid],
          (err, result1) => {
            if (err) {
              console.log(JSON.stringify(err, undefined, 2));
            } else {
              console.log("Success");
              res.send("Success");
            }
          }
        );
      }
    });
  } else {
    res.send("please signin first Thankyou");
  }
};
