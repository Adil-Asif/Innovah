const express = ("express")
const mysql = require('mysql')
const uuid = require('uuid')
const validator = require('email-validator')
const session = require('sessionstorage')
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'fypdb'
});
db.connect((err)=>{
    if(err){
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
        

    }
    else{
        console.log("mysql connected");    
    }
});


exports.getallitems=(req,res)=>{
    var userinfo = session.getItem('useridinfo');
    console.log(userinfo);
    // let sql = "select userid from user_details where userid="+mysql.escape(userinfo);
    let sql = "select * from learning where userid="+mysql.escape(userinfo)
    db.query(sql,(err,result)=>{
        if(err){
             console.log( JSON.stringify(err,undefined,2));
        }
        else{
            // console.log(result)
            var pic = result[0].imageurl;
            var title = result[0].title;
            var desc = result[0].description;
            var status = result[0].status;
            console.log(result);
            // res.send(pic)
            res.json({"pic":pic,"title":title,"desc":desc,"status":status})
        }
    })
    
}