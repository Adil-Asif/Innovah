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
            session.setItem('trainerid',result[0].trainerid);
            session.setItem('playlistname',result[0].title);
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
exports.getplaylist=(req,res)=>{
    // trainer is uploading all the resources for the users who requested it.
    var title = session.getItem('playlistname');
    var trainerid = session.getItem('trainerid');
    var userinfo = session.getItem('useridinfo');
    var playlistname = title;
    let sql = "select * from playlist where trainerid=? AND userid=? AND playlisttitle=?";
    db.query(sql,[trainerid,userinfo,title],(err,result)=>{
        if(err){
            console.log( JSON.stringify(err,undefined,2));
        }
        else{
            console.log("query executed properly");
            if(result.length>0){
                session.setItem('videotitle',result[0].videotitle);
                session.setItem('videodesc',result[0].description);
                res.json({"playlistname":playlistname,"title":result[0].videotitle,"desc":result[0].description,"status":result[0].status});    
            }
            
        }
    })
    
    
    
    
}
exports.getvideo=(req,res)=>{
    var videotitle = session.getItem('videotitle');
    var playlistname = session.getItem('playlistname');
    var trainer = session.getItem('trainerid');
    var userinfo = session.getItem('useridinfo');
    var desc = session.getItem('videodesc');
    let sql = "select * from playlist where trainerid=? and videotitle=? and playlisttitle=? and userid=? ";
    db.query(sql,[trainer,videotitle,playlistname,userinfo],(err,result)=>{
        if(err){
            console.log( JSON.stringify(err,undefined,2));
        }
        else{
            console.log("query executed properly");
            if(result.length>0)
            {
                res.json({"videotitle":videotitle,"desc":desc,"url":result[0].url});    
            }
            
        }
    })
    
}