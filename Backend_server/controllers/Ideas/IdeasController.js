const express = "express";
const mysql = require("mysql");
const uuid = require("uuid");
const validator = require("email-validator");
const session = require("sessionstorage");
const model = require("../../models/database");
const { param } = require("../../routes/Ideas/Ideas");

//  for global ideas
// if he is admin show all records
// and if he is user so show him ideas regarding his industry
exports.addidea = (req, res) => {
  if (session.getItem("signin") == true) {
    var ideaid1 = uuid.v1();
    var userinfo = session.getItem("useridinfo");
    let ideadetails = {
      ideaid: ideaid1,
      title: req.body.ideaTitle,
      description: req.body.ideaDescription,
      image: req.body.ideaImage,
      visibility: req.body.ideaVisibility,
      ideaindustry: req.body.ideaIndustry,
      userid: userinfo,
      domain: req.body.ideaDomain,
      isapproved: 0,
      deliverables: req.body.ideaFinalDeliverables,
    };

    let sql = "insert into idea set ?";

    model.query(sql, ideadetails, (err, result) => {
      if (err) {
        // console.log(user_id)
        console.log(JSON.stringify(err, undefined, 2));
        // console.log("error")
      } else {
        console.log(result);

        res.send("Idea Posted");
      }
    });
  }
};
exports.edititem = (req, res) => {
  //eheyyy
  if (session.getItem("signin") == true) {
    // var userinfo = session.getItem('useridinfo');
    // req.body.ideaName,req.body.ideaDescription,req.body.image
    let sql3 = "update idea set title=?, description=?, image=? where ideaid=?";
    model.query(
      sql3,
      [
        req.body.ideaName,
        req.body.ideaDescription,
        req.body.ideaImage,
        req.body.ideaid,
      ],
      (err, result) => {
        if (err) {
          // console.log(user_id)
          console.log(JSON.stringify(err, undefined, 2));
          // console.log("error")
        } else {
          console.log("the data has been updated");
        }
      }
    );
  }
};
exports.globalideaupdatestatus = (req, res) => {
  if (session.getItem("signin") == true) {
    let sql = "update idea set isapproved=1 where ideaid=?";
    model.query(sql, req.body.ideaid, (err, result) => {
      if (err) {
        // console.log(user_id)
        console.log(JSON.stringify(err, undefined, 2));
        // console.log("error")
      } else {
        console.log(result);
      }
    });
  }
};
exports.viewglobalidea = (req, res) => {
  if (session.getItem("signin") == true) {
    console.log(req.query);
    const userrole = req.query.userrole;
    // const userrole = "Administrator";
    // console.log(req, "2");
    if (userrole === "Administrator") {
      let sql = "select * from idea";

      model.query(sql, (err, result) => {
        if (err) {
          // console.log(user_id)
          console.log(JSON.stringify(err, undefined, 2));
          // console.log("error")
        } else {
          console.log(result);
          res.json({ result: result });
          // if(result[0].userrole=="admin"){
          //     let sql2 = "select * from idea";
        }
      });
    } else if (userrole === "Jury") {
      let sql = "select * from idea where ideaindustry = ? and isapproved=?";

      model.query(sql, [req.query.ideaindustry, 1], (err, result) => {
        if (err) {
          // console.log(user_id)
          console.log(JSON.stringify(err, undefined, 2));
          // console.log("error")
        } else {
          console.log(result);
          res.send(result);
          // if(result[0].userrole=="admin"){
          //     let sql2 = "select * from idea";
        }
      });
    } else {
      let sql =
        "select * from idea where ideaindustry= ? and visibility=? and isapproved=?";
      console.log(req.query.ideaindustry, "2");
      model.query(sql, [req.query.ideaindustry, "public", 1], (err, result) => {
        if (err) {
          // console.log(user_id)
          console.log(JSON.stringify(err, undefined, 2));
          // console.log("error")
        } else {
          console.log(result, 1);
          res.send(result);
          // if(result[0].userrole=="admin"){
          //     let sql2 = "select * from idea";
        }
      });
    }
    var userinfo = session.getItem("useridinfo");
  }
};
exports.addjuryresponse = (req, res) => {
  if (session.getItem("signin") == true) {
    let idea_comment = {
      ideaid: req.body.ideaid,
      ideacomment: req.body.ideacomment,
      commentby: req.body.commentby,
      imageUrl: req.body.imageUrl,
      commentid: uuid.v1(),
    };
    let sql = "insert into idea_comment set ?";
    model.query(sql, idea_comment, (err, result) => {
      if (err) {
        // console.log(user_id)
        console.log(JSON.stringify(err, undefined, 2));
        // console.log("error")
      } else {
        console.log("response added");
      }
    });
  }
};
exports.getidea = (req, res) => {
  if (session.getItem("signin") == true) {
    console.log(req.body, "2");
    let sql = "select * from idea where ideaid=?";
    model.query(sql, [req.body.ideaid], (err, result) => {
      if (err) {
        // console.log(user_id)
        console.log(JSON.stringify(err, undefined, 2));
        // console.log("error")
      } else {
        console.log(result);
        let sql1 = "select username from user_details where userid=?";
        model.query(sql1, [result[0].userid], (err1, result1) => {
          if (err) {
            // console.log(user_id)
            console.log(JSON.stringify(err, undefined, 2));
            // console.log("error")
          } else {
            let sql2 = "select * from idea_comment where ideaid=?";
            model.query(sql2, [req.body.ideaid], (err2, result2) => {
              if (err) {
                // console.log(user_id)
                console.log(JSON.stringify(err, undefined, 2));
                // console.log("error")
              } else {
                // console.log(result,result1,result2);
                if (result2 != null) {
                  res.send({
                    ideaDetails: result[0],
                    author: result1[0].username,
                    comments: result2,
                  });
                } else {
                  res.send({
                    ideaDetails: result[0],
                    author: result1[0].username,
                    comments: null,
                  });
                }
              }
            });
          }
        });
      }
    });
  }
};
exports.getallitems = (req, res) => {
  if (session.getItem("signin") == true) {
    var userinfo = session.getItem("useridinfo");

    let sql2 = "select * from idea where userid=?";

    model.query(sql2, userinfo, (err, result) => {
      if (err) {
        // console.log(user_id)
        console.log(JSON.stringify(err, undefined, 2));
        // console.log("error")
      } else {
        // model.query(sql2,userinfo,(err,result)=>{
        //     if(err){
        // // console.log(user_id)
        // console.log( JSON.stringify(err,undefined,2));
        // // console.log("error")
        //     }
        //     else{

        //     }
        // });
        console.log(result);
        return res.send(result);
        // resultjuryremarks

        // Object.keys(result).forEach(function(key) {
        //     // var row = result[key];
        //     var ideaid = result[key].ideaid;
        //     var ideatitle=result[key].title;
        //     var ideadesc=result[key].description;
        //     var ideaimage=result[key].image;
        //     var ideavisibility=result[key].visibility;
        //     var ideaindustry=result[key].ideaindustry;
        //     var ideadomain=result[key].domain;
        //     var isapproved=result[key].isapproved;
        //    return res.status(200).json({"ideaid":ideaid,"ideatitle":ideatitle,"ideadescription":ideadesc,"ideaimage":ideaimage,"ideavisibility":ideavisibility,"ideaindustry":ideaindustry,"ideadomain":ideadomain,"isapproved":isapproved})
        //     // console.log(row.name)
        // });
      }
    });
  }
};

// const model = require('../../models/database')

// exports.getAllIdeas
