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
exports.addplaylist=(req,res)=>{
    if(session.getItem('signin')==true){
        // var trainerid = session.getItem('useridinfo');
        var playlistid = uuid.v1();
        let playlistinfo = {
        
         trainerid: req.body.trainerid,
         userid : req.body.userid,
         title : req.body.playlistname,
         description : req.body.description,
         completedstatus : 0,
         imageurl : req.body.pic,
         playlistid:playlistid,
         
         enrolledstatus : 0

        
    };
        let sql = "insert into learning set ?";
        model.query(sql,playlistinfo,(err,result)=>{
            if(err){
                console.log(user_id)
                console.log( JSON.stringify(err,undefined,2));
                // console.log("error")
            }
            else{
                console.log(result);
                res.JSON(playlistinfo)
            }
        });
        
                
        
    }
}
exports.addvideo=(req,res)=>{
    if(session.getItem('signin')==true){
        // var trainerid = session.getItem('useridinfo');
        var videoid = uuid.v1();
        let videoinfo = {
         id:videoid,
         trainerid: req.body.trainerid,
         status : 0,
         playlisttitle : req.body.playlistname,
         description : req.body.description,
         userid : req.body.userid,
         videotitle:req.body.videotitle,
         videoiframe:req.body.videoiframe
         
         
         

        
    };
        let sql = "insert into playlist set ?";
        model.query(sql,videoinfo,(err,result)=>{
            if(err){
                console.log(user_id)
                console.log( JSON.stringify(err,undefined,2));
                // console.log("error")
            }
            else{
                console.log(result);
                res.JSON(videoinfo)
            }
        });
    }
}
// need to store the playlostid userid and all the videoids of the playlist here
exports.changeenrollstatus=(req,res)=>{
    if(session.getItem('signin')==true){
        var userinfo = session.getItem('useridinfo');
        userinfo="6dbb0ba0-999e-11ec-ba73-d9e1c22c2fb81";
        // var title = session.getItem('playlistname');
        var playid = req.body.playlistid
        // var trainerid = session.getItem('trainerid');
        var trainerid = req.body.trainerid
        console.log(userinfo);
        // title="Algorithms course";
        trainerid="12"
        let sql = "update learning set enrolledstatus=1 where userid=? and playlistid=? and trainerid=?";
        model.query(sql,[userinfo,playid,trainerid],(err,result)=>{
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
// condition if a user enrolls in 2 playlists consecutively and then view each one
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
                // below 2 lines are useless
                // session.setItem('trainerid',result[0].trainerid);
                // session.setItem('playlistname',result[0].title);
                // console.log(result)
                // var trainerid =
                Object.keys(result).forEach(function(key) {
                    // var row = result[key];
                    var trainerid =result[key].trainerid;
                    var playlistid = result[key].playlistid; 
                    var pic = result[key].imageurl;
                    var title = result[key].title;
                    var desc = result[key].description;
                    var completedstatus = result[key].completedstatus;
                    var enrolledstatus = result[key].enrolledstatus;
                    res.json({"pic":pic,"title":title,"trainerid":trainerid,"playlistid":playlistid,"desc":desc,"completedstatus":completedstatus,"enrolledstatus":enrolledstatus})
                    // console.log(row.name)
                });
                
                // session.setItem("enrollstatus",enrolledstatus)
                
                // console.log(result);
                // res.send(pic)
                
            }
        })
    }
    else{
        res.send("please signin first Thankyou");
    }
    
}
exports.getplaylist=(req,res)=>{
    // trainer is uploading all the resources for the users who requested it.
    if(session.getItem('signin')==true ){
        var title = req.body.playlisttitle;
        // var playid = req.body.playlistid;
        // var trainerid = req.body.trainerid;
        // var title = session.getItem('playlistname');
        // var trainerid = session.getItem('trainerid');
        var userinfo = session.getItem('useridinfo');
        var playlistname = title;
        // trainerid="12";
        userinfo="6dbb0ba0-999e-11ec-ba73-d9e1c22c2fb81";
        title="Algorithms course";
        let sql = "select * from playlist where userid=? AND playlisttitle=?";
        model.query(sql,[userinfo,title],(err,result)=>{
            if(err){
                console.log( JSON.stringify(err,undefined,2));
            }
            else{
                console.log("query executed properly");
                if(result.length>0){
                    Object.keys(result).forEach(function(key) {
                    // var row = result[key];
                    var videoid =result[key].id;
                    var playlisttitle = result[key].playlisttitle;
                    var trainerid = result[key].trainerid;
                    var status = result[key].status;
                    // var desc = result[key].description;
                     
                    // var pic = result[key].imageurl;
                    var title = result[key].videotitle;
                    var desc = result[key].description;
                    // var completedstatus = result[key].completedstatus;
                    // var enrolledstatus = result[key].enrolledstatus;
                    res.json({"title":title,"trainerid":trainerid,"playlisttitle":playlisttitle,"desc":desc,"status":status,"videoid":videoid})
                    // console.log(row.name)
                });
                    // session.setItem('videotitle',result[0].videotitle);
                    // session.setItem('videodesc',result[0].description);
                    // res.json({"playlistname":playlistname,"title":result[0].videotitle,"desc":result[0].description,"status":result[0].status});    
                }
                
            }
        })
    }
    else{
        if(session.getItem("signin")==false){
            res.send("please signin first Thankyou");
        }
        
    }
    
    
    
}

exports.getvideo=(req,res)=>{
    if(session.getItem('signin')==true){
        // var videotitle = session.getItem('videotitle');
        // var playlistname = session.getItem('playlistname');
        // var trainer = session.getItem('trainerid');
        var userinfo = session.getItem('useridinfo');
        // var desc = session.getItem('videodesc');
        userinfo="6dbb0ba0-999e-11ec-ba73-d9e1c22c2fb81";
        // trainer="12";
        // playlistname="Algorithms course";
        var videoid = req.body.id;
        // console.log(videotitle);
        let sql = "select * from playlist where id=? and userid=? ";
        
        model.query(sql,[videoid,userinfo],(err,result)=>{
            if(err){
                console.log( JSON.stringify(err,undefined,2));
            }
            else{
                console.log("query executed properly");
                if(result.length>0)
                {
                    var videotitle = result[0].videotitle;
                    
                    res.json({"videotitle":videotitle,"url":result[0].videoiframe,"trainerid":result[0].trainerid,"status":result[0].status,"playlisttitle":result[0].playlisttitle,"desc":result[0].description});    
                }
                
            }
        })
    }
    else{
        if(session.getItem("signin")==false){
            res.send("please signin first Thankyou");
        }
        
    }
}