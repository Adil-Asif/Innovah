const express = "express";
const mysql = require("mysql");
const uuid = require("uuid");
const validator = require("email-validator");
const session = require("sessionstorage");
const model = require("../../models/database");
const bcrypt = require("bcryptjs");
const { json } = require("body-parser");
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

// this is the file where our logic will be implemented and all functionalities will be defined here
// always do type checking for variables to mainatain integrity of code
exports.CheckCredentials = (req, res) => {
  const obj = req.body.obj;
  console.log(req.body);
//   if (validator.validate(obj.emailorname)) {
    var email = obj.emailorname;
    let sql = "select * from user_details where email=" + mysql.escape(email);
    model.query(sql, (err, result) => {
      if (err) {
        console.log(JSON.stringify(err, undefined, 2));
        res.send("Sorry query didn't executed properly");
        session.setItem("signin", false);
      } else {
        console.log(result[0], "k");
        if (result.length > 0) {
          var id = result[0].userid;
          console.log(id);
          var pass = obj.password;
          console.log(pass)
          var dbpass = result[0].password;
          console.log(dbpass);
          const verified = bcrypt.compareSync(pass, dbpass);
          // let sql1 = "select * from user_details where password="+mysql.escape(pass);
          // model.query(sql1,(err,result)=>{
          if (!verified) {
            console.log(JSON.stringify(err, undefined, 2));
            res.send("Invalid Password");
            session.setItem("signin", false);
          } else {
            // if(result.length>0){
            res.send("Welcome to our app");
            session.setItem("useridinfo", id);
            session.setItem("signin", true);
            session.setItem("password", pass);
          }
        } else {
          res.send("Invalid Email");
          session.setItem("signin", false);
        }
      }
    });
//   }
  //   else {
  //     var user_name = req.body.emailorname;
  //     let sql =
  //       "select * from user_details where username=" + mysql.escape(user_name);
  //     model.query(sql, (err, result) => {
  //       if (err) {
  //         console.log(JSON.stringify(err, undefined, 2));
  //         res.send("Sorry the query didn't executed properly");
  //         session.setItem("signin", false);
  //       } else {
  //         console.log(result);
  //         if (result.length > 0) {
  //           var id = result[0].userid;
  //           console.log(id);
  //           var pass = req.body.password;
  //           var dbpass = result[0].password;
  //           const verified = bcrypt.compareSync(pass, dbpass);
  //           // let sql1 = "select * from user_details where password="+mysql.escape(pass);
  //           // model.query(sql1,(err,result)=>{
  //           if (!verified) {
  //             console.log(JSON.stringify(err, undefined, 2));
  //             res.send("The password is incorrect");
  //             session.setItem("signin", false);
  //           } else {
  //             // if(result.length>0){
  //             res.send("Welcome to our app");
  //             session.setItem("useridinfo", id);
  //             session.setItem("signin", true);
  //             session.setItem("password", pass);
  //           }

  //           // let sql1 = "select * from user_details where password="+mysql.escape(pass);
  //           // model.query(sql1,(err,result)=>{
  //           //     if(err){
  //           //         console.log( JSON.stringify(err,undefined,2));
  //           //     }
  //           //     else{
  //           //         if(result.length>0){
  //           //             res.send("Welcome to our app")
  //           //             session.setItem("useridinfo",id)
  //           //             session.setItem("signin",true)
  //           //             // console.log(session.getItem("userinfo"))
  //           //         }
  //           //         else{
  //           //             res.send("The password is incorrect")
  //           //             session.setItem("signin",false)
  //           //         }
  //           //     }
  //           // })
  //         } else {
  //           res.send("Invalid username entered");
  //           session.setItem("signin", false);
  //         }
  //       }
  //     });
  //   }

  // res.send("the data is sent from Login")
};
// exports.entercredentials=(req,res)=>{
//     let usercredentials={
//         email:req.body.email,
//         password:req.body.password
//     };
//     let sql = "insert into user_details set ?";
//     db.query(sql,usercredentials,(err,result)=>{
//         if(err){
//             console.log( JSON.stringify(err,undefined,2));
//         }
//         else{
//             console.log(result);
//             res.send(result)
//         }
//     });

// }
exports.enterdata = (req, res) => {
  const userDetails = req.body.accountDetails;
  var user_id = uuid.v1();
  var correct = false;
  const pass = bcrypt.hashSync(userDetails.password, 12);
  let userinfo = {
    username: userDetails.username,
    city: userDetails.city,
    ph_num: userDetails.mobilenumber,
    country: userDetails.country,
    gender: userDetails.gender,
    industry: userDetails.industry,
    userrole: userDetails.userrole,
    picture: userDetails.picture,

    userid: user_id,
    email: userDetails.email,
    password: pass,
    fullname: userDetails.fullname,
    resume_desc: userDetails.resume,
    innovahpoints:5000
  };
  for (var key in userinfo) {
    console.log();
    if (typeof key !== "string" && key.length > 0) {
      res.send("plzzz enter the correct data");
      correct = false;
    } else {
      correct = true;
    }
  }
  // const userinfo = userDetails
  if (correct) {
    let sql = "insert into user_details set ?";
    model.query(sql, userinfo, (err, result) => {
      if (err) {
        console.log(user_id);
        console.log(JSON.stringify(err, undefined, 2));
        res.send("Error");
        // console.log("error")
      } else {
        console.log(result);
        res.send(result);
      }
    });
  }
  // console.log("hi")
  // console.log(userdetails);
  // res.json(userdetails);
};
