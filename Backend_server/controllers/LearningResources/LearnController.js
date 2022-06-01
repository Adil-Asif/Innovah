const express = "express";
const mysql = require("mysql");
const uuid = require("uuid");
const validator = require("email-validator");
const session = require("sessionstorage");
const model = require("../../models/database");
// var db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database:'fypdb'
// });
// db.connect((err)=>{
//     if(err){
//         console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));

//     }
//     else{
//         console.log("mysql connected");
//     }
// });
exports.addplaylist = (req, res) => {
  console.log(session.getItem("signin"));
  if (session.getItem("signin") == true) {
    // var trainerid = session.getItem('useridinfo');
    let sql1 = "select userid from user_details";
    let allUserId = "";
    model.query(sql1, (err, result) => {
      if (err) {
        // console.log(user_id);
        console.log(JSON.stringify(err, undefined, 2));
        // console.log("error")
      } else {
        console.log(result);
        allUserId = result;
        console.log(allUserId[0].userid);
        for (let i = 0; i < allUserId.length; i++) {
          let playlistinfo = {
            trainerid: req.body.trainerid,
            userid: allUserId[i].userid,
            title: req.body.playlistname,
            description: req.body.description,
            completedstatus: 0,
            imageurl: req.body.pic,
            playlistid: uuid.v1(),
            enrolledstatus: 0,
          };

          let sql = "insert into learning set ?";
          model.query(sql, playlistinfo, (err, result) => {
            if (err) {
              //   console.log(user_id);
              console.log(JSON.stringify(err, undefined, 2));
              // console.log("error")
            } else {
              console.log(result);
              //   res.JSON(playlistinfo);
            }
          });
        }

        res.send("Playlist Added");
      }
    });
  }
};

exports.addvideo = (req, res) => {
  if (session.getItem("signin") == true) {
    // var trainerid = session.getItem('useridinfo');
    var videoid = uuid.v1();
    let sql1 = "select userid from user_details";
    let allUserId = "";
    model.query(sql1, (err, result) => {
      if (err) {
        // console.log(user_id);
        console.log(JSON.stringify(err, undefined, 2));
        // console.log("error")
      } else {
        console.log(result);
        allUserId = result;
        var videoid = uuid.v1();
        console.log(allUserId[0].userid);
        for (let i = 0; i < allUserId.length; i++) {
          let videoinfo = {
            id: uuid.v1(),
            playlistid: req.body.playlistid,
            description: req.body.description,
            userid: allUserId[i].userid,
            videotitle: req.body.videotitle,
            videoiframe: req.body.videoiframe,
          };

          let sql = "insert into playlist set ?";
          model.query(sql, videoinfo, (err, result) => {
            if (err) {
              //   console.log(user_id);
              console.log(JSON.stringify(err, undefined, 2));
              // console.log("error")
            } else {
              console.log(result);
              //   res.JSON(playlistinfo);
            }
          });
        }

        res.send("Videa Added");
      }
    });
  }
};
// need to store the playlostid userid and all the videoids of the playlist here
exports.changeenrollstatus = (req, res) => {
  if (session.getItem("signin") == true) {
    var userinfo = session.getItem("useridinfo");
    // var title = session.getItem('playlistname');
    var playid = req.body.playlistid;
    // var trainerid = session.getItem('trainerid');
    console.log(playid);
    var trainerid = req.body.trainerid;
    console.log(trainerid);
    console.log(userinfo, "hhh");
    // title="Algorithms course";
    let sql =
      "update learning set enrolledstatus=1 where userid=? and playlistid=? and trainerid=?";
    model.query(sql, [userinfo, playid, trainerid], (err, result) => {
      if (err) {
        console.log(JSON.stringify(err, undefined, 2));
      } else {
        console.log(result);
        res.send("query executed propely");
      }
    });
  } else {
    res.send("please signin first Thankyou");
  }
};

