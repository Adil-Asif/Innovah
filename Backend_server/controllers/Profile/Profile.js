const express = ("express")
const mysql = require('mysql')
const uuid = require('uuid')
const validator = require('email-validator')
const session = require('sessionstorage')
const model = require('../../models/database')


exports.getalldetails = (req,res)=>{
    if(session.getItem('signin')==true){
        var userinfo = session.getItem('useridinfo');
        var pass = session.getItem('password');
        let sql = "select * from user_details where userid="+mysql.escape(userinfo)
        model.query(sql,(err,result)=>{
            if(err){
                console.log( JSON.stringify(err,undefined,2));
            }
            else{

                // console.log(result)
                var username = result[0].username;
                var city = result[0].city;
                var phnum = result[0].ph_num;
                var country = result[0].country;
                var gender = result[0].gender;
                var industry = result[0].industry;
                var role = result[0].userrole;
                var picture = result[0].picture;
                var userid = result[0].userid;
                var email = result[0].email;
                var password = pass;
                var fullname = result[0].fullname;
                var resume_desc = result[0].resume_desc;
                
                console.log(result);
                // res.send(pic)
                res.json({"username":username,"city":city,"phnum":phnum,"country":country,"gender":gender,"industry":industry,"role":role,"picture":picture,"userid":userid,"email":email,"password":password,"fullname":fullname,"resume_desc":resume_desc})
            }
        })
    }
}