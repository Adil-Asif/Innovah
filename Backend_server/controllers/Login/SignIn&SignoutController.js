const express = ("express")
const mysql = require('mysql')
const uuid = require('uuid')
const validator = require('email-validator')
const session = require('sessionstorage')
const model = require('../../models/database')
const bcrypt =require('bcrypt');
const { compareSync } = require('bcrypt')
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
    if(validator.validate(req.body.emailorname)){
        var email = req.body.emailorname
        let sql = "select * from user_details where email="+mysql.escape(email);
        model.query(sql,(err,result)=>{
            if(err){
                console.log( JSON.stringify(err,undefined,2));
                res.send("Sorry query didn't executed properly");
                session.setItem("signin",false)
            }    
            else{
                console.log(result)
                if(result.length>0){
                    var id = result[0].userid
                    console.log(id)
                    var pass = req.body.password
                    var dbpass = result[0].password;
                    var verified = bcrypt.compareSync(pass,dbpass);
                    // let sql1 = "select * from user_details where password="+mysql.escape(pass);
                    // model.query(sql1,(err,result)=>{
                        if(!verified){
                            console.log( JSON.stringify(err,undefined,2));
                            res.send("The password is incorrect")
                            session.setItem("signin",false)
                        }
                        else{
                            // if(result.length>0){
                                res.send("Welcome to our app")
                                session.setItem("useridinfo",id)
                                session.setItem("signin",true)
                                session.setItem("password",pass)
                                
                            
                            
                        }
                    
                }
                else{
                    res.send("Invalid email entered");
                    session.setItem("signin",false)
                }
            }
        })
        
    }
    else{
        var user_name = req.body.emailorname
        let sql = "select * from user_details where username="+mysql.escape(user_name);
        model.query(sql,(err,result)=>{
            if(err){
                console.log( JSON.stringify(err,undefined,2));
                res.send("Sorry the query didn't executed properly");
                session.setItem("signin",false)
            }    
            else{
                console.log(result)
                if(result.length>0){
                    var id = result[0].userid
                    console.log(id)
                    var pass = req.body.password
                    var dbpass = result[0].password;
                    var verified = bcrypt.compareSync(pass,dbpass);
                    // let sql1 = "select * from user_details where password="+mysql.escape(pass);
                    // model.query(sql1,(err,result)=>{
                        if(!verified){
                            console.log( JSON.stringify(err,undefined,2));
                            res.send("The password is incorrect")
                            session.setItem("signin",false)
                        }
                        else{
                            // if(result.length>0){
                                res.send("Welcome to our app")
                                session.setItem("useridinfo",id)
                                session.setItem("signin",true)
                                session.setItem("password",pass)
                            
                            
                        }
                    
                    // let sql1 = "select * from user_details where password="+mysql.escape(pass);
                    // model.query(sql1,(err,result)=>{
                    //     if(err){
                    //         console.log( JSON.stringify(err,undefined,2));
                    //     }
                    //     else{
                    //         if(result.length>0){
                    //             res.send("Welcome to our app")
                    //             session.setItem("useridinfo",id)
                    //             session.setItem("signin",true)
                    //             // console.log(session.getItem("userinfo"))
                    //         }
                    //         else{
                    //             res.send("The password is incorrect")
                    //             session.setItem("signin",false)
                    //         }
                    //     }
                    // })
                }
                else{
                    res.send("Invalid username entered");
                    session.setItem("signin",false);
                }
            }
        })
        
    }
    
    
    // res.send("the data is sent from Login")
}
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
exports.enterdata = (req,res)=>{
    var user_id = uuid.v1();
    var correct =false;
    console.log(req);
    console.log(req.body.password);
    var pass = bcrypt.hashSync(req.body.password,12);
    let userinfo = {
        username:req.body.username,
        city:req.body.city,
        ph_num:req.body.mobilenumber,
        country:req.body.country,
        gender:req.body.gender,
        industry:req.body.industry,
        userrole:req.body.userrole,
        picture:req.body.picture,
        userid:user_id,
        email:req.body.email,
        password:pass,
        fullname:req.body.fullname,
        resume_desc:req.body.resume
        
    };
    for (var key in userinfo){
        if(typeof userinfo[key]!=="string" && userinfo[key].length>0){
            res.send("plzzz enter the correct data");
            correct=false;   
            
        }
        else{
            correct=true;
        }
    }
    // const userinfo = req.body
    if(correct){
        let sql = "insert into user_details set ?";
        model.query(sql,userinfo,(err,result)=>{
            if(err){
                console.log(user_id)
                console.log( JSON.stringify(err,undefined,2));
                // console.log("error")
            }
            else{
                console.log(result);
                res.send(result)
            }
        });
    }    
    // console.log("hi")
    // console.log(userdetails);
    // res.json(userdetails);
    
}