//Retrieve all playlist user is enrolled
exports.getallitems = (req, res) => {
  if (session.getItem("signin") == true) {
    const userinfo = session.getItem("useridinfo");
    // userinfo = "6dbb0ba0-999e-11ec-ba73-d9e1c22c2fb81";
    console.log(userinfo);
    // let sql = "select userid from user_details where userid="+mysql.escape(userinfo);
    let sql = "select * from learning where userid=" + mysql.escape(userinfo);
    model.query(sql, (err, result) => {
      if (err) {
        console.log(JSON.stringify(err, undefined, 2));
      } else {
        // below 2 lines are useless
        // session.setItem('trainerid',result[0].trainerid);
        // session.setItem('playlistname',result[0].title);
        // console.log(result)
        // var trainerid =
        res.send(result);

        // session.setItem("enrollstatus",enrolledstatus)

        // console.log(result);
        // res.send(pic)
      }
    });
  } else {
    res.send("please signin first Thankyou");
  }
};

exports.getplaylist = (req, res) => {
  // trainer is uploading all the resources for the users who requested it.
  if (session.getItem("signin") == true) {
    var playlistid = req.body.playlistid;
    console.log(req.body);
    var title;
    // var playid = req.body.playlistid;
    // var trainerid = req.body.trainerid;
    // var title = session.getItem('playlistname');
    // var trainerid = session.getItem('trainerid');
    var userinfo = session.getItem("useridinfo");
    console.log(userinfo, playlistid);
    // var playlistname = title;
    // // trainerid="12";
    // userinfo = "6dbb0ba0-999e-11ec-ba73-d9e1c22c2fb81";
    // title = "Algorithms course";
    let sql = "select * from playlist where userid=? AND playlistid=?";
    title = model.query(sql, [userinfo, playlistid], (err, result) => {
      if (err) {
        console.log(JSON.stringify(err, undefined, 2));
      } else {
        console.log("query executed properly");
        console.log(result);
        if (result.length > 0) {
          let sql1 = "select title from learning where playlistid = ?";
          model.query(sql1, [playlistid], (err, result1) => {
            if (err) {
              console.log(JSON.stringify(err, undefined, 2));
            } else {
              //  session.p title = result[0];
              res.send([result, result1[0]]);
            }
          });

          // Object.keys(result).forEach(function (key) {
          //   // var row = result[key];
          //   var videoid = result[key].id;
          //   var playlisttitle = result[key].playlisttitle;
          //   var trainerid = result[key].trainerid;
          //   var status = result[key].status;
          //   // var desc = result[key].description;

          //   // var pic = result[key].imageurl;
          //   var title = result[key].videotitle;
          //   var desc = result[key].description;
          //   // var completedstatus = result[key].completedstatus;
          //   // var enrolledstatus = result[key].enrolledstatus;
          //   res.json({
          //     title: title,
          //     trainerid: trainerid,
          //     playlisttitle: playlisttitle,
          //     desc: desc,
          //     status: status,
          //     videoid: videoid,
          //   });
          //   // console.log(row.name)
          // });
          // session.setItem('videotitle',result[0].videotitle);
          // session.setItem('videodesc',result[0].description);
          // res.json({"playlistname":playlistname,"title":result[0].videotitle,"desc":result[0].description,"status":result[0].status});
        }
      }
    });
  } else {
    if (session.getItem("signin") == false) {
      res.send("please signin first Thankyou");
    }
  }
};

exports.getvideo = (req, res) => {
  if (session.getItem("signin") == true) {
    // var videotitle = session.getItem('videotitle');
    // var playlistname = session.getItem('playlistname');
    // var trainer = session.getItem('trainerid');
    var userinfo = session.getItem("useridinfo");
    console.log(userinfo, "hhhhhh");
    // var desc = session.getItem('videodesc');
    // trainer="12";
    // playlistname="Algorithms course";
    var videoid = req.body.id;
    console.log(videoid);
    // console.log(videotitle);
    let sql = "select * from playlist where id=? and userid=? ";

    model.query(sql, [videoid, userinfo], (err, result) => {
      if (err) {
        console.log(JSON.stringify(err, undefined, 2));
      } else {
        console.log("query executed properly");
        if (result.length > 0) {
          let sql1 =
            "update user_details set innovahPoints = ? where userid = ?";
          model.query(
            sql1,
            [req.body.innovahPoints, userinfo],
            (err, result1) => {
              if (err) {
                console.log(JSON.stringify(err, undefined, 2));
              } else {
                console.log("Success");
              }
            }
          );
          console.log(result);
          res.send(result);
        }
      }
    });
  } else {
    if (session.getItem("signin") == false) {
      res.send("please signin first Thankyou");
    }
  }
};
