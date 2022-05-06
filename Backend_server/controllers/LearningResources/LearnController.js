const express = ("express")
const mysql = require('mysql')
const uuid = require('uuid')
const validator = require('email-validator')
const session = require('sessionstorage')
const model = require('../../models/database')
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
exports.addresource=(req,res)=>{
    if(session.getItem('signin')==true){
        var trainerid = session.getItem('useridinfo');
        var title = req.body.playlistname;
        var desc = req.body.description;
        var pic = req.body.pic;
        
    }
}
exports.changeenrollstatus=(req,res)=>{
    if(session.getItem('signin')==true){
        var userinfo = session.getItem('useridinfo');
        userinfo="6dbb0ba0-999e-11ec-ba73-d9e1c22c2fb81";
        // var title = session.getItem('playlistname');
        var title = req.body.playlistname
        // var trainerid = session.getItem('trainerid');
        var trainerid = req.body.trainerid
        console.log(userinfo);
        title="Algorithms course";
        trainerid="12"
        let sql = "update learning set enrolledstatus=1 where userid=? and title=? and trainerid=?";
        model.query(sql,[userinfo,title,trainerid],(err,result)=>{
            if(err){
                console.log( JSON.stringify(err,undefined,2));
            }
            else{
                console.log(result)
                res.send("query executed propely");
            }
            
        })
    }
    else{
        res.send("please signin first Thankyou");
    }
}
exports.getallitems=(req,res)=>{
    if(session.getItem('signin')==true){
        var userinfo = session.getItem('useridinfo');
        userinfo="6dbb0ba0-999e-11ec-ba73-d9e1c22c2fb81";
        console.log(userinfo);
        // let sql = "select userid from user_details where userid="+mysql.escape(userinfo);
        let sql = "select * from learning where userid="+mysql.escape(userinfo)
        model.query(sql,(err,result)=>{
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
                var completedstatus = result[0].completedstatus;
                var enrolledstatus = result[0].enrolledstatus;
                session.setItem("enrollstatus",enrolledstatus)
                
                console.log(result);
                // res.send(pic)
                res.json({"pic":pic,"title":title,"desc":desc,"completedstatus":completedstatus,"enrolledstatus":enrolledstatus})
            }
        })
    }
    else{
        res.send("please signin first Thankyou");
    }
    
}
exports.getplaylist=(req,res)=>{
    // trainer is uploading all the resources for the users who requested it.
    if(session.getItem('signin')==true && session.getItem("enrollstatus")==1){
        var title = session.getItem('playlistname');
        var trainerid = session.getItem('trainerid');
        var userinfo = session.getItem('useridinfo');
        var playlistname = title;
        trainerid="12";
        userinfo="6dbb0ba0-999e-11ec-ba73-d9e1c22c2fb81";
        title="Algorithms course";
        let sql = "select * from playlist where trainerid=? AND userid=? AND playlisttitle=?";
        model.query(sql,[trainerid,userinfo,title],(err,result)=>{
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
    else{
        if(session.getItem("signin")==false){
            res.send("please signin first Thankyou");
        }
        else if(session.getItem("enrollstatus")==0){
            res.send("please enroll first");
        }
    }
    
    
    
}

exports.getvideo=(req,res)=>{
    if(session.getItem('signin')==true && session.getItem("enrollstatus")==1){
        var videotitle = session.getItem('videotitle');
        var playlistname = session.getItem('playlistname');
        var trainer = session.getItem('trainerid');
        var userinfo = session.getItem('useridinfo');
        var desc = session.getItem('videodesc');
        userinfo="6dbb0ba0-999e-11ec-ba73-d9e1c22c2fb81";
        trainer="12";
        playlistname="Algorithms course";
        console.log(videotitle);
        let sql = "select * from playlist where trainerid=? and videotitle=? and playlisttitle=? and userid=? ";
        
        model.query(sql,[trainer,videotitle,playlistname,userinfo],(err,result)=>{
            if(err){
                console.log( JSON.stringify(err,undefined,2));
            }
            else{
                console.log("query executed properly");
                if(result.length>0)
                {
                    res.json({"videotitle":videotitle,"url":result[0].url});    
                }
                
            }
        })
    }
    else{
        if(session.getItem("signin")==false){
            res.send("please signin first Thankyou");
        }
        else if(session.getItem("enrollstatus")==0){
            res.send("please enroll in the course first");
        }
    }
}